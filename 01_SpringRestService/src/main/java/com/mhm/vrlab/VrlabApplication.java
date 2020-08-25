package com.mhm.vrlab;

import com.mhm.vrlab.hello.GreetingWebClient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VrlabApplication {

    public static void main(String[] args) {
        SpringApplication.run(VrlabApplication.class, args);

        GreetingWebClient gwc = new GreetingWebClient();
        System.out.println(gwc.getResult());
    }

}
