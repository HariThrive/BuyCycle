function ajaxLoad(id, buttonType, actionName) {
    console.log("ajaxLoad function called with:", id, buttonType, actionName);
    debugger
    const inputTaker = document.querySelector('#inputTaker');
    
    if (!id || id == 0) {
        console.log("No valid ID provided, rendering form...");
        inputTaker.innerHTML = addproduct;
    }

  $.ajax({
    url: '/product/add',  // Use an existing mapped URL
    type: 'GET',
    data: { id: id, buttonType: buttonType, actionName: actionName },
    success: function(response) {
        console.log("AJAX Success:", response);
        document.querySelector('#inputTaker').innerHTML = response;
    },
    error: function(xhr, status, error) {
        console.error("AJAX Error:", status, error);
    }
});

}


var addproduct = '' +
    '<form id="newForm" enctype="multipart/form-data">' +
        '<div class="form-group">' +
            '<label for="productName">Product Name:</label>' +
            '<input type="text" id="productName" name="productName" placeholder="Enter product name">' +
        '</div>' +

        '<div class="col-sm-12 col-md-3 col-lg-2 col-xl-3 pt-3">' +
            '<div class="form-group custom-form-group">' +
                '<input class="form-control custom-input" id="purchaseOrderId" ' +
                'placeholder="" name="purchaseOrderDetails.poNumber">' +
                '<label>Purchase Order Number &nbsp;<font color="red">*</font></label>' +
            '</div>' +
            
            
        '</div>' +
    '</form>';
    
    document.getElementById("someButton").addEventListener("click", function() {
    ajaxLoad(1, 'edit', 'update');
});


