package com.mhm.mongo.data;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "person")
public class Person {

    @Id
    private String personId;
    private String name;
    private long age;


    public Person(){

    }

    public Person(String name, long age) {
        this.name = name;
        this.age = age;
    }
}
