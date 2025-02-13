package com.back.react.app.model.service;

import java.util.List;
import java.util.Optional;

import com.back.react.app.model.entity.Product;

public interface ProductService {

    List<Product>findAll();

    Optional<Product>findById(Long id);

    Product saveProduct(Product product);

    Product updateProduct(Product product);

    void deleteById(Long id);

}
