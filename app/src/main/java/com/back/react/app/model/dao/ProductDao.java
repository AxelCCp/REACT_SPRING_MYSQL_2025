package com.back.react.app.model.dao;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.back.react.app.model.entity.Product;

@Repository
public interface ProductDao extends CrudRepository<Product, Long>{}
