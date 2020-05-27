package com.mhm.mongo.data.buildsystem;

import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

public class Scene {

    private String sceneName;

    List<Asset> unityAssets;

    String selectedBuildPlatform;

    public Scene() {
        this.unityAssets = new ArrayList<Asset>();
    }

    public Scene(String sceneName, List<Asset> assetList, String buildPlatformatform) {
        this.sceneName = sceneName;
        this.unityAssets = assetList;
        this.selectedBuildPlatform = buildPlatformatform;
    }

    public String getSceneName() {
        return sceneName;
    }

    public void setSceneName(String sceneName) {
        this.sceneName = sceneName;
    }

    public void addAsset(Asset asset) {
        unityAssets.add(asset);
    }

    public List<Asset> getUnityAssets() {
        return unityAssets;
    }

    public void setUnityAssets(List<Asset> unityAssets) {
        this.unityAssets = unityAssets;
    }

    public String getSelectedBuildPlatform() {
        return selectedBuildPlatform;
    }

    public void setSelectedBuildPlatform(String selectedBuildPlatform) {
        this.selectedBuildPlatform = selectedBuildPlatform;
    }
}
