package com.bank.clients.bankclientregister.model.service;

import java.util.List;
import java.util.Optional;

import com.bank.clients.bankclientregister.model.entity.Client;

public interface ClientService {

    List<Client>getAllClientList();

    Optional<Client>getClientById(Long id);

    Client saveClient(Client client);

    Optional<Client>updateClient(Client client, Long id);

    void removeClientById(Long id);

}
