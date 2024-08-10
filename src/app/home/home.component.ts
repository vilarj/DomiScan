import { Component } from '@angular/core';
import { BoxScoreComponent } from '../box-score/box-score.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PlayerNamesComponent } from '../player-names/player-names.component';
import { TotalBoxScoreComponent } from '../total-box-score/total-box-score.component';

@Component({
  selector: 'Home',
  standalone: true,
  imports: [
    NavbarComponent,
    PlayerNamesComponent,
    BoxScoreComponent,
    TotalBoxScoreComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
