package com.drakenelson.ppmtool.api.exceptions.project;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


/**
 * this class is used as a controller for exceptions regarding project Id
 * the basic purpose is to route the exception to a new response - ProjectIdExceptionResponse
 */
//controller advice helps break away from controllers that are exception specific
//allows global exception handling for all exceptions wired here
@ControllerAdvice
//this class is a controller to handle rest requests and responses
@RestController
public class ProjectIdExceptionHandler extends ResponseEntityExceptionHandler {

    /**
     * this method is the handler for exceptions
     * @param ex        the exception for project Id
     * @param request   the web request
     * @return response entity json object
     */
    @ExceptionHandler
    public final ResponseEntity<Object> handleProjectIdException(ProjectIdException ex, WebRequest request ){
        // this is the response from the exception
        ProjectIdExceptionResponse response = new ProjectIdExceptionResponse(ex.getMessage());
        // this is the return of a bad response (400) it will only be bad request because it's an exception handler
        return new ResponseEntity<Object>(response, HttpStatus.BAD_REQUEST);
    }

}
