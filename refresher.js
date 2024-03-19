// Essential JS For React

const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
const book = getBook(3);
book;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre] = genres;

// using Rest Operator (...) to get the other value from genres
const [primaryGenre, secondaryGenre, ...all] = genres;

console.log(primaryGenre, secondaryGenre, all);

// using Spread Operator to create a new array and add an item to that new array
const newGenres = [...genres, 'epic fantasy'];
newGenres;

// using Spread Operator on object to add a new key-value pair, and update a key value
const updatedBook = {
  ...book,

  // Adding new property
  moviePublicationDate: '2001-12-19',

  // Updating an existing property
  pages: 1210,
};
updatedBook;

// Template Literals

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split('-')[0]
}. The book has ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie`;
summary;

// Ternary

const pageRange = pages > 1000 ? 'over a thousand' : 'less than 1000';
pageRange;
console.log(`The book has ${pageRange} pages`);

// Arrow Function
const getYear = (str) => str.split('-')[0];
console.log(getYear(publicationDate));

// Short Circuit
console.log(true && 'some string'); // no short circuit
console.log(false && 'some string'); // short circuit, no need to look for second value
console.log(hasMovieAdaptation && 'This book has a movie');

// falsy: 0, -0, "", null, undefined, ``, NaN, document.all
console.log('' && 'Some String');

console.log(true || 'Some String');
console.log(false || 'Some String');

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || 'Not Translated';
spanishTranslation;

console.log(book.reviews?.librarything?.reviewsCount || 'Test');

// nullish coalescing operator to use the value 0 or empty string when short circuiting
const count = book.reviews?.librarything?.reviewsCount ?? 'no data'; // Will only return second value if the first value is null or undefined
count;

// Optional Chaining "?"
const getTotalReviewCount1 = (book) => {
  const goodReads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodReads + librarything;
};

console.log(getTotalReviewCount1(book));

const getTotalReviewCount2 = (book) => {
  const goodReads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodReads + librarything;
};

//Functional Array Methods
// Do not mutate original Array, it will return an element based on the original array

const books = getBooks();

// Map
const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount2(book),
}));

essentialData;

// Filter chain
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((books) => books.genres.includes('adventure'))
  .map((book) => book.title);

adventureBooks;

// Reduce
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

const test1 = [3, 2, 31, 45, 63, 6].reduce((acc, el) => {
  acc[el] = el * 2;
  return acc;
}, {});
test1;

// Sort
//Mutates an array and returns a reference to the same array
const xArr1 = [3, 7, 1, 9, 6];
const sorted1 = xArr1.sort((a, b) => a - b); // a is current value, b is next value
xArr1;
sorted1;

// Use slice to make a copy of array before sorting
const xArr2 = [3, 7, 1, 9, 6];
const sorted2 = xArr2.slice().sort((a, b) => a - b); // a is current value, b is next value
xArr2;
sorted2;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// Working with immutable Arrays map, filter, reduce

// 1. Add book object to array
const newBook = {
  id: 6,
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J. K. Rowling',
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2. Delete book object from array
const booksAfterDel = books.filter((book) => book.id !== 1);
booksAfterDel;

// 3. Update book object in the array
const booksAfterUpdate = books.map((book) =>
  book.id === 3 ? { ...book, pages: 6969 } : book
);
booksAfterUpdate;

// Asynchronous Javascript
// Promises
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((data) => console.log(data));

const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
};

getTodos();
