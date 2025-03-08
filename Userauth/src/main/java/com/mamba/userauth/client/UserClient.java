package com.mamba.userauth.client;

import com.mamba.userauth.model.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "user-service", url = "http://localhost:8081")
public interface UserClient {
    @GetMapping("/api/users/by-email/{email}")
    User getUserByEmail(@PathVariable("email") String email);
}