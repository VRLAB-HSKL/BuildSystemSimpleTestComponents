package com.mhm.mongo.data.buildsystem;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "UnityProject")
public class UnityProject {

    @Id
    private long id;

    private String unityProjectName;

    List<Scene> unityScenes;

    public UnityProject() {
        this.unityScenes = new ArrayList<Scene>();
    }

    public UnityProject(String unityProjectName, List<Scene> unityScenes) {
        this.unityProjectName = unityProjectName;
        this.unityScenes = unityScenes;
    }

    public String getUnityProjectName() {
        return unityProjectName;
    }

    public void setUnityProjectName(String unityProjectName) {
        this.unityProjectName = unityProjectName;
    }

    public void addUnityScene(Scene scene) {
        unityScenes.add(scene);
    }

    public List<Scene> getUnityScenes() {
        return unityScenes;
    }

    public void setUnityScenes(List<Scene> unityScenes) {
        this.unityScenes = unityScenes;
    }
}
