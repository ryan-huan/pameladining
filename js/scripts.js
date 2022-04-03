
function showDescription(descript){
    $("#description").html("Description: " + descript); 
}
function hideDescription(){
    $("#description").hide(); 
}

function validate(){

   var txtDob = $("#txtDate").val(); 
   var d = new Date(txtDob);
   if(d>= new Date()){
       alert("Availability date is not valid. Date has to be before today. ");
       return false;  
   }
   var txtPhone = $("#phone").val(); 
   if(txtPhone.length != 10 || isNaN(txtPhone)){
       alert("Phone number is not valid. ")
       return false; 
   }
   var txtZip = $("#zip").val();
   if(txtZip.length != 5 || isNaN(txtZip)){
       alert("Zip code is not valid.")
       return false; 
   }
   
}

