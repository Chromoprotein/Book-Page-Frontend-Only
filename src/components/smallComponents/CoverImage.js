export default function coverImage(book) {
    return book.imgSrc
      ? book.imgSrc
      : "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png";
}