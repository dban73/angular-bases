import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Iroman',
    'Hulk',
    'She Hulk',
    'Thor',
  ];

  public deletedHeros?: string;

  removeLastHero(): void {
    this.deletedHeros = this.heroNames.pop();
  }
}
