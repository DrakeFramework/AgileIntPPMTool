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
     * @param projectid
     * @return
     */
    Project findByProjectIdentifier(String projectid);

    /**
     * This can be thought of as a select * from project
     * @return
     */
    Iterable<Project> findAll();


}