package recruitmentsystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import recruitmentsystem.models.Email;
import recruitmentsystem.services.EmailService;

@RestController
@RequestMapping("server/secure/email")
public class EmailController {

    @Autowired
    private EmailService emailService;

    // Sends the email
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void sendEmail(@RequestBody Email email) {
        emailService.sendEmail(email);
    }
}
