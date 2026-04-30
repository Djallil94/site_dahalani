import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonModule, InputTextModule, TextareaModule, FormsModule, ToastModule],
  providers: [MessageService],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  form = { firstName: '', lastName: '', email: '', message: '' };

  constructor(private messageService: MessageService) {}

  submit() {
    if (!this.form.email || !this.form.message) {
      this.messageService.add({ severity: 'warn', summary: 'Champs requis', detail: 'Veuillez remplir tous les champs.' });
      return;
    }
    this.messageService.add({ severity: 'success', summary: 'Message envoyé !', detail: 'Nous vous répondrons rapidement.' });
    this.form = { firstName: '', lastName: '', email: '', message: '' };
  }

  mailto() {
    window.location.href = 'mailto:contact@ramlatadahalani.fr';
  }
}
