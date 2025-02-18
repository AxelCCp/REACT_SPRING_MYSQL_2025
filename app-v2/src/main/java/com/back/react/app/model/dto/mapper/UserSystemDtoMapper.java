package com.back.react.app.model.dto.mapper;

import com.back.react.app.model.dto.UserSystemDto;
import com.back.react.app.model.entity.UserSystem;

public class UserSystemDtoMapper {

    private UserSystem userSystem;

    private UserSystemDtoMapper() {}

    public static UserSystemDtoMapper builder() {
        return new UserSystemDtoMapper();
    } 

    public UserSystemDtoMapper setUserSystem(UserSystem userSystem) {
        this.userSystem = userSystem;
        return this;
    }

    public UserSystemDto build() {
        if(this.userSystem == null) {
            throw new RuntimeException("You should pass a user system entity!");
        }
        return new UserSystemDto(userSystem.getIdUser(), userSystem.getName(), userSystem.getLastname(), userSystem.getPosition(), userSystem.getArea(), userSystem.getEmail(), userSystem.getRoles());
    }


}
