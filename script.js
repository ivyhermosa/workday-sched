// updates the time element in the header

$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

function setTime() {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}

setInterval(setTime, 1000);

var dateContainer = document.querySelector(".container");

var businessHrs = [
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",

  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
];

for (i = 0; i < businessHrs.length; i++) {
  console.log(businessHrs[i]);

  let div = document.createElement("div");
  div.classList.add("row");
  dateContainer.append(div);

  let p = document.createElement("p");
  p.classList.add("hour");
  p.textContent = businessHrs[i];
  div.append(p);

  let txtArea = document.createElement("textarea");
  txtArea.setAttribute("id", i + 9);
  txtArea.classList.add("time-block", "description", "col-sm");
  div.append(txtArea);

  let btn = document.createElement("button");
  btn.setAttribute("id", i + 9);
  btn.classList.add("saveBtn");
  btn.textContent = "Save";
  div.append(btn);
}

var currentHour = moment().hours();

setColor();
function setColor() {
  let currentTimes = $("textarea");

  currentTimes.each(function () {
    let hourBlock = $(this).attr("id");
    console.log(hourBlock);

    if (currentHour > hourBlock) {
      $(this).addClass("past");
    }
    if (currentHour == hourBlock) {
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    if (currentHour < hourBlock) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

$(".saveBtn").on("click", function () {
  let index = $(this).attr("id");
  let task = $(this).siblings(".time-block").val();
  localStorage.setItem(index, task)
  showTask()
});

showTask()
function showTask() {
    for(var i = 9; i < 18; i++) {
        let task = localStorage.getItem(i)
        $('#' + i).text(task)
    }
}