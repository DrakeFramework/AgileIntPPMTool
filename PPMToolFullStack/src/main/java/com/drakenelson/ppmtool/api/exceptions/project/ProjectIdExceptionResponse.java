package com.drakenelson.ppmtool.api.exceptions.project;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * This class is just a container for the project Identifier response object.
 * When this is returned in a response json object it will appear as "projectIdentifier":"xxxxx"
 */
@Data
//lombok constructor for the one parameter
@AllArgsConstructor
public class ProjectIdExceptionResponse {
    private String projectIdentifier;
}
