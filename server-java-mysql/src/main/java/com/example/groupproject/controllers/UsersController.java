package com.example.groupproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.groupproject.models.Users;
import com.example.groupproject.models.UsersRepository;

@RestController
@RequestMapping("/users")
public class UsersController {

  @Autowired
  UsersRepository usersRepository;

  @GetMapping()
  public List<Users> getUsers() {
    return usersRepository.findAll();
  }
  
  @PostMapping()
  public Users addUsers(@RequestBody Users user) {
     return usersRepository.save(user);
  }

  @DeleteMapping("/{id}")
  public void deleteTask(@PathVariable Long id) {
    usersRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Users updateUsers(@PathVariable Long id, @RequestBody Users user) {
    Users foundUsers = usersRepository.findById(id).orElse(null);
    if (foundUsers != null) {
    	foundUsers.setFirstName(user.getFirstName());
    	foundUsers.setLastName(user.getLastName());
    	foundUsers.setUserName(user.getUserName());
      usersRepository.save(foundUsers);
      return foundUsers;
    }
    return null;
  }

}


