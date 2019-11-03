package com.drakenelson.ppmtool.services.api.project;

import com.drakenelson.ppmtool.exceptions.api.project.ProjectIdException;
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

    public Project saveOrUpdateProject(Project project) {
        //validation
        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        } catch (Exception e) {
            throw new ProjectIdException("Project Id '" + project.getProjectIdentifier().toUpperCase() + "' already exists");
        }

        //Logic

    }

}
