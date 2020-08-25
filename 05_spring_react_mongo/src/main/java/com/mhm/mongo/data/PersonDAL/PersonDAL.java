package com.mhm.mongo.data.PersonDAL;

import com.mhm.mongo.data.person.Person;

public interface PersonDAL {
    Person savePerson(Person person);
    Person findByName(String name);
    void deletePerson(Person person);
}
