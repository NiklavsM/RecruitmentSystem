package com.example.recruitmentsystem.services;

import com.example.recruitmentsystem.models.Student;
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

    public void sendEmail(Student student){
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(student.getEmail());
        mail.setFrom(emailFrom);
        mail.setSubject("Company A");
        mail.setText("Thanks for sending your details. To add CV, complete personality test or change details please follow the link: http://recruitmentapp-env.zufas2d86p.eu-west-2.elasticbeanstalk.com/profile/" + student.getLoginToken());

        javaMailSender.send(mail);
    }


}
