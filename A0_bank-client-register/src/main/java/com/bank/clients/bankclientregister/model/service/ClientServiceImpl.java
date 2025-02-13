package com.bank.clients.bankclientregister.model.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.clients.bankclientregister.model.dao.ClientDao;
import com.bank.clients.bankclientregister.model.entity.Client;

@Service
public class ClientServiceImpl implements ClientService{

    @Override
    public List<Client> getAllClientList() {
        return (List<Client>) this.clientDao.findAll();
    }

    @Override
    public Optional<Client> getClientById(Long id) {
        return clientDao.findById(id);
    }

    @Override
    public Client saveClient(Client client) {
        Client clientdb = clientDao.save(client);
        return clientdb;
    }

    @Override
    public Optional<Client> updateClient(Client client, Long id) {
        Optional<Client> opClient = clientDao.findById(id);
        Client clientSaved = null;
        if(opClient.isPresent()){
            Client clientDb = opClient.orElseThrow();
            clientDb.setIdNumber(client.getIdNumber());
            clientDb.setFirtsName(client.getFirtsName());
            clientDb.setSecondName(client.getSecondName());
            clientDb.setFirstLastname(client.getFirstLastname());
            clientDb.setAge(client.getAge());
            clientDb.setPhoneNumber(client.getPhoneNumber());
            clientDb.setEmail(client.getEmail());
            clientSaved = this.saveClient(clientDb);
        }
        return Optional.ofNullable(clientSaved);
    }

    @Override
    public void removeClientById(Long id) {
        Optional<Client> opClient = clientDao.findById(id);
        if(opClient.isPresent()){
            clientDao.deleteById(id);
        }
    }

    @Autowired
    private ClientDao clientDao;

}
