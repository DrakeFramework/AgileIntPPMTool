package com.drakenelson.ppmtool.web.api.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drakenelson.ppmtool.domain.Project;
import com.drakenelson.ppmtool.services.ProjectService;

import lombok.Data;

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
     * @param project json input object
     * @return json return object
     */
    @PostMapping("")
    public ResponseEntity<Project> createNewProject(@RequestBody Project project) {
        //Logic
        Project newProject = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<Project>(newProject, HttpStatus.CREATED);
    }


}
