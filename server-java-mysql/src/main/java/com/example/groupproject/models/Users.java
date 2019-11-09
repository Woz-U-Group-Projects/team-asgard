package com.example.groupproject.models;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class Users {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String firstName;
  private String lastName;
  private String userName;

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFirstName() {
    return this.firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
	    return this.lastName;
	  }

  public void setLastName(String lastName) {
	    this.lastName = lastName;
	  }

  public String getUserName() {
	    return this.userName;
	  }

  public void setUserName(String userName) {
	    this.userName = userName;
	  }

}