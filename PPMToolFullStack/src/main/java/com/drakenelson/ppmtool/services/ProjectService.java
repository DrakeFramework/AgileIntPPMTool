package com.drakenelson.ppmtool.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drakenelson.ppmtool.domain.Project;
import com.drakenelson.ppmtool.repo.ProjectRepository;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project) {
        //Logic
        return projectRepository.save(project);
    }

}
