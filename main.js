function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function s1(){
  document.getElementById('screen1').style.display = "inline-block";
  document.getElementById('screen2').style.display = "none";
  document.getElementById('screen3').style.display = "none";
  document.getElementById('screen4').style.display = "none";
}

function s2(){
  document.getElementById('screen1').style.display = "none";
  document.getElementById('screen2').style.display = "inline-block";
  document.getElementById('screen3').style.display = "none";
  document.getElementById('screen4').style.display = "none";
}

function s3(){
  document.getElementById('screen1').style.display = "none";
  document.getElementById('screen2').style.display = "none";
  document.getElementById('screen3').style.display = "inline-block";
  document.getElementById('screen4').style.display = "none";
}

function s4(){
  document.getElementById('screen1').style.display = "none";
  document.getElementById('screen2').style.display = "none";
  document.getElementById('screen3').style.display = "none";
  document.getElementById('screen4').style.display = "inline-block";
}

function sub(){
  let a = document.getElementById('name');
  let b = document.getElementById('email');
  let c = document.getElementById('phone');
  let d = document.getElementById('message');
  let e = document.getElementById('status');
  if(a.value == '' || b.value == '' || c.value == ''){
    e.textContent = "Error, please try again!";
  }
  else{
    e.textContent = "Thanks for contacting us";
    a.value = b.value = c.value = d.value = '' ;
  }
}