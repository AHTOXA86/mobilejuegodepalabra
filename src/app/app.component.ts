import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';

const initialData = [
  {"key": "config" , "value": {
    "palabras": [
      "Macho", "Macro", "Madre", "Mafia", "Magia", "Magma", "Magno",
      "Magro", "Malla", "Malos", "Malva", "Mambo", "Mamut", "Manco",
      "Mande", "Manga", "Mango", "Mansa", "Manto", "Mapas",
      "Maqui", "Marca", "Marco", "Marea", "Mares", "Marte", "Matan",
      "Matas", "Matiz", "Maula", "Mayas", "Mayor", "Mecha", "Medir",
      "Melga", "Menor"
    ],
     "errores": 5
    }
  },
  {"key": "ranks", "value":[{"id":"e93bd79e-cff6-491c-91f3-d1a041ae0841", "name": "Anton", "word": "mmmmm", "points": 10, "date": "05/09/2024"}]}
]

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private storage: Storage) { }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
    for (let item of initialData) {
      console.log(item);
      
      if (!(await this.storage.keys()).includes(item.key)) {
        await this.storage.set(item.key, item.value);
      } else {
        // Log the message and do nothing if key exists in storage
        console.log(`Key ${item.key} already exists in storage`);
      }
    }
  }
}
