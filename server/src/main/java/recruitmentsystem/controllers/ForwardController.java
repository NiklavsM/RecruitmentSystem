package recruitmentsystem.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

// If spring boot cannot resolve the endpoint it will forward it to the client.
@Controller
public class ForwardController {

    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    public String redirect() {
        // Forwards any request that doesnt match with back-end endpoints to frontend so that route is preserved.
        return "forward:/";
    }
}
