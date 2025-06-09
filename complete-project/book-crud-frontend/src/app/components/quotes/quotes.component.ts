import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface Quote {
  id: number;
  text: string;
  author: string;
  book?: string;
}

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss'
})
export class QuotesComponent {
  quotes: Quote[] = [
    {
      id: 1,
      text: "So we beat on, boats against the current, borne back ceaselessly into the past.",
      author: "F. Scott Fitzgerald",
      book: "The Great Gatsby"
    },
    {
      id: 2,
      text: "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.",
      author: "Harper Lee",
      book: "To Kill a Mockingbird"
    },
    {
      id: 3,
      text: "War is peace. Freedom is slavery. Ignorance is strength.",
      author: "George Orwell",
      book: "1984"
    },
    {
      id: 4,
      text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
      author: "Albert Camus",
      book: "The Myth of Sisyphus"
    },
    {
      id: 5,
      text: "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle",
      book: "Nicomachean Ethics"
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // Redirect to login if not authenticated
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }
}

