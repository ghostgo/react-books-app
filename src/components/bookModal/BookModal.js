import './BookModal.scss';

function BookModal({ active, setActive }) {

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>

      <button className='modal__close' onClick={() => setActive(false)}><b>X</b></button>
      <h2 className='modal__header'>Добавление книги</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="book-name" className="form-label">Название книги:</label>
            <input type="text" className="form-control" id="book-name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="book-authors" className="form-label">Автор:</label>
            <input type="text" className="form-control" id="book-authors"/>
          </div>
          <div className="mb-3">
            <label htmlFor="book-genre" className="form-label">Жанр:</label>
            <input type="text" className="form-control" id="book-genre"/>
          </div>
          <div className="mb-3">
            <label htmlFor="book-publisher" className="form-label">Издатель:</label>
            <input type="text" className="form-control" id="book-publisher"/>
          </div>
          <div className="mb-3">
            <label htmlFor="book-published-date" className="form-label">Дата издания:</label>
            <input type="date" className="form-control" id="book-published-date"/>
          </div>
          <div className="mb-3">
            <label htmlFor="book-description" className="form-label">Описание:</label>
            <textarea className="form-control" id="book-description" rows="2"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="book-thumbnail" className="form-label">Обложка:</label>
            <input className="form-control" type="file" id="formFile"/>
          </div>
          <button type="submit" className="btn btn-success">Добавить</button>
        </form>

      </div>
    </div>
  )
  }
  
  export default BookModal;