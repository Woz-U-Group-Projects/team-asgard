package com.example.groupproject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping({"/","/home"})

public class HomeController {

    @GetMapping("/users")
	public String users() {
		// the string index will be looked for in src/main/resources/templates
		return "users";
    }
    @GetMapping("/team")
	public String team() {
		// the string index will be looked for in src/main/resources/templates
		return "team";
    }
    @GetMapping("/articles")
	public String articles() {
		// the string index will be looked for in src/main/resources/templates
		return "articles";
    }
    @GetMapping("/blog")
	public String blog() {
		// the string index will be looked for in src/main/resources/templates
		return "blog";
    }
    @GetMapping("/home")
	public String home() {
		// the string index will be looked for in src/main/resources/templates
		return "home";
    }
}