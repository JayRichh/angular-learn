import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly lessons = [
    { path: '/signals', label: '1. Signals' },
    { path: '/todos', label: '2. Forms + State' },
    { path: '/users', label: '3. HTTP + RxJS' },
  ];
}
