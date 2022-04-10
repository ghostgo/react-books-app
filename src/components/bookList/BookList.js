import {useNavigate} from "react-router-dom"
import  './BookList.scss'

function BookList({booksArray}) {              //props (books, onBookSelected)
  const navigate = useNavigate();

  const onClick = (book) => {
    navigate('/book/' + book.id);
  };

  function renderItems(array) {
    const items = array.map((book) => (
      <li className="col" key={book.id}>
        <div className="card h-100" onClick={() => onClick(book)}>
          <img className="card-img" src={book.smallThumbnail} alt="img"/>
          <div className="card-body">
            <h5 className="card-title">{book.name}</h5>
            <div className="card-text">{book.authors}</div>
          </div>
        </div>
      </li>
    ) );
    return (
      <ul className="row  row-cols-md-4 g-4">
        {items}
      </ul>
    )
  }

  return (
    <div className="book__list">
      {renderItems(booksArray)}
    </div>
  );
  }

export default BookList