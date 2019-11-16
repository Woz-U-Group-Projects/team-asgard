package com.example.groupproject.models;

// //import javax.persistence.Column;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;

@Entity
@Table(name = "tips")
public class Tips {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Date date;
  private Long id;
  private String userName;
  private String tipsSubmission;
  @CreationTimestamp
  @Temporal(TemporalType.DATE)
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")

  public Date getDate() {
    return date;
  }

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