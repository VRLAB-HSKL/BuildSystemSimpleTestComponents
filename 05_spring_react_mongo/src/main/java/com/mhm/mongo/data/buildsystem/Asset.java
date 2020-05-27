package com.mhm.mongo.data.buildsystem;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Asset {

    private String assetName;

    public Asset() {

    }

    public Asset(String name) {
        this.assetName = name;
    }

    public String getAssetName() {
        return assetName;
    }

    public void setAssetName(String assetName) {
        this.assetName = assetName;
    }
}
