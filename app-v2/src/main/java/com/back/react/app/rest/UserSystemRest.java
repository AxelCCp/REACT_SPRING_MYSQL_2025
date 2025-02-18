package com.back.react.app.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.back.react.app.model.dto.UserSystemDto;
import com.back.react.app.model.entity.UserSystem;
import com.back.react.app.model.request.UserSystemRequest;
import com.back.react.app.model.service.UserSystemService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/user-system")
@CrossOrigin(originPatterns = "*")
public class UserSystemRest {

    @Autowired
    private UserSystemService userSystemService;


    @GetMapping
    public List<UserSystemDto> userSystemList() {
        return this.userSystemService.userSystemList();   
    }

    @GetMapping("/{id}")
    public ResponseEntity<?>getUserSystemById(@PathVariable Long id) {

        Optional<UserSystemDto> opUserSystem = this.userSystemService.getUserSystemById(id);
        if (opUserSystem.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(opUserSystem.get());
        }
        
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    }

    @PostMapping
    public ResponseEntity<?> createUserSystem(@Valid @RequestBody UserSystem userSystem, BindingResult bindingResult) {

        if(bindingResult.hasErrors()){
            return validation(bindingResult);
        }

        UserSystemDto userSystem_db_dto = null;
        
        userSystem_db_dto = this.userSystemService.createUserSystem(userSystem);

        if(userSystem_db_dto != null) {
            Map<String, Object> resp = new HashMap<>();
            resp.put("message", "The user system was created succesfully!");
            resp.put("userSystem", userSystem_db_dto);
            return ResponseEntity.status(HttpStatus.CREATED).body(resp);
        }

        return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body("Creation error: the user system was not created.");

    }


    @PutMapping("/{id}")
    public ResponseEntity<?>updateUserSystem( @Valid @RequestBody UserSystemRequest userSystemReq, BindingResult bindingResult, @PathVariable(name="id") Long id) {

        if(bindingResult.hasErrors()){
            return validation(bindingResult);
        }

        Optional<UserSystemDto> opUserSystem = this.userSystemService.getUserSystemById(id);

        if(opUserSystem.isPresent()) {
            UserSystemDto userSystemDtoUpdated = this.userSystemService.updateUserSystem(userSystemReq);
            Map<String, Object> resp = new HashMap<>();
            resp.put("message", "The user system was updated succesfully!");
            resp.put("userSystem", userSystemDtoUpdated);
            return ResponseEntity.status(HttpStatus.CREATED).body(resp);
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("The user system was not found by id");
    } 


    @DeleteMapping("/{id}")
    public ResponseEntity<?>deleteUserSystemById(@PathVariable(name="id") Long id) {

        Optional<UserSystemDto>opUserSystem = this.userSystemService.getUserSystemById(id);
        Map<String, String> resp = new HashMap<>();

        if(opUserSystem.isPresent()) {
            this.userSystemService.deleteUserSystemById(id);
            resp.put("message", "The user system was deleted succesfully");
            return ResponseEntity.status(HttpStatus.OK).body(resp);
        } else {
            resp.put("message", "The user system was not found by id");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(resp);
        }
        
    }


    private ResponseEntity<?> validation(BindingResult bindingResult) {
        Map<String, String> errors = new HashMap<>();
        bindingResult.getFieldErrors().forEach(err -> {
            errors.put(err.getField(), "the field: " + err.getField() + " " + err.getDefaultMessage());
            
        });
        return ResponseEntity.badRequest().body(errors);
    }
    
    

}
