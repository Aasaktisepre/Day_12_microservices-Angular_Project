package com.mamba.bookservice.services;

import com.mamba.bookservice.entities.Book;
import com.mamba.bookservice.exceptions.BookNotFoundException;
import com.mamba.bookservice.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BookServicee {
    @Autowired
    private BookRepository bookRepository;



    public Book createBook(Book book) { // Renamed Method
        return bookRepository.save(book);
    }

    public List<Book> getAllBook() {
        return bookRepository.findAll();
    }

    public Book getBookById(int bookId) {
        return bookRepository.findById(bookId)
                .orElseThrow(() -> new BookNotFoundException("Book not found with this bookId: " + bookId));
    }

    public Book updateBook(int bookId, Book book) {
        Book updateBook = getBookById(bookId);

        updateBook.setBookName(book.getBookName());
        updateBook.setAuthor(book.getAuthor());
        updateBook.setGenre(book.getGenre());
        updateBook.setSalesNumber(book.getSalesNumber());

        return bookRepository.save(updateBook);
    }

    public String deleteBook(int bookId) {
        Book deleteBook = getBookById(bookId);
        bookRepository.delete(deleteBook);
        return "Book Deleted with bookId: " + bookId;
    }

    public List<Book> findBookByAuthor(String author) {
        return bookRepository.findByAuthor(author);
    }

    public List<Book> findBookBySalesNumber(Integer salesNumber) {
        return bookRepository.findBySalesNumberGreaterThan(salesNumber);
    }

    public List<Book> findBookByGenre(String genre) {
        return bookRepository.findByGenre(genre);
    }

    public List<Book> findBookByBookName(String bookName) {
        return bookRepository.findByBookName(bookName);
    }
}
