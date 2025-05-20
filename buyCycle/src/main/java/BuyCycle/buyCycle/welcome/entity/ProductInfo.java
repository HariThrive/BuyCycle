package BuyCycle.buyCycle.welcome.entity;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
public class ProductInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "product_name")
    private String productName;
	
	@Column(name ="description")
    private String description;
    
    @ManyToOne
    @JoinColumn(name ="category")
    private Category category;
    
    @ManyToOne
    @JoinColumn(name = "sub_category")
    private String subCategory;
    
    @Column(name = "product_price")
    private Double productPrice;
    
    @OneToOne(mappedBy ="productInfo",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
    private CycleDetails cycleDetails;
    
//    @OneToOne(mappedBy = "productInfo",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
//    private EquipmentDetails equipmentDetails;

}
