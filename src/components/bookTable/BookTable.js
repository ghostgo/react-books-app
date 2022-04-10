import {useNavigate} from "react-router-dom"
import './BookTable.scss'

function BookTable({booksArray}) {                //props (books, onBookSelected)
  const navigate = useNavigate();

  const onClick = (book) => {
    navigate('/book/' + book.id);
  };

  function renderItems(arr) {
    const items = arr.map((book,i) => { return (
      <tr key={book.id} onClick={() => onClick(book)}>
        <th scope="row">{i+1}</th>
        <td>{book.name}</td>
        <td>{book.genre}</td>
        <td>{book.authors}</td>
        <td>{book.publishedDate}</td>
      </tr>
    )} );

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название книги</th>
          <th scope="col">Жанр</th>
          <th scope="col">Авторы</th>
          <th scope="col">Год</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
    )
  }

  return (
    <div className="book__table">
      {renderItems(booksArray)}
    </div>
  );
}

export default BookTable