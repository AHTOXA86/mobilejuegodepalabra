import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from "ionicons";
import { Ranks } from "../interfaces"
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,
    IonGrid, IonCol, IonRow
  ]
})
export class Tab2Page {

  ranks: Ranks = []
  constructor(private storage: Storage) {}

  async loadRanks() {
    this.ranks = await this.storage['get']("ranks")
  }
  async ngOnInit() {
    await this.loadRanks()
  }

  async ngAfterViewInit() {
    await this.loadRanks()
  }


}
