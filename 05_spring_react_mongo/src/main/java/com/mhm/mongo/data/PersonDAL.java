package com.mhm.mongo.data;

public interface PersonDAL {
    Person savePerson(Person person);
    Person findByName(String name);
    void deletePerson(Person person);
}
