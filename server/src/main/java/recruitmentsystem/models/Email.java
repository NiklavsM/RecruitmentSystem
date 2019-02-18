package recruitmentsystem.models;

public class Email {
    private String emailTo;
    private String emailText;

    public Email(String emailTo, String emailText) {
        this.emailTo = emailTo;
        this.emailText = emailText;
    }

    public String getEmailTo() {
        return emailTo;
    }

    public void setEmailTo(String emailTo) {
        this.emailTo = emailTo;
    }

    public String getEmailText() {
        return emailText;
    }

    public void setEmailText(String emailText) {
        this.emailText = emailText;
    }
}
