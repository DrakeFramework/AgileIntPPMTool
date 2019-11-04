package com.drakenelson.ppmtool.api.services.project;

import com.drakenelson.ppmtool.api.exceptions.project.ProjectIdException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drakenelson.ppmtool.dao.project.Project;
import com.drakenelson.ppmtool.dao.project.ProjectRepository;

import lombok.Data;

/**
 * separating services into a separate aspect from controllers helps keep logic out of controllers
 * I'm rather fond of the idea of keeping business logic and controller logic separate if for no
 * other reason than just to make classes easier to read.
 */
@Service
@Data
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    /**
     * This method implements the logic for saving or updating a project object from the project controller
     *
     * @param project the project object to be persisted to the database
     * @return the project object to be returned
     * - Note the thrown exception will intercept this call and return projectIdExceptionResponse object instead
     */
    public Project saveOrUpdateProject(Project project) {
        Project resultProject;

        //validation
        try {
            //convert the project identifier to upper case
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            //set the result project to the result of the save operation
            resultProject = projectRepository.save(project);
        } catch (Exception e) {
            //if the project repository threw an exception from the validation then route to the exception response
            throw new ProjectIdException("Project Id '" + project.getProjectIdentifier().toUpperCase() + "' already exists");
        }

        //return the result if the exception wasn't thrown
        return resultProject;
    }

    /**
     * this is the findById method for use with projects based on the unique identifier
     *
     * @param projectId the project Identifier passed in through the URL
     * @return a project object that can be returned in the controller as json
     */
    public Project findProjectByIdentifier(String projectId) {

        //find the project through the repository crud handler
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        // if the project isn't found through the project id
        if (project == null) {
            //throw exception to return a projectIdExceptionResponse instead
            throw new ProjectIdException("Project with ID '" + projectId.toUpperCase() + "' Does Not Exist");
        }

        //return the project object
        return project;
    }

    /**
     * this can be used by a controller to get a json object that has all the json elements
     *
     * @return projects
     */
    public Iterable<Project> findAllProjects() {
        return projectRepository.findAll();
    }

    /**
     * use the standard crud repository delete method to delete by id
     * @param projectId the unique identifier for project
     */
    public void deleteProjectByIdentifier(String projectId) {
        //first step is to try and find the project
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        //handle when a project ID is not found
        if (project == null) {
            //use standard project id exception
            throw new ProjectIdException("Cannot delete project "+projectId+" because it does not exist");
        }
        //use the standard delete method from crudRepo
        projectRepository.delete(project);
    }
}
