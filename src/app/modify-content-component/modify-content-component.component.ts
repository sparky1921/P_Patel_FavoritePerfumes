import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

import { ContentService } from '../content.service';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-modify-content-component',
  standalone: true,
  imports: [ MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './modify-content-component.component.html',
  styleUrl: './modify-content-component.component.scss'
})
export class ModifyContentComponentComponent {
  newContent: Content = {
    title: '',
    description: '',
    creator: '',
    type: '',
    imgURL: '',
    tags: []
  };

  @Output() contentAdded = new EventEmitter<Content>();

  newContentArray: Content[] = [];

  constructor(private dialog:MatDialog, private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContent().subscribe(content => this.newContentArray = content);
  }

  // Method to open the dialog
  openAddMovieDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '400px',
      height:'600px',
      data: 'right click'
    });

    // Subscribe to the contentAdded event emitted by the dialog
    dialogRef.componentInstance.contentAdded.subscribe((newContent: Content) => {
      this.newContentArray.push(newContent);
      this.contentAdded.emit(newContent);
    });
  }
  addContentToList(newContentItem: Content): void {
    this.contentService.addContent(newContentItem).subscribe(newContentFromServer => {
      // add the new content to the array
      this.newContentArray.push(newContentFromServer);
      // emit the event
      this.contentAdded.emit(newContentFromServer);
    });
  }
}
