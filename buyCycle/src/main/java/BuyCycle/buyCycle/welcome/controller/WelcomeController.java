package BuyCycle.buyCycle.welcome.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WelcomeController {

	 @GetMapping("/")
	    public String welcome() {
	        System.out.println("Welcome page is being loaded");
	        return "welcome/index"; 
	    }
	 
	 @GetMapping("/product/add")
	    public String addproduct() {
	        System.out.println("Welcome page is being loaded");
	        return "error/notfound404";  // Corrected the folder name

	    }
	
}	
