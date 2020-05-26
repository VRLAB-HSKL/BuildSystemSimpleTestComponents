package com.mhm.mongo.data.buildsystem;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Asset {

    @Id
    private long id;

    private List<Asset> assetList;


}
