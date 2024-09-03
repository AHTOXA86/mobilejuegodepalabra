import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {IonButton, IonInput, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  imports: [IonButton, IonInput, IonGrid, IonRow, IonCol],
  standalone: true,
})
export class SignInComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  startGame() {
    console.log('start!!!');
    
  }

}
