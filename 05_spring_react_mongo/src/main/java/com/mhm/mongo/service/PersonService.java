package com.mhm.mongo.service;

import com.mhm.mongo.data.Person;
import com.mhm.mongo.data.PersonDALImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonService {

    private static final String MEDIA_TYPE = "application/json";

    @Autowired
    private PersonDALImpl personDAL;


    @GetMapping(value = "/createPerson", produces = MEDIA_TYPE)
    public void createPerson() {
        personDAL.savePerson(new Person("peterson", 48));
    }

    @GetMapping(value = "/getPerson", produces = MEDIA_TYPE)
    public ResponseEntity<Person> getPerson(){
        Person person = personDAL.findByName("peterson");
        return ResponseEntity.ok(person);
    }

    //funzt mit Json return
    @RequestMapping("/Person")
    public Person person(){
        Person person = personDAL.findByName("peterson");
        return person;
    }

    @GetMapping("/deletePerson")
    public void deletePerson() {
        personDAL.deletePerson(personDAL.findByName("peterson"));
    }
}
