package com.back.react.app.model.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.back.react.app.model.dao.ProductDao;
import com.back.react.app.model.entity.Product;


@Service
public class ProductServiceImpl implements ProductService {

    @Override
    @Transactional(readOnly = true)
    public List<Product> findAll() {
        return (List<Product>) this.productDao.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Product> findById(Long id) {
       return this.productDao.findById(id);
    }

    @Override
    @Transactional
    public Product saveProduct(Product product) {

        return this.productDao.save(product);
            
    }


    @Override
    @Transactional
    public Product updateProduct(Product product) {
        
        Optional<Product> opProduct = this.productDao.findById(product.getIdCorrelative());

        Product product_Db = null;
        
        if(opProduct.isPresent()) {
            
            product_Db = opProduct.get();

            product_Db.setName(product.getName());
            product_Db.setDescription(product.getDescription());
            product_Db.setSku(product.getSku());
            product_Db.setBrand(product.getBrand());
            product_Db.setManufactureDate(product.getManufactureDate());
            product_Db.setPrice(product.getPrice());
            product_Db.setUnits(product.getUnits());

            return this.saveProduct(product_Db);
        }

        return product_Db;

    }


    @Override
    @Transactional
    public void deleteById(Long id) {
        this.productDao.deleteById(id);
    }


    @Autowired
    private ProductDao productDao;


}
