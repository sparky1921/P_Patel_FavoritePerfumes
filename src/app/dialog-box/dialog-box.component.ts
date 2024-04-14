import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../content.service';
import {MessageService} from '../message.service';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, CommonModule, MatDialogModule, MatSelectModule],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss'
})
export class DialogBoxComponent {
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

  constructor(private contentService: ContentService, private message: MessageService,private dialogRef: MatDialogRef<DialogBoxComponent>) { }

  ngOnInit() {
    this.contentService.getContent().subscribe(content => this.newContentArray = content);
  }

  addContentToList(newContentItem: Content): void {
    console.log('Adding new content:', newContentItem);

      // ensure newContentItem.tags is of type string
      if (typeof newContentItem.tags === 'string') {
        // make it so that newContentItem.tags is a string
        newContentItem.tags = (newContentItem.tags as string).split(',');
      } else {
        // if newContentItem.tags is not a string
        newContentItem.tags = [];
      }

    this.contentService.addContent(newContentItem).subscribe(newContentFromServer => {
      // add the new content to the array
      //this.newContentArray.push(newContentFromServer);
      // emit the event
      //this.contentAdded.emit(newContentFromServer);

      //check if the new content is already in the array
      const exists = this.newContentArray.some(content => content.id === newContentFromServer.id);
        if (!exists) {
        // Add the new content to the array if it doesn't exist
        this.newContentArray.push(newContentFromServer);
        // emit the event
        this.contentAdded.emit(newContentFromServer);
      }

      console.log('Content Array after adding:', this.newContentArray);

      // add success message
      this.message.add(`Content "${newContentItem.title}" added successfully!`);

      // clear input fields after
      this.newContent = { title: '', description: '', creator: '', type: '', imgURL: '', tags: [] };

      this.closeDialog();
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
