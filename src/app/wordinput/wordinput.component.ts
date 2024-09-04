import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-wordinput',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './wordinput.component.html',
  styleUrl: './wordinput.component.sass'
})
export class WordinputComponent {
  userWord = new FormControl('')
}
