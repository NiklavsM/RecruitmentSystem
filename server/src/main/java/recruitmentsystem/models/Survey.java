package recruitmentsystem.models;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "student_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Student student;

    private int s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16,
            s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31,
            s32, s33, s34, s35, s36, s37, s38, s39, s40, s41, s42, s43, s44, s45, s46,
            s47, s48, s49, s50;

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public int getExtroversion() {
        return 20 + s1 - s6 + s11 - s16 + s21 - s26 + s31 - s36 + s41 - s46;
    }

    public int getAgreeableness() {
        return 14 - s2 + s7 - s12 + s17 - s22 + s27 - s32 + s37 + s42 + s47;
    }

    public int getConscientiousness() {
        return 14 + s3 - s8 + s13 - s18 + s23 - s28 + s33 - s38 + s43 + s48;
    }

    public int getNeuroticism() {
        return 38 - s4 + s9 - s14 + s19 - s24 - s29 - s34 - s39 - s44 - s49;
    }

    public int getOpenness() {
        return 8 + s5 - s10 + s15 - s20 + s25 - s30 + s35 + s40 + s45 + s50;
    }

    public int getS1() {
        return s1;
    }

    public void setS1(int s1) {
        this.s1 = s1;
    }

    public int getS2() {
        return s2;
    }

    public void setS2(int s2) {
        this.s2 = s2;
    }

    public int getS3() {
        return s3;
    }

    public void setS3(int s3) {
        this.s3 = s3;
    }

    public int getS4() {
        return s4;
    }

    public void setS4(int s4) {
        this.s4 = s4;
    }

    public int getS5() {
        return s5;
    }

    public void setS5(int s5) {
        this.s5 = s5;
    }

    public int getS6() {
        return s6;
    }

    public void setS6(int s6) {
        this.s6 = s6;
    }

    public int getS7() {
        return s7;
    }

    public void setS7(int s7) {
        this.s7 = s7;
    }

    public int getS8() {
        return s8;
    }

    public void setS8(int s8) {
        this.s8 = s8;
    }

    public int getS9() {
        return s9;
    }

    public void setS9(int s9) {
        this.s9 = s9;
    }

    public int getS10() {
        return s10;
    }

    public void setS10(int s10) {
        this.s10 = s10;
    }

    public int getS11() {
        return s11;
    }

    public void setS11(int s11) {
        this.s11 = s11;
    }

    public int getS12() {
        return s12;
    }

    public void setS12(int s12) {
        this.s12 = s12;
    }

    public int getS13() {
        return s13;
    }

    public void setS13(int s13) {
        this.s13 = s13;
    }

    public int getS14() {
        return s14;
    }

    public void setS14(int s14) {
        this.s14 = s14;
    }

    public int getS15() {
        return s15;
    }

    public void setS15(int s15) {
        this.s15 = s15;
    }

    public int getS16() {
        return s16;
    }

    public void setS16(int s16) {
        this.s16 = s16;
    }

    public int getS17() {
        return s17;
    }

    public void setS17(int s17) {
        this.s17 = s17;
    }

    public int getS18() {
        return s18;
    }

    public void setS18(int s18) {
        this.s18 = s18;
    }

    public int getS19() {
        return s19;
    }

    public void setS19(int s19) {
        this.s19 = s19;
    }

    public int getS20() {
        return s20;
    }

    public void setS20(int s20) {
        this.s20 = s20;
    }

    public int getS21() {
        return s21;
    }

    public void setS21(int s21) {
        this.s21 = s21;
    }

    public int getS22() {
        return s22;
    }

    public void setS22(int s22) {
        this.s22 = s22;
    }

    public int getS23() {
        return s23;
    }

    public void setS23(int s23) {
        this.s23 = s23;
    }

    public int getS24() {
        return s24;
    }

    public void setS24(int s24) {
        this.s24 = s24;
    }

    public int getS25() {
        return s25;
    }

    public void setS25(int s25) {
        this.s25 = s25;
    }

    public int getS26() {
        return s26;
    }

    public void setS26(int s26) {
        this.s26 = s26;
    }

    public int getS27() {
        return s27;
    }

    public void setS27(int s27) {
        this.s27 = s27;
    }

    public int getS28() {
        return s28;
    }

    public void setS28(int s28) {
        this.s28 = s28;
    }

    public int getS29() {
        return s29;
    }

    public void setS29(int s29) {
        this.s29 = s29;
    }

    public int getS30() {
        return s30;
    }

    public void setS30(int s30) {
        this.s30 = s30;
    }

    public int getS31() {
        return s31;
    }

    public void setS31(int s31) {
        this.s31 = s31;
    }

    public int getS32() {
        return s32;
    }

    public void setS32(int s32) {
        this.s32 = s32;
    }

    public int getS33() {
        return s33;
    }

    public void setS33(int s33) {
        this.s33 = s33;
    }

    public int getS34() {
        return s34;
    }

    public void setS34(int s34) {
        this.s34 = s34;
    }

    public int getS35() {
        return s35;
    }

    public void setS35(int s35) {
        this.s35 = s35;
    }

    public int getS36() {
        return s36;
    }

    public void setS36(int s36) {
        this.s36 = s36;
    }

    public int getS37() {
        return s37;
    }

    public void setS37(int s37) {
        this.s37 = s37;
    }

    public int getS38() {
        return s38;
    }

    public void setS38(int s38) {
        this.s38 = s38;
    }

    public int getS39() {
        return s39;
    }

    public void setS39(int s39) {
        this.s39 = s39;
    }

    public int getS40() {
        return s40;
    }

    public void setS40(int s40) {
        this.s40 = s40;
    }

    public int getS41() {
        return s41;
    }

    public void setS41(int s41) {
        this.s41 = s41;
    }

    public int getS42() {
        return s42;
    }

    public void setS42(int s42) {
        this.s42 = s42;
    }

    public int getS43() {
        return s43;
    }

    public void setS43(int s43) {
        this.s43 = s43;
    }

    public int getS44() {
        return s44;
    }

    public void setS44(int s44) {
        this.s44 = s44;
    }

    public int getS45() {
        return s45;
    }

    public void setS45(int s45) {
        this.s45 = s45;
    }

    public int getS46() {
        return s46;
    }

    public void setS46(int s46) {
        this.s46 = s46;
    }

    public int getS47() {
        return s47;
    }

    public void setS47(int s47) {
        this.s47 = s47;
    }

    public int getS48() {
        return s48;
    }

    public void setS48(int s48) {
        this.s48 = s48;
    }

    public int getS49() {
        return s49;
    }

    public void setS49(int s49) {
        this.s49 = s49;
    }

    public int getS50() {
        return s50;
    }

    public void setS50(int s50) {
        this.s50 = s50;
    }
}
