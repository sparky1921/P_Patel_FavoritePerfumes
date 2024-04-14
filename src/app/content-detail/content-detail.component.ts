import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../content.service';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-content-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-detail.component.html',
  styleUrl: './content-detail.component.scss'
})
export class ContentDetailComponent implements OnInit{
  content: Content | undefined;
  id: number | undefined;


  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private messageService: MessageService
  ) { }

  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   if (id !== null) {
  //     const contentId: number = +id;
  //     this.contentService.getContentItem(contentId).subscribe(
  //       content => {
  //         console.log('Retrieved content:', content);
  //         this.content = content;
  //         this.messageService.add(`Retrieved content with id=${content.id} and title=${content.title}`);
  //       },
  //       error => {
  //         console.error("Error retrieving content:", error);
  //       }
  //     );
  //   }
  // }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.id = +(params.get('id') ?? 0); // uses the +unary operator

        this.route.paramMap.subscribe(params => {
            this.id = Number(params.get('id') ?? 0);
            this.contentService.getContentItem(this.id).subscribe(
                c => {
                    this.content = c;
                    this.messageService.add(`Retrieved content with id=${c.id} and title=${c.title}`);
                },
                error => {
                    console.error("Error retrieving content:", error);
                }
            );
        });

    });
}
}
