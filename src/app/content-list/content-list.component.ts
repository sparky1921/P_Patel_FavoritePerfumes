
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

@Component({
   selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FilterTypePipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
   contentArray: Content[] = [];
  filterContent: Content[] = [];
  searchedContent: Content | undefined;
  title:string = '';
  message: string = '';
  isFound: boolean = false;

  checkTitle(){
    this.filterContent = this.contentArray.filter(item => item.title.toLowerCase() === this.title.toLowerCase());

    this.isFound = this.filterContent.length > 0;

    this.message = this.isFound ? `Content with title '${this.title}' found.` : `Content with title '${this.title}' not found.`;
  }

  constructor(private Perfumeservice: Perfumeservice){ }

  getperfumesContent(): void {
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

  searchContentByTitle(): void {
    this.searchedContent = this.contentArray.find(item => item.title.toLowerCase() === this.title.toLowerCase());
    this.message = this.searchedContent ? `Content with title '${this.title}' found.` : `Content with title '${this.title}' not found.`;
  }
  ngOnInit(): void {
    this.getperfumesContent();
  }

}
