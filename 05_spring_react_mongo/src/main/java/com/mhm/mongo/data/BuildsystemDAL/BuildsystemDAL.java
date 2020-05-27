package com.mhm.mongo.data.BuildsystemDAL;

import com.mhm.mongo.data.buildsystem.Scene;
import com.mhm.mongo.data.buildsystem.UnityProject;

import java.util.List;

public interface BuildsystemDAL {

    UnityProject searchByName(String projectName);
    List<Scene> getAllScenesFromProject(String projectName);
    void createUnityProject(UnityProject unityProject);
    void deleteUnityProject(UnityProject unityProject);

}
