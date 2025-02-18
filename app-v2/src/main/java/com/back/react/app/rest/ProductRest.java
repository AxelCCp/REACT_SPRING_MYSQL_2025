package com.back.react.app.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
import org.springframework.web.bind.annotation.RestController;

import com.back.react.app.model.entity.Product;
import com.back.react.app.model.service.ProductService;

@RestController
@RequestMapping("/prod")
@CrossOrigin(originPatterns = "*")
public class ProductRest {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product>findAll() {
        return this.productService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?>findById(@PathVariable(name="id") Long id) {

        Optional<Product>opProduct =  this.productService.findById(id);

        if(opProduct.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(opProduct.orElseThrow());
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("The product was not found by id");
    }


    @PutMapping("/{id}")
    public ResponseEntity<?>updateProduct(@RequestBody Product product, @PathVariable(name="id") Long id) {

        Optional<Product>opProduct = this.productService.findById(id);

        if(opProduct.isPresent()) {

            Product productUpdated = this.productService.updateProduct(product);

            Map<String, Object> resp = new HashMap<>();

            resp.put("message", "The product was updated succesfully!");
            resp.put("product", productUpdated);

            return ResponseEntity.status(HttpStatus.CREATED).body(resp);
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("The product was not found by id");
    }


    @PostMapping
    public ResponseEntity<?>createProduct(@RequestBody Product product) {

        Product product_db = this.productService.saveProduct(product);

        if(!product_db.getName().equals(null)){
            Map<String, Object> resp = new HashMap<>();
            resp.put("message", "The product was created succesfully!");
            resp.put("product", product_db);
            return ResponseEntity.status(HttpStatus.CREATED).body(resp);
        }

        return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body("Creation error: the product was not created.");

    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?>deleteProductById(@PathVariable(name="id") Long id) {

        Optional<Product>opProduct = this.productService.findById(id);

        Map<String, String> resp = new HashMap<>();

        if(opProduct.isPresent()) {

            this.productService.deleteById(id);

            Optional<Product>opProduct_valid = this.productService.findById(id);

            if(opProduct_valid.isPresent()) {
                resp.put("message", "Delete error: the product was not deleted.");
                return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body(resp);
            } else {
                resp.put("message", "The product was deleted succesfully");
                return ResponseEntity.status(HttpStatus.OK).body(resp);
            }

        } else {
            resp.put("message", "The product was not found by id");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(resp);
        }

    }
    


}
