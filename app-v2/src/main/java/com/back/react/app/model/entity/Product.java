package com.back.react.app.model.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="products")
public class Product {

    @Id
    @Column(name="id_correlative")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCorrelative;
    private String sku;
    private String name;
    private String description;
    private String brand;
    @Column(name="manufacture_date")
    private LocalDate manufactureDate;
    private Double price;
    private Long units;

    public Long getIdCorrelative() {
        return idCorrelative;
    }
    public void setIdCorrelative(Long idCorrelative) {
        this.idCorrelative = idCorrelative;
    }
    public String getSku() {
        return sku;
    }
    public void setSku(String sku) {
        this.sku = sku;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public LocalDate getManufactureDate() {
        return manufactureDate;
    }
    public void setManufactureDate(LocalDate manufactureDate) {
        this.manufactureDate = manufactureDate;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public Long getUnits() {
        return units;
    }
    public void setUnits(Long units) {
        this.units = units;
    } 


}
