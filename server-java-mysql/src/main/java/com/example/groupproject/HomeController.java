package com.example.groupproject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	 @RequestMapping("/")
	    public String blog() {
	        return "blog.js";
	    }
	
}
