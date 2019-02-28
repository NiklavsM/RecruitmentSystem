package recruitmentsystem.models;

public class Email {
    private String emailTo;
    private String subject;
    private String body;

    public Email(String emailTo, String subject, String body) {
        this.emailTo = emailTo;
        this.subject = subject;
        this.body = body;
    }

    public String getEmailTo() {
        return emailTo;
    }

    public void setEmailTo(String emailTo) {
        this.emailTo = emailTo;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }
}
