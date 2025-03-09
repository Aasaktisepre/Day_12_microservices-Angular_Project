import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {CommonModule, NgForOf} from '@angular/common';
import {AuthserviceService} from '../authservice.service';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-books',
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit
{
  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    console.log('Fetching books...');
    this.bookService.getAllBooks().subscribe({
      next: (data: any[]) => {
        console.log('Data received:', data);
        this.books = data;
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      },
      complete: () => {
        console.log('Fetching books completed'); // Debug: Log completion
      }
    });
  }
}
