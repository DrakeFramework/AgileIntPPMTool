package com.drakenelson.ppmtool.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.drakenelson.ppmtool.domain.Project;

/**
 * standard fare repo interface
 */
@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

    Project findByProjectIdentifier(String projectid);
    Iterable<Project> findAll();

}