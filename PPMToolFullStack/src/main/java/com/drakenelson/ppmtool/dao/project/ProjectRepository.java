package com.drakenelson.ppmtool.dao.project;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * standard fare repo interface
 */
@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

    /**
     * this should be implemented to find a single project by ID
     * select * from project where projectIdentifier = ?projectId
     * @param projectid the query parameter
     * @return a project
     */
    Project findByProjectIdentifier(String projectid);

    /**
     * This can be thought of as a select * from project
     * Iterable returns a json object that works for iterating
     * @return an list of projects
     */
    Iterable<Project> findAll();

}