package com.example.groupproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {

		@GetMapping(value="/demo")
		public String getMethodName(){
			return "Finally?";
		}
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
