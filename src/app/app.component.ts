import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import {Content} from './helper-files/content-interface';
import { Perfumeservice } from './perfumes.service';
import {MessagesComponent} from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentCardComponent, ContentListComponent, FormsModule, CommonModule, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Parth\'s Favorite Perfumes';
   customContent: Content | undefined;

  constructor(private perfumeService: Perfumeservice) {}

  ngOnInit(): void {
    this.getContentById(1);
  }
  getContentById(id: number): void {
    this.perfumeService.getContentById(id)
      .pipe(
        tap((content: Content | undefined) => {
          this.customContent = content;
        }),
        catchError((error) => {
          console.error('Error fetching content by ID:', error);
          return of(null);
        })
      )
      .subscribe();
  }
}
