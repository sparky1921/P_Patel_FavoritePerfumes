import { PerfumePriceFilterPipe } from './perfume-price-filter.pipe';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import {Content} from './helper-files/content-interface';
import { perfumeservice } from './perfumes.service';
import {MessagesComponent} from './messages/messages.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, ContentCardComponent, ContentListComponent, FormsModule, CommonModule, MessagesComponent, MatIconModule,MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Parth\'s Favorite perfumes';

  //declare property custom content of type 'Content' or undefined
  customContent: Content | undefined;

  //injecting PerfumePriceFilterPipeService
  constructor(private PerfumePriceFilterPipeService: perfumeservice) {}

  ngOnInit(): void {
    //choose ID
    this.getContentById(1);
  }

  //fetches content by id using PerfumePriceFilterPipeservice
  getContentById(id: number): void {
    //invokes method from PerfumePriceFilterPipeService, returns an Observable that outputs a PerfumePriceFilterPipe Content based on its id
    this.perfumeService.getContentById(id)
      .pipe(
        //tap - performing side-effects (updates) without modifying the value
        //sets customContent to the fetched content based on id
        tap((content: Content | undefined) => {
          this.customContent = content;
        }),
        catchError((error) => {
          console.error('Error fetching content by ID:', error);
          //returns an observable null value
          return of(null);
        })
      )
      //initiates the observable chain and start retrieving the data
      .subscribe();
  }
}
