package com.drakenelson.ppmtool.api.web.project;

import com.drakenelson.ppmtool.api.services.ValidationErrorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import com.drakenelson.ppmtool.dao.project.Project;
import com.drakenelson.ppmtool.api.services.project.ProjectService;

import lombok.Data;

import javax.validation.Valid;

/**
 * Standard controller setup to handle rest requests for json http requests concerning projects
 * I typically like to annotate my controllers with @Controller whether or not i need to with the
 * mapping
 * <p>
 * it seems to me a request scope would be appropriate for this
 */
@RestController
//this is the mapping from the hosted directory localhost:8080xxxxxxx test tomcat will be the location from which
// the war was extracted
@RequestMapping("/api/project")
@Controller
@Scope("request")
//cross origin allows interaction between servers
@CrossOrigin
@Data
public class ProjectController {

    @Autowired
    private ProjectService projectService;
    @Autowired
    private ValidationErrorService validationErrorService;

    /**
     * a post http request comes in to the /api/project url
     * adding the @Valid annotation to the request body tells the mapping to perform the validation
     *
     * By passing this with a value for "id" the database primary key the JPA will signal the object
     * for update rather than insert.  This works because the first part of the crud "save" operation
     * is to check if exists by the primary key but by passing a null primary key a match is never found
     * and it defaults to insert.
     *
     * @param project json input object
     * @param result  a binding result is a result that shows if there are errors
     * @return json return object
     * this was setup as a generic so that we can return strings on failed validation
     */
    @PostMapping("")
    public ResponseEntity<?> saveOrUpdateProject(@Valid @RequestBody Project project, BindingResult result) {

        //this can check for the 400s set up on the domain object
        ResponseEntity<?> errorMap = validationErrorService.mapValidationService(result);
        if (errorMap != null) {
            return errorMap;
        }

        //Logic
        Project newProject = projectService.saveOrUpdateProject(project);
        //return httpstatus 201
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }

    /**
     * this is the read portion of the cRud handler the mapping from project service allows for the find from the repo
     * object
     *
     * @param projectId must match getMapping var
     * @return json result for the project
     */
    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId) {
        //use the service to route to the repo not the controller
        Project project = projectService.findProjectByIdentifier(projectId);
        //return the relevant project as a json response entity with status 200
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    /**
     * get a list of all projects
     *
     * @return json iterable list of projects
     */
    @GetMapping("/all")
    public Iterable<Project> getAllProjects() {
        return projectService.findAllProjects();
    }

    /**
     * this can be accessed by a delete mapping via rest
     * @param projectId identifier
     * @return a string that tells whether it worked
     */
    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectId) {
        //call the service delete method
        projectService.deleteProjectByIdentifier(projectId);
        //return a string if an exception wasn't thrown by the service
        String strResponse = "Project With Id: '" + projectId + "' Was Deleted";
        return new ResponseEntity<String>(strResponse, HttpStatus.OK);
    }

}
