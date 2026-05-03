package com.djallil.site_dahalani.service;

import com.djallil.site_dahalani.entity.Message;
import com.djallil.site_dahalani.repository.MessageRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class MessageService {
    private final MessageRepository messageRepository;
    private final MailService mailService;

    public MessageService(MessageRepository messageRepository, MailService mailService) {
        this.messageRepository = messageRepository;
        this.mailService = mailService;
    }

    public Message sauvegarderMessage(Message message) {
        message.setDateEnvoi(LocalDate.now());
        Message messageSauvegarde = messageRepository.save(message);

        // Envoie les deux mails après sauvegarde en base
        mailService.envoyerMailAuCabinet(
                message.getNomExpediteur(),
                message.getEmail(),
                message.getContenu()
        );
        mailService.envoyerConfirmationAuPatient(
                message.getNomExpediteur(),
                message.getEmail(),
                message.getContenu()
        );

        return messageSauvegarde;
    }

    public List<Message> recupererTousLesMessages() {
        return messageRepository.findAll();
    }
}
