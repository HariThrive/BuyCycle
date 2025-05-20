package BuyCycle.buyCycle.welcome.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import BuyCycle.buyCycle.welcome.vo.productInfoVO;

@Controller
@RequestMapping("/product")
public class WelcomeController {

	 @GetMapping("/buycycle")
	    public String welcome() {
	        System.out.println("Welcome page is being loaded");
//	        return "welcome/index"; 
	        return "error/comingsoon";
	    }
	 
	 @GetMapping("/add")
	    public String addproduct() {
	        System.out.println("Welcome page is being loaded");
	        
//	        return "welcome/addproduct";  // Corrected the folder name
	        return "error/notfound404";
//	        return "error/comingsoon";
	    }


	 @PostMapping("/save")
	 @ResponseBody
	 public void saveProduct(@ModelAttribute productInfoVO formData) {
	     System.out.println("Received Product: " + formData);
	 }


}	
