const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();

/* ---------------------------- Background Change --------------------------- */

$(".offcanvasImg").each(function () {
  $(this).click(function () {
    var imgSrc = $(this).attr("src");
    localStorage.setItem("currentBg", imgSrc);
    $("body").css({ backgroundImage: `url(${imgSrc})` });
  });
});
$(document).ready(function () {
  var currentBg = localStorage.getItem("currentBg");
  if (currentBg != null) {
    $("body").css({ backgroundImage: `url(${currentBg})` });
  } else {
    $("body").css({
      backgroundImage: "url('images/1.png')",
    });
  }
});
