function ajaxLoad(id, buttonType, actionName) {
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
							'<input class="form-control custom-input" id="tenderId" name="purchaseOrderDetails.tender" placeholder="">' +
							'<label>Item Name &nbsp;<font color="red">*</font></label>' +
						'</div>' +
					'</div>' +
				
					'<div class="col-sm-12 col-md-3 col-lg-2 col-xl-3">' +
						'<div class="form-group custom-form-group">' +
							'<input class="form-control custom-input" id="tenderId" name="purchaseOrderDetails.tender" placeholder="">' +
							'<label>Description &nbsp;<font color="red">*</font></label>' +
						'</div>' +
					'</div>' +
			
					'<div class="col-sm-12 col-md-3 col-lg-2 col-xl-2 ">' +
						'<div class="form-group custom-form-group">' +
							'<select class="form-select  custom-select custom-input" data-width="100%" data-live-search="true" title="Select Item"' +
								' name="purchaseItemDetailsVOList[0].itemSetup.idEnc" id="itemId0" onchange="catogery(this)" >' +
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
								' name="purchaseItemDetailsVOList[0].itemSetup.idEnc" id="itemId0" onchange="populateItemGstRate(this)" >' +
									' <option value="0">---Select Item---</option> itemOptions' +
									'  <option value="1">---cycle---</option> itemOptions' +
							' </select>' +
							'<label>sub-catogery <font color="red">*</font></label>  ' +
						'</div>' +
					'</div>' +
				'</div>' +
					'<div class="col-sm-12 col-md-3 col-lg-2 col-xl-3">' +
						'<div class="form-group custom-form-group">' +
							'<input class="form-control custom-input" id="tenderId" name="purchaseOrderDetails.tender" placeholder="">' +
							'<label>sale price &nbsp;<font color="red">*</font></label>' +
						'</div>' +
					'</div>' +
				
			'</div>'+
		'<div class="card mt-2 " id ="cycle" style="display: none;">'+
		'</div>'+
		'<div class="card mt-2 " id ="equipment" style="display: none;">'+
		'</div>'+
		
		
		
	'</form>';
	
var cycle = `` +
  `<div class="row">` +
  
   	 `<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">` +
	   	 `<div class="form-group custom-form-group">` +
       		'<select class="form-select  custom-select custom-input" data-width="100%" data-live-search="true" title="Select material"  id="material">' +
          		`<option value="0">---Select Material---</option>` +
          		`<option value="1">Steel</option>` +
         		 `<option value="2">Alloy</option>` +
         		 `<option value="3">Carbon Fiber</option>` +
       		 `</select>` +
        	`<label>Cycle material<font color="red">*</font></label>`+
		`</div>` +
    `</div>` +
    
    `<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">` +
	   	 `<div class="form-group custom-form-group">` +
       		'<select class="form-select  custom-select custom-input" data-width="100%" data-live-search="true" title="Select break"  id="break">' +
          		`<option value="0">---Select Break Type---</option>` +
          		`<option value="1">Disc</option>` +
         		 `<option value="2">Rim</option>` +
         		 `<option value="3">Drum</option>` +
       		 `</select>` +
        	`<label>Cycle Break<font color="red">*</font></label>`+
		`</div>` +
    `</div>` +
    
      `<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">` +
	   	 `<div class="form-group custom-form-group">` +
       		'<select class="form-select  custom-select custom-input" data-width="100%" data-live-search="true" title="Select Tyre Type"  id="TyreType">' +
          		`<option value="0">---Select Tyre Type---</option>` +
          		`<option value="1">Tubeless</option>` +
         		 `<option value="2">Tube</option>` +
         		 `<option value="3">Solid Rubber</option>`+
       		 `</select>` +
        	`<label>Tyre Type<font color="red">*</font></label>`+
		`</div>` +
    `</div>` +
    
     `<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">` +
	   	 `<div class="form-group custom-form-group">` +
       		'<select class="form-select  custom-select custom-input" data-width="100%" data-live-search="true" title="Select Gear Type"  id="gearType">' +
          		`<option value="0">---Select Gear Type---</option>` +
          		`<option value="1">Single-speed</option>` +
         		 `<option value="2">Multi-speed</option>` +
       		 `</select>` +
        	`<label>Gear Type<font color="red">*</font></label>`+
		`</div>` +
    `</div>` +
    
      `<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">` +
	   	 `<div class="form-group custom-form-group">` +
       		'<select class="form-select  custom-select custom-input" data-width="100%" data-live-search="true" title="Select Gear Type"  id="frameSize">' +
          		`<option value="0">---Select Frame Size---</option>` +
          		`<option value="1">17</option>` +
         		 `<option value="2">19</option>` +
         		 `<option value="3">21</option>` +
       		 `</select>` +
        	`<label>Frame Size<font color="red">*</font></label>`+
		`</div>` +
    `</div>` +
    
     `<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">` +
	   	 `<div class="form-group custom-form-group">` +
       		'<select class="form-select  custom-select custom-input" data-width="100%" data-live-search="true" title="Select Gear Type"  id="Suspension">' +
          		`<option value="0">---Select Suspension---</option>` +
          		`<option value="1">None</option>` +
         		 `<option value="2">Front</option>` +
         		 `<option value="3">FUll</option>` +
       		 `</select>` +
        	`<label>Suspension<font color="red">*</font></label>`+
		`</div>` +
    `</div>` +
    
'<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
  '<div class="position-relative">' +
    '<input type="text" placeholder="Color (e.g. red or #00ff00)" ' +
           'class="form-control ps-5" oninput="updateSiblingColor(this)">' +

    '<input type="color" value="#000000" ' +
           'class="position-absolute top-50 start-0 border-0" ' +
           'style="width: 2rem; height: 2rem; pointer-events: none; transform: translateY(-52%);" ' +
           'tabindex="-1" disabled>' +
  '</div>' +
'</div>' +

'<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
  '<div class="position-relative">' +
    '<input type="text" placeholder="Color (e.g. red or #00ff00)" ' +
           'class="form-control ps-5" oninput="updateSiblingColor(this)">' +

    '<input type="color" value="#000000" ' +
           'class="position-absolute top-50 start-0 border-0" ' +
           'style="width: 2rem; height: 2rem; pointer-events: none; transform: translateY(-52%);" ' +
           'tabindex="-1" disabled>' +
  '</div>' +
'</div>'+

  '<div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">' +
   '<label>Upload Image<font color="red">*</font></label>' +
	'<div class="form-group custom-form-group">' +
	 
    '<input class="form-control" type="file" id="uploadfileId0" name="voucherUploadsList[0].fileName" onchange="validateFile(this)">' +
    '</div>'+
    
  '</div>'+
  
  '</div>'+
    '</div>'+
``;

						
var equipment = ""+
'<div class="form-group custom-form-group">' +
							'<input class="form-control custom-input" id="tenderId" name="purchaseOrderDetails.tender" placeholder="">' +
							'<label>none &nbsp;<font color="red">*</font></label>' +
						'</div>' ;

const saveTemplate = ''
'<button type="button" id="saveButton" class="btn btn-md btn-success fw-bolder fs-7">Save' +
	'			</button>';

 
function catogery(selectElement) {
	debugger
    let selectedValue = $(selectElement).val();
    if (selectedValue === "1") {  
        $("#cycle").show().html(cycle);
          $("#buttonSpace").show().html(saveTemplate);
        $("#equipment").hide();
    }
     else if(selectedValue === "2") {
        $("#cycle").hide();
        $("#equipment").show().html(equipment);
    }
    else{
	 $("#cycle").hide();
	  $("#none").hide();
}
}

    window.addEventListener('DOMContentLoaded', event => {
  ajaxLoad('', '', '')
});
   
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

  // Find the color input inside the same wrapper
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



