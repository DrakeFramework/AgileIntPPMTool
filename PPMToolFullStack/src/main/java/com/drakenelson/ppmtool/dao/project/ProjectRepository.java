package com.drakenelson.ppmtool.dao.project;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * standard fare repo interface
 */
@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

    Project findByProjectIdentifier(String projectid);
    Iterable<Project> findAll();

}