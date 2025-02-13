package com.back.react.app.model.service.auth;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.back.react.app.model.dao.UserSystemDao;
import com.back.react.app.model.entity.UserSystem;
import org.springframework.security.core.userdetails.User;

@Service
public class JpaUserDetailService implements UserDetailsService {


    @Autowired
    private UserSystemDao userSystemDao;


     @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
       
        Optional<UserSystem> o = this.userSystemDao.getUserSystemByName(name);

        if(!o.isPresent()){
            throw new UsernameNotFoundException(String.format("Username:  %s no existe en el sistema!", name));
        }

        UserSystem userSystem = o.orElseThrow();

        List<GrantedAuthority> authorities = userSystem.getRoles().stream().map(r -> new SimpleGrantedAuthority(r.getName())).collect(Collectors.toList());
        
        return new User(userSystem.getName(), userSystem.getPassword(), true, true, true, true, authorities);
    }



}
