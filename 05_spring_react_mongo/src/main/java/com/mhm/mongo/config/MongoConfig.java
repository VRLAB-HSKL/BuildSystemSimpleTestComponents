package com.mhm.mongo.config;


import com.mhm.mongo.data.PersonDAL.PersonDALImpl;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.io.IOException;

@Configuration
public class MongoConfig {
    private static final String MONGO_DB_URL = "mongodb://127.0.0.1:27017";
    private static final String MONGO_DB_NAME = "mydatabase";

    @Bean
    public MongoClient mongoClient() {
        return MongoClients.create(MONGO_DB_URL);
    }


    @Bean
    public MongoTemplate mongoTemplate() throws IOException {
        return new MongoTemplate(mongoClient(), "mydatabase");
    }

    @Bean
    public PersonDALImpl personDAL() {
        return new PersonDALImpl();
    }
}
