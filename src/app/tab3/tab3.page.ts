import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonLabel, IonInput, IonItem, IonTextarea } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { addIcons } from "ionicons";

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
  constructor(private storage: Storage) {}

  async ngOnInit() {
    const config = await this.storage['get']("config")
    console.log(config);
    this.palabras = config.palabras
    this.errores = config.errores
    
  }

  saveConfig() {
    this.storage.set("config", {"palabras": this.palabras, "errores": this.errores})
  }
}
