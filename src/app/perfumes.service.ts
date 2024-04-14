import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Content} from './helper-files/content-interface';
import {contentArray} from './helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class Perfumeservices {

  constructor(private messageService: MessageService) { }

  getContentArray(): Observable<Content[]> {
    //adding a message to messageService
    this.messageService.add('Content array loaded!');
    //Retrieves the contentArray & return it using the observable pattern
    return of(contentArray);
  }

  //takes param/input id
  //returns an Observable, will emit a Content object or undefined
  getContentById(id: number): Observable<Content | undefined> {
    //Finds the matching id in the contentArray that matches the parameter id
    //if match found  - return Content object. If not - undefined
    const content =(contentArray.find(content => content.id === id));
    //adds a message to messageService
    this.messageService.add(``);
    return of(content);
  }
}
