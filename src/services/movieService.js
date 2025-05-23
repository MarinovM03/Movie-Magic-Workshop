const movies = [
    {
        id: "a3682672-0ee4-1284-8759-35ee253329zv",
        title: 'Jungle Cruise',
        genre: 'Adventure',
        description: 'Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.',
        imageUrl: '/img/jungle-cruise.jpeg',
        director: 'Jaume Collet-Serra',
        year: '2021',
        rating: 6.6,
        category: 'movie',
    },
    {
        id: "z2682672-0ee4-1534-8759-35ee253329ty",
        title: 'Man of Steel',
        genre: 'Superhero',
        description: 'An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth. Kal-El, son of Jor-El and Lara, is sent to Earth after his home planet Krypton leads to a complete incineration.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_FMjpg_UX1000_.jpg',
        director: 'Zack Snyder',
        year: '2013',
        rating: 7.1,
        category: 'movie',
    },
    {
        id: "81313c94-08e0-40bf-85bc-1e7cdeebbef9",
        title: 'Avengers: Endgame',
        genre: 'Superhero',
        description: "The fourth installment in the Avengers saga is the culmination of 22 interconnected Marvel films and the climax of a journey. The world's heroes finally understand just how fragile reality is, and the sacrifices that must be made to uphold it, in a story of friendship, teamwork and setting aside differences to overcome an impossible obstacle.",
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
        director: 'Anthony Russo',
        year: '2019',
        rating: 8.4,
        category: 'movie',
    }
];

export default {
    getAll() {
        return movies;
    }
}
