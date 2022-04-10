import  './BookInfo.scss'
import { useParams, useNavigate } from "react-router-dom"

function BookInfo( {booksArray} ) {
    const navigate = useNavigate();
    let {bookid} = useParams();
    let book = booksArray.find(item => item.id == bookid);


    return (
    <div className="book__color">
        <div className="container">
            <button className="book__back btn btn-success" onClick={() => navigate(-1)}>Назад</button>
            <div className="row">
                <div className="col-md-3">
                    <img className="book__img" src={book.thumbnail} alt=""/>
                </div>
                <div className="col-md-9">
                    <h2>{book.name}</h2>
                    <h5>{book.authors}</h5>
                    <div><b>Год издания:</b> {book.publishedDate}</div>
                    <div><b>Издатель:</b> {book.publisher}</div>
                    <div><b>Жанр:</b> {book.genre}</div>
                    <div className='book__descr'><b>Описание:</b> {book.description}</div>
                    <a href={book.infoLink} className="book__store btn btn-success" target="_blank">Страница в магазине</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BookInfo