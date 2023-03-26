let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

let calendar = document.getElementById("calendar");
let monthTitle = document.getElementById("month");
let calendarBody = document.getElementById("calendar-body");
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

prevButton.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  displayCalendar();
});

nextButton.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  displayCalendar();
});

function displayCalendar() {
  monthTitle.innerHTML = months[currentMonth] + " " + currentYear;
  let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  calendarBody.innerHTML = "";

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < new Date(currentYear, currentMonth, 1).getDay()) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(date);
        if (date === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
          cell.classList.add("today");
        }
        cell.appendChild(cellText);
        row.appendChild(cell);
        date++;
      }
    }

    calendarBody.appendChild(row);
  }

  let currentDateColor = document.querySelector(`.today`);
  if (currentDateColor !== null) {
    currentDateColor.style.backgroundColor = "lightblue";
  }
}

displayCalendar();

