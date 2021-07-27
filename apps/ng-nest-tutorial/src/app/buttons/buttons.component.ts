import { HttpClient } from '@angular/common/http';
import { Message, MessageBody } from '@justin-marotta/types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'justin-marotta-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  text = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ngOnInit: buttons');
    this.getMessage();
  }

  getMessage(): void {
    this.http.get<Message>('/api/data/message').subscribe((message) => {
      this.text = message.messageText;
    });
  }

  setMessage(messageText: string) {
    const body: MessageBody = { messageText: messageText };
    this.http.put<Message>('/api/data/message', body).subscribe();
  }
}
