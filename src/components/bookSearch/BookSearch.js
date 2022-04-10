import './BookSearch.scss';
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookList from '../bookList/BookList';
import BookTable from '../bookTable/BookTable';
import BookService from '../../services/BookService'
import BookModal from '../bookModal/BookModal';

function BookSearch({booksArray, setBooksArray}) {
    let {searchid} = useParams();
    const [query,setQuery] = useState(searchid);
    const [radio,setRadio] = useState(false);
    const bookService = new BookService();
    const navigate = useNavigate();
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
       if (query !== undefined) getBooksArray(query);
    }, [])

    function getBooksArray(query) {
        bookService.getBooks(query).then(res => {
            setBooksArray(res);
        });
    }

    function onSubmit(e) {
        e.preventDefault();
    }

    function onSearchClick() {
        if (query !== undefined) {
        navigate("/"+ query)
        getBooksArray(query);
        }
    }
    
    function onTextChange(e) {
        setQuery(e.target.value);
    }

    function showBooks(isTable) {
        if (isTable) 
        return (<BookTable booksArray={booksArray}/>); else 
        return (<BookList booksArray={booksArray}/>)
    }

    return (
        <div className="container">
            <BookModal active={modalActive} setActive={setModalActive}/>
            <form onSubmit={onSubmit} className="app__header">
                <h1>Google Books Search</h1>
                <input onChange={onTextChange} className="search__input form-control" type="text" placeholder="Введите название..." /> 
                <button onClick={onSearchClick} className="btn btn-success">Найти</button>
                <div className="search__button btn-group" role="group">
                    <input type="radio" className="btn-check " onChange={() => setRadio(false)} name="btnradio" id="btnradio1" autoComplete="off" checked={radio === false}/>
                    <label className="btn btn-outline-success" htmlFor="btnradio1">Сетка</label>
                    <input type="radio" className="btn-check" onChange={() => setRadio(true)} name="btnradio" id="btnradio2" autoComplete="off" checked={radio === true}/>
                    <label className="btn btn-outline-success" htmlFor="btnradio2">Таблица</label>
                </div>
                <button className="search__button btn btn-success" onClick={() => setModalActive(true)}>Добавить книгу</button> 
            </form>
            {showBooks(radio)}
        </div>
    )
}

export default BookSearch