package com.drakenelson.ppmtool.web.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drakenelson.ppmtool.domain.Project;
import com.drakenelson.ppmtool.services.ProjectService;

import lombok.Data;

/**
 * Standard controller setup to handle rest requests for json http requests concerning projects
 */
@RestController
@RequestMapping("/api/project")
@Data
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @PostMapping("")
    public ResponseEntity<Project> createNewProject(@RequestBody Project project) {
        //Logic
        Project newProject = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<Project>(newProject, HttpStatus.CREATED);
    }


}
