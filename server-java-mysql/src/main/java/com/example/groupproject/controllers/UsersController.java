package com.example.groupproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
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
  
/*  @GetMapping()
  public String index(Model model) {
      model.addAttribute("users", new Users());

      // The string index will be looked for in src/main/resources/templates
      return "index";
  }*/


  @PostMapping()
  public Users addUsers(@RequestBody Users users) {
    return usersRepository.save(users);
  }
 /* @PostMapping("/users")
  public String usersSubmit(@ModelAttribute Users users) {
      return "result";
  }*/

  @DeleteMapping("/{id}")
  public void deleteTask(@PathVariable Long id) {
    usersRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Users updateProject(@PathVariable Long id, @RequestBody Users users) {
    Users foundUsers = usersRepository.findById(id).orElse(null);
    if (foundUsers != null) {
    	foundUsers.firstName(users.firstName());
    	foundUsers.lastName(users.lastName());
    	foundUsers.userName(users.userName());
      usersRepository.save(foundUsers);
      return foundUsers;
    }
    return null;
  }

}


