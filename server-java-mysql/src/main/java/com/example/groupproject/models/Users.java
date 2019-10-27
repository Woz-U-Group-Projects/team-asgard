package com.example.groupproject.models;

//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class Users {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String firstname;
  private String lastname;
  private String username;

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String firstName() {
    return this.firstname;
  }

  public void firstName(String firstname) {
    this.firstname = firstname;
  }

  public String lastName() {
	    return this.lastname;
	  }

  public void lastName(String lastname) {
	    this.lastname = lastname;
	  }

  public String userName() {
	    return this.username;
	  }

  public void userName(String username) {
	    this.username = username;
	  }

}