import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'Box-Score',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './box-score.component.html',
  styleUrl: './box-score.component.css',
})
export class BoxScoreComponent {
  boxForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.boxForm = this.formBuilder.group({
      player1: [],
      player2: [],
    });
  }
}
