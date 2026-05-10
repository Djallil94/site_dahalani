package com.djallil.site_dahalani.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import java.util.Map;
import java.util.List;

@Service
public class MailService {

    @Value("${brevo.api.key}")
    private String apiKey;

    @Value("${spring.mail.username}")
    private String mailDuSite;

    private final RestTemplate restTemplate = new RestTemplate();
    private static final String BREVO_URL = "https://api.brevo.com/v3/smtp/email";

    private void envoyerEmail(String destinataire, String sujet, String contenu) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("api-key", apiKey);

        Map<String, Object> body = Map.of(
                "sender", Map.of("email", mailDuSite, "name", "Cabinet Dahalani"),
                "to", List.of(Map.of("email", destinataire)),
                "subject", sujet,
                "textContent", contenu
        );

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);

        try {
            restTemplate.postForEntity(BREVO_URL, request, String.class);
        } catch (Exception e) {
            System.err.println("Erreur envoi email : " + e.getMessage());
        }
    }

    public void envoyerMailAuCabinet(String nomPatient, String emailPatient, String message) {
        envoyerEmail(
                mailDuSite,
                "Nouveau message de " + nomPatient,
                "Nom : " + nomPatient + "\n" +
                        "Email : " + emailPatient + "\n\n" +
                        "Message :\n" + message
        );
    }

    public void envoyerConfirmationAuPatient(String nomPatient, String emailPatient, String message) {
        envoyerEmail(
                emailPatient,
                "Votre message a bien été reçu",
                "Bonjour " + nomPatient + ",\n\n" +
                        "Votre message a bien été reçu. Nous vous répondrons dans les plus brefs délais.\n\n" +
                        "Voici une copie de votre message :\n" +
                        "-----------------------------------\n" +
                        message + "\n" +
                        "-----------------------------------\n\n" +
                        "Cordialement,\n" +
                        "Cabinet Ramlata Dahalani"
        );
    }
}