package com.djallil.site_dahalani.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "messages")
@Getter
@Setter
@NoArgsConstructor
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomExpediteur;

    private String email;

    @Column(columnDefinition = "TEXT")
    private String contenu;

    private LocalDate dateEnvoi;

}