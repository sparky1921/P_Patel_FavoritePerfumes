import { Injectable } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ContentService {
  private contentUrl = 'api/content';

  constructor(private http: HttpClient, private message: MessageService) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':'application/json' })
    };

  getContent() : Observable<Content[]>{
    return this.http.get<Content[]>(this.contentUrl);
  }

  addContent(newContentItem: Content): Observable<Content>{
    return this.http.post<Content>(this.contentUrl, newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    return this.http.put(this.contentUrl, contentItem, this.httpOptions);
  }

  getContentItem(id: number): Observable<Content>{
    console.log("Retrieving OBSERVABLE content item");
    return this.http.get<Content>("api/content/" + id);
  }
}
