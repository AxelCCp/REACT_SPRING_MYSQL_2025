package com.back.react.app.model.entity;

import java.util.List;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="user_system")
public class UserSystem {

    @Id
    @Column(name="id_user")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;
    
    @NotBlank (message = "The name cannot be empty.")
    @Size(min=2, max=15)
    private String name;
    
    @NotBlank (message = "The lastname cannot be empty.")
    @Size(min=2, max=15)
    private String lastname;

    @NotBlank (message = "The position cannot be empty.")
    @Size(min=2, max=30)
    private String position;

    @NotBlank (message = "The area cannot be empty.")
    @Size(min=2, max=30)
    private String area;

    @Email(message = "The entered value is not in email format.")
    @NotEmpty (message = "The email cannot be empty.")
    @Column(unique=true)
    private String email;

    @NotEmpty (message = "The password cannot be empty.")
    @Size(min=3, max=100)
    private String password;
 
    @ManyToAny  
    @JoinTable(name="user_roles", joinColumns = @JoinColumn(name="user_id"), inverseJoinColumns = @JoinColumn(name="role_id"), uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id", "role_id"})}) 
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
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    

}
