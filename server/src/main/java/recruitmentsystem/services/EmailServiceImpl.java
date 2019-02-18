package recruitmentsystem.services;

import recruitmentsystem.models.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl {
    private JavaMailSender javaMailSender;
    @Value("${spring.mail.username}")
    private String emailFrom;

    @Autowired
    public EmailServiceImpl(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendEmail(Email email){
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(email.getEmailTo());
        mail.setFrom(emailFrom);
        mail.setSubject("Company A");
        mail.setText(email.getEmailText());

        javaMailSender.send(mail);
    }


}
