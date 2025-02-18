package com.back.react.app.model.dto;

import java.util.List;

import com.back.react.app.model.entity.Role;

public class UserSystemDto {

    private Long idUser;
    private String name;
    private String lastname;
    private String position;
    private String area;
    private String email;
    //private String password;
    private List<Role> roles;

    public UserSystemDto(){}

    public UserSystemDto(Long idUser, String name, String lastname, String position, String area, String email,
            List<Role> roles) {
        this.idUser = idUser;
        this.name = name;
        this.lastname = lastname;
        this.position = position;
        this.area = area;
        this.email = email;
        this.roles = roles;
    }


    public Long getIdUser() {
        return idUser;
    }
    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getLastname() {
        return lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public String getPosition() {
        return position;
    }
    public void setPosition(String position) {
        this.position = position;
    }
    public String getArea() {
        return area;
    }
    public void setArea(String area) {
        this.area = area;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public List<Role> getRoles() {
        return roles;
    }
    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }


}
