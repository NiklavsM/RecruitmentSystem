package recruitmentsystem.controllers;

import recruitmentsystem.models.Email;
import recruitmentsystem.services.EmailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("server/api/email")
public class EmailController {

    @Autowired
    private EmailServiceImpl emailServiceImpl;

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void sendEmail(@RequestBody Email email) {
        emailServiceImpl.sendEmail(email);
    }
}
