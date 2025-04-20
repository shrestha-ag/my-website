import { Component } from '@angular/core';
import { Card } from '../card/card.component';
import { ListComponent } from '../list/list.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [ListComponent, NgFor],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  lists = [
    {
      title: 'To Do',
      cards: [
        { id: '1', title: 'Learn Angular', description: 'Start with the basics' },
        { id: '2', title: 'Create Components', description: 'Board, List, Card' }
      ]
    },
    {
      title: 'In Progress',
      cards: [
        { id: '3', title: 'Implement Data Model', description: 'Define interfaces' }
      ]
    },
    {
      title: 'Done',
      cards: [
        { id: '4', title: 'Set up Project', description: 'Install Angular CLI' }
      ]
    }
  ];
}