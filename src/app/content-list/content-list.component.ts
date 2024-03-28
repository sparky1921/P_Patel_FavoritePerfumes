
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { FilterTypePipe } from '../filter-type.pipe';
import { Perfumeservice } from '../perfumes.service';

import { ModifyContentComponentComponent } from '../modify-content-component/modify-content-component.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FilterTypePipe, FormsModule,ModifyContentComponentComponent],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  contentArray: Content[] = [];
  filterContent: Content[] = [];
  title:string = '';
  message: string = '';
  isFound: boolean = false;

   onContentAdded(newContent: Content) {
    console.log('New content:', newContent);
    this.contentArray = [...this.contentArray, newContent];
    if(newContent){
      console.log(`Success ${newContent.title}`);
    }
  }

  constructor(private Perfumeservice: Perfumeservice){ }

  checkTitle() {
    if (!this.title) {
      this.message = "Title is not provided.";
      return;
    }

    this.filterContent = this.contentArray.filter(item =>
      item && item.title && item.title.toLowerCase() === this.title.toLowerCase()
    );

    this.isFound = this.filterContent.length > 0;

    this.message = this.isFound
      ? `Content with title '${this.title}' found.`
      : `Content with title '${this.title}' not found.`;
  }

  getSportsContent(): void {
    this.Perfumeservice.getContentArray().pipe(
        catchError(error => {
          console.error('Error fetching content:', error);
          return of([]);
        })
      )
      .subscribe((content: Content[]) => {
        this.contentArray = content;
      });
  }
  ngOnInit(): void {
    this.getSportsContent();
  }
}
