import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })

export class ThemeService {
  private themeSubject: BehaviorSubject<Theme>;
  theme$: any;

  constructor() {
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'light';
    this.themeSubject = new BehaviorSubject<Theme>(savedTheme);
    this.theme$ = this.themeSubject.asObservable();
    this.setTheme(savedTheme);
  }

  get currentTheme(): Theme {
    return this.themeSubject.value;
  }

  toggleTheme() {
    const newTheme = this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: Theme) {
    this.themeSubject.next(theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark:bg-gray-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark:bg-gray-900');
    }
  }
}