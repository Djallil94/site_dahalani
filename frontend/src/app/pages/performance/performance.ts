import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [NgFor, RouterLink, ButtonModule],
  templateUrl: './performance.html',
  styleUrl: './performance.scss',
})
export class Performance {
  stats = [
    { value: '98%', label: 'Satisfaction clients' },
    { value: '+15', label: "Ans d'expérience" },
    { value: '500+', label: 'Patients accompagnés' },
    { value: '50+', label: 'Entreprises partenaires' }
  ];
}
