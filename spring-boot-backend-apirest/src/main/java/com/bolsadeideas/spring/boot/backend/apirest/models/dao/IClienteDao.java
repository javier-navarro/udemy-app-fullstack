package com.bolsadeideas.spring.boot.backend.apirest.models.dao;

import com.bolsadeideas.spring.boot.backend.apirest.models.entity.Cliente;
import org.springframework.data.repository.CrudRepository;

public interface IClienteDao extends CrudRepository <Cliente,Long> {

}
