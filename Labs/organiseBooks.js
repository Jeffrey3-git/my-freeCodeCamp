const books = [
  {
    title: "recommending Jasbot",
    authorName: "Jeff",
    releaseYear: 2038,
  },
  {
    title: "Knowing Jasbot",
    authorName: "Selasi",
    releaseYear: 2025,
  },
  {
    title: "How to use Jasbot",
    authorName: "Jeffrey",
    releaseYear: 2027,
  },
  {
    title: "Jasbot",
    authorName: "Gakpovi",
    releaseYear: 2010,
  }
];

function sortByYear(firstBook, secondBook){
  if (firstBook.releaseYear < secondBook.releaseYear){
    return -1;
  } else if (firstBook.releaseYear > secondBook.releaseYear){
    return 1;
  } else if (secondBook.releaseYear === firstBook.releaseYear){
    return 0;
  }
}

let filteredBooks = books.filter(book => book.releaseYear < 2035);

console.log(filteredBooks.sort(sortByYear));
