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

window.addEventListener("DOMContentLoaded", function () {

  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.style.display = flex;
    status.style.visibility = visible;
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.style.display = flex;
    status.style.visibility = visible;
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}