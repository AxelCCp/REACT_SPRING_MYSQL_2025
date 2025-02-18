package com.back.react.app.model.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.back.react.app.model.entity.UserSystem;

@Repository
public interface UserSystemDao extends CrudRepository<UserSystem, Long>{

    @Query("select u from UserSystem u where u.name=?1")
    Optional<UserSystem> getUserSystemByName(String username);
    
}
