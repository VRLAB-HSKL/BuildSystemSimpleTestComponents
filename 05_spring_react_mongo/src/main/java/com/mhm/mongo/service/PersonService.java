package com.mhm.mongo.service;

import com.mhm.mongo.data.Person;
import com.mhm.mongo.data.PersonDALImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonService {

    @Autowired
    private PersonDALImpl personDAL;


    @GetMapping("/createPerson")
    public void createPerson() {
        personDAL.savePerson(new Person("peterson", 48));
    }

    @GetMapping("/getPerson")
    public Person getPerson(){
        return personDAL.findByName("peterson");
    }

    @GetMapping("/deletePerson")
    public void deletePerson() {
        personDAL.deletePerson(personDAL.findByName("peterson"));
    }
}
