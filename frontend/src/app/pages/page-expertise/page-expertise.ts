import { Component } from '@angular/core';
import {Performance} from '../performance/performance';
import {Expertise} from '../expertise/expertise';

@Component({
  selector: 'app-page-expertise',
  imports: [Performance, Expertise],
  templateUrl: './page-expertise.html',
  styleUrl: './page-expertise.scss',
})
export class PageExpertise {}
