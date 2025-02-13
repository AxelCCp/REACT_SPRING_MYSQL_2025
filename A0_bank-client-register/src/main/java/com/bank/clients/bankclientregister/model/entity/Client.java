package com.bank.clients.bankclientregister.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Client {

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getIdNumber() {
        return idNumber;
    }
    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }
    public String getFirtsName() {
        return firtsName;
    }
    public void setFirtsName(String firtsName) {
        this.firtsName = firtsName;
    }
    public String getSecondName() {
        return secondName;
    }
    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }
    public String getFirstLastname() {
        return firstLastname;
    }
    public void setFirstLastname(String firstLastname) {
        this.firstLastname = firstLastname;
    }
    public String getSecondLastname() {
        return secondLastname;
    }
    public void setSecondLastname(String secondLastname) {
        this.secondLastname = secondLastname;
    }
    public Integer getAge() {
        return age;
    }
    public void setAge(Integer age) {
        this.age = age;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String idNumber;
    private String firtsName;
    private String secondName;
    private String firstLastname;
    private String secondLastname;
    private Integer age;
    private String phoneNumber;
    private String email;

}
