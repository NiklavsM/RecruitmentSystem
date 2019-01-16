package com.example.recruitmentsystem.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//needed so if spring boot cannot resolve the endpoint it would forward it to the client.
@Controller
public class ForwardController {

    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    public String redirect() {
        // Forward to home page so that route is preserved.
        return "forward:/";
    }
}
