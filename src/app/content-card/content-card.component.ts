import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss',
})
export class ContentCardComponent implements OnInit {
  @Input() content: Content | any;

  constructor() {}

  ngOnInit(): void {}

  handleClick(contentLog: Content): void {
    console.log(`ID: ${contentLog.id}, TITLE: ${contentLog.title}`);
  }
}
