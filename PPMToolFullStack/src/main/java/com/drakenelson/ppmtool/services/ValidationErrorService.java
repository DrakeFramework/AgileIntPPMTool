package com.drakenelson.ppmtool.services;

import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

@Data
@Service
public class ValidationErrorService {
    public ResponseEntity<?> mapValidationService(BindingResult result) {
        //this can check for the 400s set up on the domain object
        if (result.hasErrors()) {
            //return json that is "field":"error"
            //first create a map to hold the errors from result.getFieldErrors()
            Map<String, String> errorMap = new HashMap<>();
            //loop through the field errors and make a map of the field : error
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            //return errors
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }
        //if there are no errors just return null
        return null;
    }
}
