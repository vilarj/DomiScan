import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PlayerNamesComponent } from '../player-names/player-names.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, PlayerNamesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
