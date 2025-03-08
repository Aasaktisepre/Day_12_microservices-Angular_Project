package com.mamba.bookservice.controllers;

import com.mamba.bookservice.entities.Book;
import com.mamba.bookservice.services.BookServicee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
@CrossOrigin("*")
public class BookController {
    @Autowired
    private BookServicee bookServicee;

    @GetMapping("/")
    public String getData() {
        return "Hello from  instance 1" + System.getProperty("server.port");
    }

    @PostMapping("/add")
    public Book insertBook(@RequestBody Book book) {
        return bookServicee.createBook(book);
    }

    @GetMapping("/{bookId}")
    public Book getBookById(@PathVariable Integer bookId) {
        return bookServicee.getBookById(bookId);
    }

    @GetMapping("/all")
    public List<Book> getAllBooks() {
        return bookServicee.getAllBook();
    }

    @PutMapping("/{bookId}")
    public Book updateBook(@PathVariable int bookId, @RequestBody Book updatedBook) {
        return bookServicee.updateBook(bookId, updatedBook);
    }

    @DeleteMapping("/{bookId}")
    public String deleteBook(@PathVariable Integer bookId) {
        return bookServicee.deleteBook(bookId);
    }

    // Custom Endpoints
    @GetMapping("/author/{author}")
    public List<Book> findBooksByAuthor(@PathVariable String author) {
        return bookServicee.findBookByAuthor(author);
    }

    @GetMapping("/name/{bookName}")
    public List<Book> findBooksByName(@PathVariable String bookName) {
        return bookServicee.findBookByBookName(bookName);
    }

    @GetMapping("/genre/{genre}")
    public List<Book> findBooksByGenre(@PathVariable String genre) {
        return bookServicee.findBookByGenre(genre);
    }

    @GetMapping("/sales/{salesNumber}")
    public List<Book> findBooksBySalesNumber(@PathVariable int salesNumber) {
        return bookServicee.findBookBySalesNumber(salesNumber);
    }
}
