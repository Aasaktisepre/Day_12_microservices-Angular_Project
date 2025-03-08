package com.mamba.uv;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class UserevalApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserevalApplication.class, args);
    }

}
