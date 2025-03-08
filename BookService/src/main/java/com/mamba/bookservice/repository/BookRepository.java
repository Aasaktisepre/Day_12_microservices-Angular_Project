package com.mamba.bookservice.repository;

import com.mamba.bookservice.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer>
{
   List<Book> findByAuthor(String author);
   List<Book> findBySalesNumberGreaterThan(Integer salesNumber);
   List<Book> findByGenre(String genre);
   List<Book> findByBookName(String bookName);
}
