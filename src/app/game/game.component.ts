import { Component, OnInit } from '@angular/core';
import {IonButton, IonAlert, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone'
import { UserWordFormComponent } from '../user-word-form/user-word-form.component';
import { WordinputComponent } from '../wordinput/wordinput.component';
import { Storage } from '@ionic/storage-angular';
import { Ranks, Rank, AlertMessages } from "../interfaces"
import { addIcons } from "ionicons";
import { uuidv4 } from '../common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  imports: [IonGrid, IonRow, IonCol, UserWordFormComponent, WordinputComponent, IonAlert],
  standalone: true,
})
export class GameComponent  implements OnInit {

  constructor(private storage: Storage) { }

  
  palabras: string[] = ["mmmmn"]
  erroresMax: number = 5
  tryNumber: number = 0


  async ngOnInit() {
    const config = await this.storage.get('config')
    this.palabras = config.palabras
    this.erroresMax = config.errores
    this.secretWord = this.getRandomWord();
  }
  
  isAlertOpen = false;
  alertButtons = ['Reiniciar'];

  alertMessages: AlertMessages = {
    "win": "Eres ganador",
    "loss": "Juego terminado"
  };

  alertMessage: string = "win"

  entered: string[] = [];


  getRandomWord = () => this.palabras[Math.floor(Math.random() * this.palabras.length)]
  secretWord = this.getRandomWord();


  reset() { 
    this.secretWord = this.getRandomWord();
     this.entered = [] 
     this.tryNumber = 0
     this.isAlertOpen = false
    }

  addPalabra(word: string) {
    console.log(word); 

    // Check on game over
    this.tryNumber += 1

    if (this.tryNumber >= this.erroresMax) {
      this.alertMessage = "loss"
      this.isAlertOpen = true;
      return
    }


    this.entered.push(word);
    if (word.toLowerCase() === this.secretWord.toLowerCase()) {
      this.saveWinner()
      this.isAlertOpen = true;
    }
  };

  // Save the winner name in ranks
  async saveWinner() {

    let ranks: Ranks = await this.storage.get("ranks")
    const name = await this.storage.get("name") || "noname"
    ranks.push({id: uuidv4(), name, word: this.secretWord,points: this.tryNumber,date: new Date().toLocaleDateString()})
    this.storage.set('ranks', ranks)
  }

  getColor(letter: string, index: number) {
    // check if letter is correct
    if (this.secretWord[index].toLowerCase() === letter.toLowerCase()) { return 'green' }
    if (this.secretWord.includes(letter)) { return 'yellow' }
    return 'grey'
  }

}
