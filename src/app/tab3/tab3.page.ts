import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonLabel, IonInput, IonItem, IonTextarea } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonTextarea,
    IonLabel, FormsModule
  ],
})
export class Tab3Page {
  errores = 5
  palabras = "mmmmm"
  constructor() {}
}
