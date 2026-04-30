import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [ButtonModule, RouterLink],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {}
