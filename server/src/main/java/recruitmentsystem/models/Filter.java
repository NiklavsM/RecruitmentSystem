package recruitmentsystem.models;

import java.util.List;

public class Filter {
    private String createdFrom;
    private String createdTo;
    private List<String> courses;
    private boolean attachments;
    private boolean personalityTest;

    public Filter(String createdFrom, String createdTo, List<String> courses, boolean attachments, boolean personalityTest) {
        this.createdFrom = createdFrom;
        this.createdTo = createdTo;
        this.courses = courses;
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

    public void setAttachments(boolean attachments) {
        this.attachments = attachments;
    }

    public void setPersonalityTest(boolean personalityTest) {
        this.personalityTest = personalityTest;
    }

    public List<String> getCourses() {
        return courses;
    }

    public void setCourses(List<String> courses) {
        this.courses = courses;
    }

    public boolean isAttachments() {
        return attachments;
    }

    public boolean isPersonalityTest() {
        return personalityTest;
    }
}
