package com.mhm.mongo.service;

import com.mhm.mongo.data.BuildsystemDAL.BuildsystemDALImpl;
import com.mhm.mongo.data.buildsystem.Asset;
import com.mhm.mongo.data.buildsystem.Scene;
import com.mhm.mongo.data.buildsystem.UnityProject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BuildSystemService {

    @Autowired
    BuildsystemDALImpl buildsystemDAL;


    private UnityProject initUnityProject(){
        Asset asset = new Asset("VIU");
        Asset asset1 = new Asset("GVR");
        Scene scene = new Scene();
        scene.setSceneName("Test_Scene");
        scene.addAsset(asset);
        scene.addAsset(asset1);
        UnityProject unityProject = new UnityProject();
        unityProject.addUnityScene(scene);
        unityProject.setUnityProjectName("Test_Unity_Project");
        return  unityProject;
    }

    @GetMapping("/createunityproject")
    public void createUnityProject() {
        buildsystemDAL.createUnityProject(initUnityProject());
    }

    @RequestMapping("/findunityproject")
    public UnityProject findUnityProject(){
        UnityProject unityProject = buildsystemDAL.searchByName("Test_Unity_Project");
        return unityProject;
    }

    @RequestMapping("/deleteunityproject")
    public void removeUnityProject() {
        UnityProject unityProject = buildsystemDAL.searchByName("Test_Unity_Project");
        buildsystemDAL.deleteUnityProject(unityProject);
    }
}
