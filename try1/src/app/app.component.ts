import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
