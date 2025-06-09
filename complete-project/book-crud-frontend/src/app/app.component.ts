import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'book-crud-frontend';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Initialize theme service
    // Theme is automatically loaded from localStorage or system preference
  }
}

