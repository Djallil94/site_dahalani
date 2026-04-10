package com.djallil.site_dahalani.service;

import com.djallil.site_dahalani.entity.Message;
import com.djallil.site_dahalani.repository.MessageRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class MessageService {
    private final MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public Message sauvegarderMessage(Message message) {
        message.setDateEnvoi(LocalDate.now());

        return messageRepository.save(message);
    }

    public List<Message> recupererTousLesMessages() {
        return messageRepository.findAll();
    }
}
