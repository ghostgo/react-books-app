class BookService {
    _apiBase = 'https://www.googleapis.com/books/v1/volumes';
    _apiKey = 'key=AIzaSyDveFpOa1bkkOFeG0KAdIY5OPXlZDCA5gA';
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getBooks = async (query) => {
        const res = await this.getResource(`${this._apiBase}?q=${query}&maxResults=20&${this._apiKey}`);
        return res.items.map(this.transformBook);
    }

    getBookById = async (id) => {
        const res = await this.getResource(`${this._apiBase}/${id}?${this._apiKey}`);
        return this.transformBook(res);
    }
    
    transformBook = (book) => {
        let thumbnail = 'https://books.google.ru/googlebooks/images/no_cover_thumb.gif';
        let hasThumbnail = book.volumeInfo.hasOwnProperty('imageLinks');
        let hasGenre = book.volumeInfo.hasOwnProperty('categories');
        let hasAuthors = book.volumeInfo.hasOwnProperty('authors');
        let hasPublisher = book.volumeInfo.hasOwnProperty('publisher');
        let hasPublishedDate = book.volumeInfo.hasOwnProperty('publishedDate');
        let hasDescription = book.volumeInfo.hasOwnProperty('description');
        let hasInfoLink = book.volumeInfo.hasOwnProperty('infoLink');

        return { 
            id: book.id,
            name: book.volumeInfo.title,
            genre: hasGenre ? book.volumeInfo.categories.join(", ") : 'N/A',
            authors: hasAuthors ? book.volumeInfo.authors.join(", ") : 'N/A',
            publisher: hasPublisher ? book.volumeInfo.publisher : 'N/A',
            publishedDate: hasPublishedDate ? book.volumeInfo.publishedDate : 'N/A',
            description: hasDescription ? book.volumeInfo.description : 'N/A',
            smallThumbnail: hasThumbnail ? book.volumeInfo.imageLinks.thumbnail : thumbnail,
            thumbnail: hasThumbnail ? `https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w300` : thumbnail,
            infoLink: hasInfoLink ? book.volumeInfo.infoLink : null
        }
    }
}

export default BookService;
  
