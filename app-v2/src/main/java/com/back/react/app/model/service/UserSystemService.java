package com.back.react.app.model.service;

import java.util.List;
import java.util.Optional;

import com.back.react.app.model.dto.UserSystemDto;
import com.back.react.app.model.entity.UserSystem;
import com.back.react.app.model.request.UserSystemRequest;

public interface UserSystemService {

    List<UserSystemDto>userSystemList();

    Optional<UserSystemDto>getUserSystemById(Long id);

    UserSystemDto createUserSystem(UserSystem userSystem);

    UserSystemDto updateUserSystem(UserSystemRequest userSystemReq);

    void deleteUserSystemById(Long id);

}
