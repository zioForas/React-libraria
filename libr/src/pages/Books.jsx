import React from 'react';
import Book from '../components/ui/Book';
import { books } from '../data';

const Books = () => {
    return (
        <div id="books__body
        main#books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header"></div>
                        <h2 className='sectuib__title books__header--title'>All Books</h2>
                        <select id="filter" defaultValue="DEFAULT">
                            <option value="DEFAULT" disabled>Sort</option>
                            <option value="LOW_TO_HIGH">Price, Low to High</option>
                            <option value="HIGH_TO_LOW">Price, High to Low</option>
                            <option value="RATING">Highest rated</option>
                        </select>
                    </div>
                    <div className="books">
                        {books.map((book) =>(
                        <Book book={book} key={book.id} />))}
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Books;
