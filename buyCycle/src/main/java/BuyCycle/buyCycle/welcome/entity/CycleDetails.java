package BuyCycle.buyCycle.welcome.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class CycleDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "material")
	private String material;
	@Column(name = "breaks")
	private String breaks;
	@Column(name = "TyreType")
	private String TyreType;
	@Column(name = "gearType")
	private String gearType;
	@Column(name = "frameSize")
	private String frameSize;
	@Column(name = "suspension")
	private String Suspension;
}
