
const first_name = document.getElementById("first_name")
const last_name = document.getElementById("last_name")
const form = document.getElementById("form")
var disp=document.getElementById("banner");

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  checkInput();
});
function setBorderRed(bor) {

    document.getElementById(bor).style.border = " solid 1px #FF0000"
    //console.log("este null "); 
}


function  checkInput(){
  //VALIDATES RADIO GRUP
  var radios = document.getElementsByName("gender");
  var formValid = false;

  var i = 0;
  while (!formValid && i < radios.length) {
      if (radios[i].checked){ formValid = true;
      console.log(radios[i].value)}
      i++;        
  }

  if (!formValid) {
    document.getElementById("eText").innerHTML="Please select one"
  };
  //VALIDATES INPUTS --
  if (first_name.value === '' || first_name.value == null) {
    document.getElementById('subhead1').innerHTML='Fist name is required!'
    setBorderRed("first_name");
  }
  
    else if (first_name.value.length <6 || first_name.value.length >20 ){
    document.getElementById("subhead1").innerHTML="Please enter  a name between 6 and20 leters"
    setBorderRed("first_name");
  }
  else{
    console.log(first_name.value);
    if (last_name.value === '' || last_name.value == null) {
      document.getElementById('subhead2').innerHTML='Last name is required!';
      setBorderRed("last_name");
    }
    else{
      console.log(last_name.value);
      document.getElementById('banner').style.display='flex';
    
    }
  }
  
  
}