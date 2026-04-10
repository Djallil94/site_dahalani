package com.djallil.site_dahalani.controller;

import com.djallil.site_dahalani.entity.Message;
import com.djallil.site_dahalani.service.MessageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping
    public ResponseEntity<Message> envoyerMessage(@RequestBody Message message) {
        Message messageSauvegarde = messageService.sauvegarderMessage(message);
        return ResponseEntity.ok(messageSauvegarde);
    }

    @GetMapping
    public ResponseEntity<List<Message>> getTousLesMessages() {
        List<Message> messages = messageService.recupererTousLesMessages();
        return ResponseEntity.ok(messages);
    }
}
