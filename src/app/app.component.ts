import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';

const initialData = [
  {"key": "config" , "value": {"palabras": ['mmmmm'], "errores": 5}},
  {"key": "rangs", "value":[{"name": "Anton", "word": "mmmmm", "points": 10, "date": "05/09/2024"}]}
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
