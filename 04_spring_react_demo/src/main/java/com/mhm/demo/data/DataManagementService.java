package com.mhm.demo.data;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class DataManagementService {


    @GetMapping("/getallprojectNames")
    public List<String> getAllProjectNames() {
        List<String> list = new ArrayList<String>();
        list.add("Project_1");
        list.add("Project_2");
        list.add("Project_3");
        list.add("Project_4");

        return list;
    }

    @GetMapping("/getallsceneNames")
    public void getAllSceneNames() {

    }

    @PostMapping("/postnewscenes")
    public void postNewScenes() {

    }


}
