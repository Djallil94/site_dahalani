package com.djallil.site_dahalani.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    private final JavaMailSender mailSender;

    // L'adresse Gmail du site configurée dans application.yaml
    @Value("${spring.mail.username}")
    private String mailDuSite;

    public MailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    // Mail envoyé au cabinet avec le message du patient
    public void envoyerMailAuCabinet(String nomPatient, String emailPatient, String message) {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(mailDuSite);                          // destinataire : le cabinet
        mail.setSubject("Nouveau message de " + nomPatient);
        mail.setText(
                "Nom : " + nomPatient + "\n" +
                        "Email : " + emailPatient + "\n\n" +
                        "Message :\n" + message
        );
        mailSender.send(mail);
    }

    // Mail de confirmation envoyé au patient
    public void envoyerConfirmationAuPatient(String nomPatient, String emailPatient, String message) {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(emailPatient);                        // destinataire : le patient
        mail.setSubject("Votre message a bien été reçu");
        mail.setText(
                "Bonjour " + nomPatient + ",\n\n" +
                        "Votre message a bien été reçu. Nous vous répondrons dans les plus brefs délais.\n\n" +
                        "Voici une copie de votre message :\n" +
                        "-----------------------------------\n" +
                        message + "\n" +
                        "-----------------------------------\n\n" +
                        "Cordialement,\n" +
                        "Cabinet Ramlata Dahalani"
        );
        mailSender.send(mail);
    }
}