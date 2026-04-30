import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [NgFor, RouterLink, ButtonModule],
  templateUrl: './services-page.html',
  styleUrl: './services-page.scss',
})
export class ServicesPage {
  services = [
    { icon: 'pi-chart-line', title: 'Polysomnographie', description: "Enregistrement complet de votre sommeil en laboratoire pour identifier les troubles et optimiser votre repos." },
    { icon: 'pi-users', title: 'Accompagnement professionnel', description: "Programmes personnalisés pour améliorer la performance au travail grâce à de meilleures habitudes de sommeil." },
    { icon: 'pi-star', title: 'Formation en entreprise', description: "Ateliers et conférences sur l'hygiène du sommeil et son impact sur la productivité et le bien-être." },
    { icon: 'pi-moon', title: 'Consultations spécialisées', description: "Évaluation approfondie de vos besoins et création d'un plan d'action adapté à votre rythme de vie." },
    { icon: 'pi-calendar', title: 'Suivi personnalisé', description: "Accompagnement régulier pour assurer l'efficacité des recommandations et ajuster les protocoles." },
    { icon: 'pi-clock', title: 'Gestion du rythme circadien', description: "Optimisation de votre horloge biologique pour un meilleur alignement avec vos obligations professionnelles." }
  ];
}
