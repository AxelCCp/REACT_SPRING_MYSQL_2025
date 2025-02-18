package com.back.react.app.model.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.back.react.app.model.dao.UserSystemDao;
import com.back.react.app.model.dto.UserSystemDto;
import com.back.react.app.model.dto.mapper.UserSystemDtoMapper;
import com.back.react.app.model.entity.UserSystem;
import com.back.react.app.model.request.UserSystemRequest;

@Service
public class UserSystemServiceImpl implements UserSystemService {

    @Autowired
    private UserSystemDao userSystemDao;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional(readOnly = true)
    public List<UserSystemDto> userSystemList() {

        List<UserSystem> userSystemList = (List<UserSystem>) this.userSystemDao.findAll();
        
        return  userSystemList.stream().map(us -> UserSystemDtoMapper.builder().setUserSystem(us).build()).collect(Collectors.toList());

    }

    @Override
    @Transactional(readOnly = true)
    public Optional<UserSystemDto> getUserSystemById(Long id) {
       return this.userSystemDao.findById(id).map(us -> UserSystemDtoMapper.builder().setUserSystem(us).build());
    }

    @Override
    @Transactional
    public UserSystemDto createUserSystem(UserSystem userSystem) {

        String passwordBCrypt = passwordEncoder.encode(userSystem.getPassword());

        userSystem.setPassword(passwordBCrypt);  

        return UserSystemDtoMapper.builder().setUserSystem(this.userSystemDao.save(userSystem)).build();
    }

    @Override
    @Transactional
    public UserSystemDto updateUserSystem(UserSystemRequest userSystemReq) {

        Optional<UserSystem> opUserSystem = this.userSystemDao.findById(userSystemReq.getIdUser());
        
        UserSystem userSystem_db = null;

        if(opUserSystem.isPresent()) {

            userSystem_db = opUserSystem.get();

            userSystem_db.setName(userSystemReq.getName());
            userSystem_db.setLastname(userSystemReq.getLastname());
            userSystem_db.setArea(userSystemReq.getArea());
            userSystem_db.setPosition(userSystemReq.getPosition());
            userSystem_db.setEmail(userSystemReq.getEmail());
            userSystem_db.setRoles(userSystemReq.getRoles());

            UserSystem userSaved = this.userSystemDao.save(userSystem_db);

            return UserSystemDtoMapper.builder().setUserSystem(userSaved).build();
        }

        return new UserSystemDto();

    }

    @Override
    @Transactional
    public void deleteUserSystemById(Long id) {
        this.userSystemDao.deleteById(id);
    }

}
