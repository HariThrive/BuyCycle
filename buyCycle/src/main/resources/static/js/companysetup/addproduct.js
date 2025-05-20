window.addEventListener('DOMContentLoaded', event => {
	asioxLoad('', '', '')
});

function asioxLoad(id, buttonType, actionName) {
    console.log("ajaxLoad function called with:", id, buttonType, actionName);
    debugger
    const inputTaker = document.querySelector('#inputTaker');
    
    if (!id || id == 0) {
        console.log("No valid ID provided, rendering form...");
        inputTaker.innerHTML = addproduct;
    }

}


var addproduct =
	'<form id="newForm" enctype="multipart/form-data">' +
	
			'<div class="row">' +
				'<div class="card mb-5">'+
					'<h2 style="text-align: center;font-weight:300%;font-size:40px;">Add New Product</h2>' +
				'</div>'+
			
			'<div class="card" >'+
				'<div class="row">' +
					'<div class="col-sm-12 col-md-3 col-lg-2 col-xl-3">' +
						'<div class="form-group custom-form-group">' +
							'<input class="form-control custom-input" id="productName" name="productName" placeholder="">' +
							'<label>Product Name &nbsp;<font color="red">*</font></label>' +
						'</div>' +
					'</div>' +
				
					'<div class="col-sm-12 col-md-3 col-lg-2 col-xl-3">' +
						'<div class="form-group custom-form-group">' +
							'<input class="form-control custom-input" id="description" name="description" placeholder="">' +
							'<label>Description &nbsp;<font color="red">*</font></label>' +
						'</div>' +
					'</div>' +
			
					'<div class="col-sm-12 col-md-3 col-lg-2 col-xl-2 ">' +
						'<div class="form-group custom-form-group">' +
							'<select class="form-select  custom-select custom-input" data-width="100%" data-live-search="true" title="Select Item"' +
								' name="catogery" id="catogeryId" onchange="catogerys(this)" >' +
									'<option value="0">---Select Item---</option> ' +
									'<option value="1">---cycle---</option> ' +
									'<option value="2">---Equipment---</option> ' +
							' </select>' +	
							' <label>catogery <font color="red">*</font></label>  ' +
						'</div>' +
					'</div>' +
				
					'<div class="col-sm-12 col-md-3 col-lg-2 col-xl-2">' +
						'<div class="form-group custom-form-group">' +
							'<select class="form-select  custom-select custom-input" data-width="100%" data-live-search="true" title="Select Item"' +
								' name="subCatogery" id="subCatogery" onchange="populateItemGstRate(this)" >' +
									' <option value="0">---Select Item---</option> itemOptions' +
									'  <option value="1">---cycle---</option> itemOptions' +
							' </select>' +
							'<label>sub-catogery <font color="red">*</font></label>  ' +
						'</div>' +
					'</div>' +
				'</div>' +
					'<div class="col-sm-12 col-md-3 col-lg-2 col-xl-3">' +
						'<div class="form-group custom-form-group">' +
							'<input class="form-control custom-input" id="productPrice" name="productPrice" placeholder="">' +
							'<label>sale price &nbsp;<font color="red">*</font></label>' +
						'</div>' +
					'</div>' +
				
			'</div>'+
		'<div class="card mt-2 " id ="cycle" style="display: none;">'+
		'</div>'+
		'<div class="card mt-2 " id ="equipment" style="display: none;">'+
		'</div>'+
		
		  
			'<div class="card mt-2 " id ="buttonSpace" style="display: none;">'+
			'</div>'+
		
		
		
	'</form>';
	
var cycleTemplate = `` +
  `<div class="row">` +
  
   	 `<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">` +
	   	 `<div class="form-group custom-form-group">` +
       		'<select class="form-select  custom-select custom-input"  name="material" data-width="100%" data-live-search="true" title="Select material"  id="material">' +
          		`<option value="0">---Select Material---</option>` +
          		`<option value="steel">Steel</option>` +
         		 `<option value="Alloy">Alloy</option>` +
         		 `<option value="Carbon">Carbon Fiber</option>` +
       		 `</select>` +
        	`<label>Cycle material<font color="red">*</font></label>`+
		`</div>` +
    `</div>` +
    
    `<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">` +
	   	 `<div class="form-group custom-form-group">` +
       		'<select class="form-select  custom-select custom-input" name="break" data-width="100%" data-live-search="true" title="Select break"  id="breaks">' +
          		`<option value="0">---Select Break Type---</option>` +
          		`<option value="Disc">Disc</option>` +
         		 `<option value="Rim">Rim</option>` +
         		 `<option value="Drum">Drum</option>` +
       		 `</select>` +
        	`<label>Cycle Break<font color="red">*</font></label>`+
		`</div>` +
    `</div>` +
    
      `<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">` +
	   	 `<div class="form-group custom-form-group">` +
       		'<select class="form-select  custom-select custom-input" name ="Tyre" data-width="100%" data-live-search="true" title="Select Tyre Type"  id="TyreType">' +
          		`<option value="0">---Select Tyre Type---</option>` +
          		`<option value="Tubeless">Tubeless</option>` +
         		 `<option value="Tube">Tube</option>` +
         		 `<option value="Rubber">Solid Rubber</option>`+
       		 `</select>` +
        	`<label>Tyre Type<font color="red">*</font></label>`+
		`</div>` +
    `</div>` +
    
     `<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">` +
	   	 `<div class="form-group custom-form-group">` +
       		'<select class="form-select  custom-select custom-input" name="gear" data-width="100%" data-live-search="true" title="Select Gear Type"  id="gearType">' +
          		`<option value="0">---Select Gear Type---</option>` +
          		`<option value="Single">Single-speed</option>` +
         		 `<option value="Multi">Multi-speed</option>` +
       		 `</select>` +
        	`<label>Gear Type<font color="red">*</font></label>`+
		`</div>` +
    `</div>` +
    
      `<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">` +
	   	 `<div class="form-group custom-form-group">` +
       		'<select class="form-select  custom-select custom-input" name="frame"data-width="100%" data-live-search="true" title="Select Gear Type"  id="frameSize">' +
          		`<option value="0">---Select Frame Size---</option>` +
          		`<option value="17">17</option>` +
         		 `<option value="19">19</option>` +
         		 `<option value="21">21</option>` +
       		 `</select>` +
        	`<label>Frame Size<font color="red">*</font></label>`+
		`</div>` +
    `</div>` +
    
     `<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">` +
	   	 `<div class="form-group custom-form-group">` +
       		'<select class="form-select  custom-select custom-input" name="suspension" data-width="100%" data-live-search="true" title="Select Gear Type"  id="Suspension">' +
          		`<option value="0">---Select Suspension---</option>` +
          		`<option value="None">None</option>` +
         		 `<option value="Front">Front</option>` +
         		 `<option value="FUll">FUll</option>` +
       		 `</select>` +
        	`<label>Suspension<font color="red">*</font></label>`+
		`</div>` +
    `</div>` +
    
//'<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
//  '<div class="position-relative">' +
//    '<input type="text" placeholder="Color (e.g. red or #00ff00)" ' +
//           'class="form-control ps-5" oninput="updateSiblingColor(this)">' +
//
//    '<input type="color" value="#000000" ' +
//           'class="position-absolute top-50 start-0 border-0" ' +
//           'style="width: 2rem; height: 2rem; pointer-events: none; transform: translateY(-52%);" ' +
//           'tabindex="-1" disabled>' +
//  '</div>' +
//'</div>' +
//
//'<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
//  '<div class="position-relative">' +
//    '<input type="text" placeholder="Color (e.g. red or #00ff00)" ' +
//           'class="form-control ps-5" oninput="updateSiblingColor(this)">' +
//
//    '<input type="color" value="#000000" ' +
//           'class="position-absolute top-50 start-0 border-0" ' +
//           'style="width: 2rem; height: 2rem; pointer-events: none; transform: translateY(-52%);" ' +
//           'tabindex="-1" disabled>' +
//  '</div>' +
//'</div>'+

//  '<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
//   '<label>Upload Image<font color="red">*</font></label>' +
//	'<div class="form-group custom-form-group">' +
//	 
//    '<input class="form-control" type="file" id="uploadfileId0" name="voucherUploadsList[0].fileName" onchange="validateFile(this)">' +
//    '</div>'+
//    
//  '</div>'+
  
  '</div>'+
    '</div>'+
``;

						
var equipmentTemplate = ""+
'<div class="form-group custom-form-group">' +
							'<input class="form-control custom-input" id="equipment" name="none" placeholder="">' +
							'<label>none &nbsp;<font color="red">*</font></label>' +
						'</div>' ;

const saveTemplate = `
    <div class="row  justify-content-center">
            <div class="col-sm-12 col-md-3 col-lg-2 col-xl-2">
                <button id="saveButton" type="button" class="btn btn-md btn-success fw-bold" style="font-size: 1.5rem; padding: 0.25rem 0.5rem;">Save</button>
            </div>
    </div>
`;




function catogerys(selectElement) {
	debugger
	let selectedValue = selectElement.value;
	if (selectedValue === "1") {
		document.getElementById('cycle').style.display = "block";
		document.getElementById('cycle').innerHTML = cycleTemplate;
		
		document.getElementById('buttonSpace').style.display = 'block';
		document.getElementById('buttonSpace').innerHTML = saveTemplate;
		
		document.getElementById('equipment').style.display ="none;"
		
	}
	else if (selectedValue === "2") {
		console.log(axios);

		document.getElementById('cycle').style.display = 'none';
		
		document.getElementById('equipment').style.display ='block';
		document.getElementById('equipment').innerHTML = equipmentTemplate;
		
		document.getElementById("buttonSpace").style.display = 'block';
		document.getElementById("buttonSpace").innerHTML = saveTemplate;
	}
	else {
		$("#cycle").hide();
		$("#none").hide();
	}
}


   
  function addColorPicker() {
    const colorGroup = document.getElementById("colorPickerGroup");
    if (colorGroup) {
      const newPicker = document.createElement("input");
      newPicker.type = "color";
      newPicker.name = "cycle.colors[]";
      newPicker.value = "#000000";
	  newPicker.className = "form-control form-control-color me-2 mb-2";
      newPicker.title = "cycle color";
      colorGroup.appendChild(newPicker);
    } else {
      console.error("colorPickerGroup not found!");
    }
  }
function updateSiblingColor(textInput) {
  const hex = getHexColor(textInput.value);
  if (!hex) return;

  const colorInput = textInput.parentElement.querySelector('input[type="color"]');
  if (colorInput) {
    colorInput.value = hex;
  }
}

function getHexColor(color) {
  const dummy = document.createElement("div");
  dummy.style.color = color;
  document.body.appendChild(dummy);

  const computed = getComputedStyle(dummy).color;
  document.body.removeChild(dummy);

  const match = computed.match(/^rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)$/);
  if (!match) return null;

  const r = parseInt(match[1]).toString(16).padStart(2, '0');
  const g = parseInt(match[2]).toString(16).padStart(2, '0');
  const b = parseInt(match[3]).toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
}


 document.querySelector('#inputTaker').addEventListener('click', function(event) {
    if (event.target && event.target.id === 'saveButton') {
        handleSaveButtonClick();
    }
});

function handleSaveButtonClick() {
    const form = document.getElementById('newForm');
    const formData = new FormData(form);

    axios.post('/product/save', formData)
        .then(function (response) {
            console.log('Product saved successfully:', response);
        })
        .catch(function (error) {
            console.error('Error details:', error.response || error);
        });
}






