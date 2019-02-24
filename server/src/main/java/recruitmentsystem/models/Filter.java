package recruitmentsystem.models;

public class Filter {
    private String createdFrom;
    private String createdTo;
    private boolean attachments;
    private boolean personalityTest;

    public Filter(String createdFrom, String createdTo, boolean attachments, boolean personalityTest) {
        this.createdFrom = createdFrom;
        this.createdTo = createdTo;
        this.attachments = attachments;
        this.personalityTest = personalityTest;
    }

    public Filter() {
    }

    public String getCreatedFrom() {
        return createdFrom;
    }

    public void setCreatedFrom(String createdFrom) {
        this.createdFrom = createdFrom;
    }

    public String getCreatedTo() {
        return createdTo;
    }

    public void setCreatedTo(String createdTo) {
        this.createdTo = createdTo;
    }

    public boolean hasAttachments() {
        return attachments;
    }

    public void setAttachments(boolean attachments) {
        this.attachments = attachments;
    }

    public boolean hasPersonalityTest() {
        return personalityTest;
    }

    public void setPersonalityTest(boolean personalityTest) {
        this.personalityTest = personalityTest;
    }
}
