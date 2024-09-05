import { Component, OnInit } from '@angular/core';
import {IonButton, IonAlert, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone'
import { UserWordFormComponent } from '../user-word-form/user-word-form.component';
import { WordinputComponent } from '../wordinput/wordinput.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  imports: [IonGrid, IonRow, IonCol, UserWordFormComponent, WordinputComponent, IonAlert],
  standalone: true,
})
export class GameComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  palabras: string[] = ["mmmmm"]
  //   "Macho", "Macro", "Madre", "Mafia", "Magia", "Magma", "Magno",
  //   "Magro", "Malla", "Malos", "Malva", "Mambo", "Mamut", "Manco",
  //   "Mande", "Manga", "Mango", "Mansa", "Manto", "Mapas",
  //   "Maqui", "Marca", "Marco", "Marea", "Mares", "Marte", "Matan",
  //   "Matas", "Matiz", "Maula", "Mayas", "Mayor", "Mecha", "Medir",
  //   "Melga", "Menor"
  // ];


  // readonly dialog = inject(MatDialog);
  isAlertOpen = false;
  alertButtons = ['Vale'];

  entered: string[] = [];


  getRandomWord = () => this.palabras[Math.floor(Math.random() * this.palabras.length)]
  secretWord = this.getRandomWord();


  reset() { this.secretWord = this.getRandomWord(); this.entered = [] }

  addPalabra(word: string) {
    console.log(word); this.entered.push(word);
    if (word.toLowerCase() === this.secretWord.toLowerCase()) {
      this.isAlertOpen = true;
    }
  };

  getColor(letter: string, index: number) {
    // check if letter is correct
    if (this.secretWord[index].toLowerCase() === letter.toLowerCase()) { return 'green' }
    if (this.secretWord.includes(letter)) { return 'yellow' }
    return 'grey'
  }

}
