package com.bolsadeideas.spring.boot.backend.apirest.models.service;

import com.bolsadeideas.spring.boot.backend.apirest.models.entity.Cliente;

import java.util.List;

public interface IClienteService {

    public List<Cliente> findAll();
}
