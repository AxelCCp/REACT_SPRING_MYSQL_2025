package com.back.react.app.model.request;

import java.util.List;

import com.back.react.app.model.entity.Role;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class UserSystemRequest {

    @NotNull (message = "The idUser must not be null.")
    private Long idUser;
 
    @NotBlank (message = "The name cannot be empty.")
    @Size(min=2, max=10, message = "The size must be between 2 and 10 characters.")
    private String name;
    
    @NotBlank (message = "The lastname cannot be empty.")
    @Size(min=2, max=10, message = "The size must be between 2 and 10 characters.")
    private String lastname;

    @NotBlank (message = "The position cannot be empty.")
    @Size(min=2, max=10, message = "The size must be between 2 and 10 characters.")
    private String position;

    @NotBlank (message = "The area cannot be empty.")
    @Size(min=2, max=15, message = "The size must be between 2 and 15 characters.")
    private String area;

    @Email(message = "The entered value is not in email format.")
    @NotEmpty (message = "The email cannot be empty.")
    private String email;

    private List<Role> roles;

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
