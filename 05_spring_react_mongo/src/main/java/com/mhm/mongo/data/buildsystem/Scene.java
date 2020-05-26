package com.mhm.mongo.data.buildsystem;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Scene {

    @Id
    private long id;

    private String sceneName;

    List<Asset> unityAssets;

    BuildPlatform selectedBuildPlatform;

    public Scene() {

    }

    public Scene(String sceneName, List<Asset> assetList, BuildPlatform buildPlatformatform) {

    }

    public String getSceneName() {
        return sceneName;
    }

    public void setSceneName(String sceneName) {
        this.sceneName = sceneName;
    }

    public List<Asset> getUnityAssets() {
        return unityAssets;
    }

    public void setUnityAssets(List<Asset> unityAssets) {
        this.unityAssets = unityAssets;
    }

    public BuildPlatform getSelectedBuildPlatform() {
        return selectedBuildPlatform;
    }

    public void setSelectedBuildPlatform(BuildPlatform selectedBuildPlatform) {
        this.selectedBuildPlatform = selectedBuildPlatform;
    }
}
