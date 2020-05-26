package com.mhm.mongo.data.buildsystem;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "UnityProject")
public class UnityProject {

    @Id
    private long id;

    private String unityProjectName;

    List<Scene> unityScenes;


}
