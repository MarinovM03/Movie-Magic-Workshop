import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import { auth } from './middlewares/authMiddleware.js';
import routes from './routes.js';
import { tempData } from './middlewares/tempDataMiddleware.js';

const app = express();

app.use(express.static('./src/public'));

// Add cookie parser
app.use(cookieParser());

// Add body parser
app.use(express.urlencoded());

// Add session
app.use(session({
    secret: 'DAHUWDWKLA09()AdNAKW:ldA=0-9a',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true },
}));

// Add auth middleware
app.use(auth);

// Use tempData middleware
app.use(tempData);

// Add and config view engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        showRating(rating) {
            return '★'.repeat(Math.floor(rating));
        }
    },
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true 
    }
}));

// Connect database
try {
   await mongoose.connect(`mongodb://localhost:27017`, { dbName: 'magic-movies-workshop' });
   console.log('Successfully connected!');
   
} catch (err) {
    console.log('Cannot connect to DB!');
    console.log(err.message);
}

app.set('view engine', 'hbs');

// Set default view folder
app.set('views', './src/views');

// Add routes
app.use(routes);

app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));