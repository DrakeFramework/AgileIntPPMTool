package com.drakenelson.ppmtool.web.api.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drakenelson.ppmtool.domain.Project;
import com.drakenelson.ppmtool.services.ProjectService;

import lombok.Data;

import javax.validation.Valid;

/**
 * Standard controller setup to handle rest requests for json http requests concerning projects
 * I typically like to annotate my controllers with @Controller whether or not i need to with the
 * mapping
 *
 * it seems to me a request scope would be appropriate for this
 */
@RestController
@RequestMapping("/api/project")
@Controller
@Scope("request")
@Data
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    /**
     * a post http request comes in to the /api/project url
     * adding the @Valid annotation to the request body tells the mapping to perform the validation
     *
     * @param project json input object
     * @param result a binding result is a result that shows if there are errors
     * @return json return object
     * this was setup as a generic so that we can return strings on failed validation
     */
    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result) {
        //this can check for the 400s set up on the domain object
        if(result.hasErrors()){
            //return httpstatus 400 with a body string
            return new ResponseEntity<String>("Invalid Project Object", HttpStatus.BAD_REQUEST);
        }
        
        //Logic
        Project newProject = projectService.saveOrUpdateProject(project);
        //return httpstatus 201
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }


}
