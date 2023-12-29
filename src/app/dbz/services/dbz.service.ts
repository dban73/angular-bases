import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character-interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  onNewCharacter(character: Character): void {
    // this.characters.push(character);
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    };
    this.characters = [...this.characters, newCharacter];
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters = this.characters.filter((_, i) => i !== index);
  //   // this.characters.splice(index, 1);
  // }
  onDeleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
