package com.drakenelson.ppmtool;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * Important note about this class is the SpringBootServletInitializer superclass
 * this class is added to a spring boot application class in order to provide the
 * functionality for the application to run in a servlet container (ie. TOMCAT)
 *
 * may want to do some config stuff in the future but we'll see how far this project
 * goes before I start another one.
 */
@SpringBootApplication
public class PpmtoolApplication  extends SpringBootServletInitializer {

    /**
     * standard spring boot driver method
     * @param args standard main args
     */
    public static void main(String[] args) {
        SpringApplication.run(PpmtoolApplication.class, args);
    }

}
