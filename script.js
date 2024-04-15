var passwordInput = document.getElementById("password");
var strengthDisplay = document.getElementById("strength");
var strengthMeterFill = document.getElementById("strength-meter-fill");

passwordInput.addEventListener("input", function() {
  var password = passwordInput.value;
  
  var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  var mediumRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");

  if (strongRegex.test(password)) {
    strengthDisplay.innerHTML = "Strong Password";
    strengthDisplay.style.color = "#4CAF50";
    strengthMeterFill.style.backgroundColor = "#4CAF50";
    strengthMeterFill.style.width = "100%";
  } else if (mediumRegex.test(password)) {
    strengthDisplay.innerHTML = "Medium Password";
    strengthDisplay.style.color = "#FFA500";
    strengthMeterFill.style.backgroundColor = "#FFA500";
    strengthMeterFill.style.width = "50%";
  } else {
    strengthDisplay.innerHTML = "Weak Password";
    strengthDisplay.style.color = "#FF0000";
    strengthMeterFill.style.backgroundColor = "#FF0000";
    strengthMeterFill.style.width = "25%";
  }
});
