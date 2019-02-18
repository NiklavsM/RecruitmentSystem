package recruitmentsystem.models;

public class DatePair {
    private String fromDate;
    private String toDate;

    public DatePair(String fromDate, String toDate) {
        this.fromDate = fromDate;
        this.toDate = toDate;
    }

    public String getFromDate() {
        return fromDate;
    }

    public void setFromDate(String fromDate) {
        this.fromDate = fromDate;
    }

    public String getToDate() {
        return toDate;
    }

    public void setToDate(String toDate) {
        this.toDate = toDate;
    }
}
