import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../content.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-modify-content-component',
  standalone: true,
  imports: [FormsModule, ],
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

  constructor(private contentService: ContentService, private message: MessageService) { }

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
      this.newContentArray.push(newContentFromServer);
      // emit the event
      this.contentAdded.emit(newContentFromServer);

      console.log('Content Array after adding:', this.newContentArray);

      // add success message
      this.message.add(`Content "${newContentItem.title}" added successfully!`);

      // clear input fields after
      this.newContent = { title: '', description: '', creator: '', type: '', imgURL: '', tags: [] };
    });
  }
}
