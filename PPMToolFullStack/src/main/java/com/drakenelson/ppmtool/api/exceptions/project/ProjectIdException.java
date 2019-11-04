package com.drakenelson.ppmtool.api.exceptions.project;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * this is a THROWABLE exception that can be used in conjunction with the ProjectIdExceptionHandler RestController to
 * signal a 400 status return
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProjectIdException extends RuntimeException {
    /**
     * requires a constructor to instantiate the exception with a message
     * @param message exception message
     */
    public ProjectIdException(String message) {
        super(message);
    }

}
