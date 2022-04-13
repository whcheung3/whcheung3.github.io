// when page is loaded
window.addEventListener("load", function () {
  // update the Current Date and Age in About Me
  updateCurrentDate();
  updateAge();

  // hide other sections when page loaded
  setSectionHidden(true);
  setInputBoxHidden();

  // reveal other sections when user clicks on nav buttons
  document.querySelector("#btn-about").onclick = function () {
    setSectionHidden(false);
  };
  document.querySelector("#btn-education").onclick = function () {
    setSectionHidden(false);
  };
  document.querySelector("#btn-contact").onclick = function () {
    setSectionHidden(false);
  };

  // reveal Hourly Rate input box when user selects Hiring Radio Button in Contact Me Form
  document.querySelector("#hiring").onclick = removeInputBoxHidden;

  // hide Hourly Rate input box when user unselects Hiring Radio Button in Contact Me Form
  document.querySelector("#comment").onclick = setInputBoxHidden;
  document.querySelector("#question").onclick = setInputBoxHidden;

  // back to previos page when user clicks back button
  document.querySelectorAll(".btn-back").forEach(function (back) {
    back.onclick = function () {
      window.history.back();
    };
  });
});

function setSectionHidden(bool) {
  document.querySelectorAll("div").forEach(function (div) {
    if (div.id && div.id != "homepage") {
      document.getElementById(div.id).hidden = bool;
    }
  });
}

function removeInputBoxHidden() {
  document.getElementById("hourlyrate").hidden = false;
  document.getElementById("label-hourlyrate").hidden = false;
}

function setInputBoxHidden() {
  document.getElementById("hourlyrate").hidden = true;
  document.getElementById("label-hourlyrate").hidden = true;
}

function updateCurrentDate() {
  // get the current date value
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  // print in DD/MM/YYYY format
  today = `${dd}/${mm}/${yyyy}`;

  // update the Current Date in About Me
  document.querySelector("#current-date").innerHTML = today;
}

function updateAge() {
  // my DOB is 07/07/1996
  const birthDate = 7;
  const birthMonth = 7;
  const birthYear = 1996;
  var today = new Date();
  var age = today.getFullYear() - birthYear - 1;

  // check if the current date passed my DOB
  if (today.getMonth() + 1 >= birthMonth && today.getDate() >= birthDate)
    age += 1;

  // update the Age in About Me
  document.querySelector("#age").innerHTML = age;
}
