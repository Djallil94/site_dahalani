import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {NgFor} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [NgFor, RouterLink, ButtonModule],
  templateUrl: './expertise.html',
  styleUrl: './expertise.scss',
})
export class Expertise {
  domains = [
    {
      title: 'Évaluation clinique',
      items: ["Analyse des troubles du sommeil (apnée, insomnie, narcolepsie)", "Étude polysomnographique complète", "Interprétation des résultats et recommandations personnalisées"]
    },
    {
      title: 'Optimisation professionnelle',
      items: ["Gestion du travail posté et des décalages horaires", "Stratégies de récupération pour les executives", "Prévention de l'épuisement professionnel"]
    },
    {
      title: "Programmes d'entreprise",
      items: ["Conférences sur la santé du sommeil", "Ateliers pratiques en milieu professionnel", "Audits de bien-être organisationnel"]
    },
    {
      title: 'Accompagnement individuel',
      items: ["Coaching personnalisé en hygiène du sommeil", "Suivi régulier et ajustements thérapeutiques", "Coordination avec d'autres professionnels de santé"]
    }
  ];
}
