package com.drakenelson.ppmtool.dao.project;

import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

/**
 * H2 is a pretty cool tool.  it allows for a database to be kept tied solely to the runtime
 * By implementing this I can quickly test and develop a jpa application without setting up
 * the actual database.
 *
 * How did people live before Lombok
 *
 * the annotation validations will return 500 errors to input json that breaks the validation rules
 *
 */
@Entity
@Data
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * the size annotation allows validation on the string length
     * the column allows for database table interaction validation in this case we cannot update and must be unique
     */
    @NotBlank(message = "Project Identifier is Required")
    @Size(min=4, max=5, message ="Please use 4-5 characters")
    //@Column validation happens after the validation has been completed. at database input timing
    @Column(updatable=false, unique=true)
    private String projectIdentifier;

    /**
     * the NotBlank annotation allows for validation on entity fields
     */
    @NotBlank(message = "Project Name is Required")
    private String projectName;
    @NotBlank(message="Description is required")
    private String description;

    /**
     * the json format allows automatic formatting of json results
     */
    @JsonFormat(pattern="yyyy-mm-dd")
    private Date startDate;
    @JsonFormat(pattern="yyyy-mm-dd")
    private Date endDate;
    @JsonFormat(pattern="yyyy-mm-dd")
    @Column(updatable = false)
    private Date createdAt;
    @JsonFormat(pattern="yyyy-mm-dd")
    private Date updatedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
        //to me it makes sense to have this set
        this.updatedAt = createdAt;
    }

    @PreUpdate
    protected void onUpDate() {
        this.updatedAt = new Date();
    }
}
