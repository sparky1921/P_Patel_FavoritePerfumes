import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent{
  constructor(public messageService: MessageService) { }
}
