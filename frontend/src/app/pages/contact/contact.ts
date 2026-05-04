import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonModule, InputTextModule, TextareaModule, FormsModule, ToastModule, HttpClientModule],
  providers: [MessageService],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  form = { firstName: '', lastName: '', email: '', message: '' };

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  // Vérifie que l'email a un format valide
  private emailValide(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  submit() {
    // Vérification que tous les champs sont remplis
    if (!this.form.firstName || !this.form.lastName || !this.form.email || !this.form.message) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Champs requis',
        detail: 'Veuillez remplir tous les champs.'
      });
      return;
    }

    // Vérification du format email
    if (!this.emailValide(this.form.email)) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Email invalide',
        detail: 'Veuillez entrer une adresse email valide.'
      });
      return;
    }

    // Envoi à l'API Spring Boot
    const body = {
      nomExpediteur: this.form.firstName + ' ' + this.form.lastName,
      email: this.form.email,
      contenu: this.form.message
    };

    this.http.post('https://sitedahalani-production.up.railway.app/api/messages', body).subscribe({
      next: () => {
        // Succès
        this.messageService.add({
          severity: 'success',
          summary: 'Message envoyé !',
          detail: 'Nous vous répondrons rapidement.'
        });
        // Réinitialise le formulaire
        this.form = { firstName: '', lastName: '', email: '', message: '' };
      },
      error: () => {
        // Erreur serveur
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Une erreur est survenue, veuillez réessayer.'
        });
      }
    });
  }
}
