package com.mhm.vrlab.hello;

import org.springframework.web.bind.annotation.*;

@RestController
public class RESTController {

    @GetMapping("/greeting")
    public String greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new String("Hello, "+  name);
    }

    @PostMapping("/post")
    public String post(@RequestBody String name) {
        return new String ("Wood, " + name);
    }
}
