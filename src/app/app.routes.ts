import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'signals', pathMatch: 'full' },
  // Lazy-loaded standalone components: each route becomes its own chunk.
  { path: 'signals', loadComponent: () => import('./features/signals/counter/counter').then(m => m.Counter) },
  { path: 'todos', loadComponent: () => import('./features/todos/todo-list/todo-list').then(m => m.TodoList) },
  { path: 'users', loadComponent: () => import('./features/users/user-list/user-list').then(m => m.UserList) },
];
