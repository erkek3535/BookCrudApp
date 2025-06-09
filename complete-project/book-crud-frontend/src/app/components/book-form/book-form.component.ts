import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService, Book, CreateBookRequest, UpdateBookRequest } from '../../services/book.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent implements OnInit {
  book: CreateBookRequest = {
    title: '',
    author: '',
    publicationDate: '',
    description: ''
  };
  
  isEditMode = false;
  bookId: number | null = null;
  loading = false;
  error = '';

  constructor(
    private bookService: BookService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Redirect to login if not authenticated
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.bookId = +id;
      this.loadBook(this.bookId);
    }
  }

  loadBook(id: number): void {
    this.loading = true;
    this.bookService.getBook(id).subscribe({
      next: (book) => {
        this.book = {
          title: book.title,
          author: book.author,
          publicationDate: book.publicationDate.split('T')[0], // Format for date input
          description: book.description || ''
        };
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load book. Please try again.';
        this.loading = false;
        console.error('Error loading book:', error);
      }
    });
  }

  onSubmit(): void {
    if (!this.book.title || !this.book.author || !this.book.publicationDate) {
      this.error = 'Please fill in all required fields';
      return;
    }

    this.loading = true;
    this.error = '';

    const bookData = {
      ...this.book,
      publicationDate: new Date(this.book.publicationDate).toISOString()
    };

    if (this.isEditMode && this.bookId) {
      this.bookService.updateBook(this.bookId, bookData as UpdateBookRequest).subscribe({
        next: () => {
          this.router.navigate(['/books']);
        },
        error: (error) => {
          this.loading = false;
          this.error = 'Failed to update book. Please try again.';
          console.error('Error updating book:', error);
        }
      });
    } else {
      this.bookService.createBook(bookData).subscribe({
        next: () => {
          this.router.navigate(['/books']);
        },
        error: (error) => {
          this.loading = false;
          this.error = 'Failed to create book. Please try again.';
          console.error('Error creating book:', error);
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/books']);
  }
}

