import { Component, Output, EventEmitter } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();

  content: Content = {} as Content;
  errorMessage: string | undefined;
  successMessage: string | undefined;
  tagInput: string | undefined;

  submitContent(): Promise<string> {
    //Creates a new instance (Promise)
    return new Promise((resolve, reject) =>{
      if (!this.isValidContent(this.content)) {
        //Not valid: display error message
        this.errorMessage = 'Id, Title, Description, Creator fields are required';
        this.clearMsg();
        reject(this.errorMessage);
      } else {
        this.content.tags = this.tagInput ? this.tagInput.split(',').map(tag => tag.trim()) : [];
        this.contentAdded.emit(this.content);
        this.clearFields();
        this.successMessage = "Content was added successfully";
        resolve(this.successMessage);
      }
    });
  }

   clearMsg(){
    this.successMessage = '';
   }

  clearFields() {
    this.content = {} as Content;
    this.errorMessage = '';
    this.tagInput = '';
  }

  isValidContent(content: Content): boolean {
    return !!content.id && !!content.title && !!content.description && !!content.creator;
  }
}
