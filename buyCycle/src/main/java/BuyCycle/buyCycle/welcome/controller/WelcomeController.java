package BuyCycle.buyCycle.welcome.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WelcomeController {

	 @GetMapping("/buycycle")
	    public String welcome() {
	        System.out.println("Welcome page is being loaded");
//	        return "welcome/index"; 
	        return "error/comingsoon";
	    }
	 
	 @GetMapping("/product/add")
	    public String addproduct() {
	        System.out.println("Welcome page is being loaded");
	        
	        return "welcome/addproduct";  // Corrected the folder name
//	        return "error/notfound404";
//	        return "error/comingsoon";
	    }
	
}	
