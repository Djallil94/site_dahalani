import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Message {
  nomExpediteur: string;
  email: string;
  contenu: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // L'adresse de votre backend Spring Boot
  private apiUrl = 'http://localhost:8081/api/messages';

  constructor(private http: HttpClient) {}

  // Envoyer un message de contact
  envoyerMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, message);
  }
}
