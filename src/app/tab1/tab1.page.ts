import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
// import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, SignInComponent, GameComponent],
})
export class Tab1Page {
  constructor() { }

  isGame = false
  name = ''

  setGameState($event: any) {
    this.isGame = true; 
    this.name = $event.data;
  }

  public async ionViewWillEnter() {
    this.isGame = false; 
  }

}
