package BuyCycle.buyCycle.welcome.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name ="category_name")
	private String categoryName;
	
	@OneToMany(mappedBy = "Category")
	private SubCategory subCategory;
}
