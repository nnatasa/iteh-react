const Books = ({books, handleDelete}) => {
     //const books = props.books;
    return(
        <div className="blog-list">
              {books.map((book) => (
                <div className="blog-preview" key={book.id}>
                    <h2>Naziv: {book.title}</h2>
                    <p1>Pisac: {book.author}</p1>
                    <p1> <br/></p1><button onClick={() => handleDelete(book.id)}>Obrisi knjigu</button>
                </div>
            ))}
        </div>
      );
}
 
export default Books;