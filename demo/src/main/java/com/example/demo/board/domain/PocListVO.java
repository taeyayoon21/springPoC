package com.example.demo.board.domain;



import java.io.Serializable;

public class PocListVO  extends CommonBean implements Serializable {

    private static final long serialVersionUDISC_CD = 8325859627946261279L;

    private String WPKG_TYPE;
    private String DISC_CD;
    private String WPKG_CD;
    private String WPKG_DESC;
    private String WPKG_RMK;

    public String getWPKG_TYPE() {
        return WPKG_TYPE;
    }

    public void setWPKG_TYPE(String WPKG_TYPE) {
        this.WPKG_TYPE = WPKG_TYPE;
    }

    public String getDISC_CD() {
        return DISC_CD;
    }

    public void setDISC_CD(String DISC_CD) {
        this.DISC_CD = DISC_CD;
    }

    public String getWPKG_CD() {
        return WPKG_CD;
    }

    public void setWPKG_CD(String WPKG_CD) {
        this.WPKG_CD = WPKG_CD;
    }

    public void changeWPKG_CD(String oldWPKG_CD, String newWPKG_CD) {
        this.WPKG_CD = newWPKG_CD;
    }

    public boolean matchWPKG_CD(String WPKG_CD) {
        return this.WPKG_CD.equals(WPKG_CD);
    }

    @Override
    public String toString() {
        return "PocListVO{" +
                "WPKG_TYPE=" + WPKG_TYPE +
                ", DISC_CD='" + DISC_CD + '\'' +
                ", WPKG_CD='" + WPKG_CD + '\'' +
                ", WPKG_DESC='" + WPKG_DESC + '\'' +
                ", WPKG_RMK='" + WPKG_RMK + '\'' +
                '}';
    }
}