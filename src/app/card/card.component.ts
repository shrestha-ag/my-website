import { Component, Input } from '@angular/core';

export interface Card {
  id: string;
  title: string;
  description?: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card: Card | undefined;
}