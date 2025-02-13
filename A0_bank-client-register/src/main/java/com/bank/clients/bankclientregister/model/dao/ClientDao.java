package com.bank.clients.bankclientregister.model.dao;

import org.springframework.data.repository.CrudRepository;

import com.bank.clients.bankclientregister.model.entity.Client;

public interface ClientDao extends CrudRepository<Client, Long>{}
