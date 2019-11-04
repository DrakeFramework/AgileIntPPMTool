package com.drakenelson.ppmtool.api.services;

import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

/**
 * this class holds generic service methods related to errors
 * It should be autowired in order to have spring manage
 */
@Data
@Service
public class ValidationErrorService {

    /**
     * this method checks the binding result for any errors and returns them in a simplified map if they exist
     * @param result the result of the http request with bound parameters
     * @return the Map String,String  of errors with the binding result (null if no errors)
     */
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
