package com.mhm.mongo.data.BuildsystemDAL;

import com.mhm.mongo.data.buildsystem.Scene;
import com.mhm.mongo.data.buildsystem.UnityProject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;

@Repository
public class BuildsystemDALImpl implements BuildsystemDAL {

    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public UnityProject searchByName(String unityProjectName) {
        Query query = new Query();
        query.addCriteria(Criteria.where("unityProjectName").is(unityProjectName));
        return mongoTemplate.findOne(query, UnityProject.class);
    }

    @Override
    public List<Scene> getAllScenesFromProject(String projectName) {
        return null;
    }

    @Override
    public void createUnityProject(UnityProject unityProject) {
        mongoTemplate.save(unityProject);

    }

    @Override
    public void deleteUnityProject(UnityProject unityProject) {
        mongoTemplate.remove(unityProject);
    }
}
