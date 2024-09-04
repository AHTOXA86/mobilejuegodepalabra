import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {IonButton, IonInput, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  imports: [FormsModule, IonButton, IonInput, IonGrid, IonRow, IonCol],
  standalone: true,
})
export class SignInComponent  implements OnInit {
  @Output('changeStateOfGame') changeStateOfGame = new EventEmitter<string>();

  playerName: string = '';
  constructor() { }

  ngOnInit() {}

  startGame() {
    console.log(`Starting game for player: ${this.playerName}`);
    this.changeStateOfGame.emit(this.playerName)
  }

}
