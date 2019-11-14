package com.example.groupproject.models;

// //import javax.persistence.Column;
// import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tips")
public class Tips {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String userName;
  private String tipsSubmission;

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUserName() {
    return this.userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public String getTipsSubmission() {
    return this.tipsSubmission;
  }

  public void setTipsSubmission(String tipsSubmission) {
    this.tipsSubmission = tipsSubmission;
  }

}