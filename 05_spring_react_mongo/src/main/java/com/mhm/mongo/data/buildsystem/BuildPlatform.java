package com.mhm.mongo.data.buildsystem;

import org.springframework.data.annotation.Id;

public class BuildPlatform {

    @Id
    private long id;

    private String buildPlatform;
}
