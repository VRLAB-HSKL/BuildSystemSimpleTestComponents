package com.mhm.mongo.data.PersonDAL;

import com.mhm.mongo.data.person.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class PersonDALImpl implements PersonDAL{

    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public Person savePerson(Person person) {
        mongoTemplate.save(person);
        return person;
    }

    @Override
    public Person findByName(String name) {
        Query query = new Query();
        query.addCriteria(Criteria.where("name").is(name));

        return mongoTemplate.findOne(query, Person.class);
    }

    @Override
    public void deletePerson(Person person) {
        mongoTemplate.remove(person);

    }
}
