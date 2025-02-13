package com.bank.clients.bankclientregister.controller;

import org.springframework.web.bind.annotation.RestController;

import com.bank.clients.bankclientregister.model.entity.Client;
import com.bank.clients.bankclientregister.model.service.ClientService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/clients")
@CrossOrigin(origins = "http://localhost:5173")
public class ClientController {

    @GetMapping
    public List<Client>getAllClientList(){
        return clientService.getAllClientList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getClientById(@PathVariable(name="id") Long id){
        Optional<Client> opClient = clientService.getClientById(id);
        if(opClient.isPresent()){
            return ResponseEntity.ok().body(opClient.orElseThrow());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<?>saveClient(@RequestBody Client client){
        Client clientDb = clientService.saveClient(client);
        return ResponseEntity.status(HttpStatus.CREATED).body(clientDb);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateClient(@RequestBody Client client, @PathVariable(name="id") Long id) {   
        Optional<Client> opClient = this.clientService.updateClient(client, id);
        if(opClient.isPresent()){
            return ResponseEntity.status(HttpStatus.CREATED).body(opClient.orElseThrow());        
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeClientById(@PathVariable(name="id") Long id) {
        Optional<Client>opClient = this.clientService.getClientById(id);
        if(opClient.isPresent()){
            this.clientService.removeClientById(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();        
        }
    }


    @Autowired
    private ClientService clientService; 
}
