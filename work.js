function time() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const session = document.getElementById("session");
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const date = new Date().getDate();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = new Date().getDay();
    const currentDay = days[day];
    const months = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];
    const currentMonth = months[month];
  
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("date").innerHTML = date;
    document.getElementById("month").innerHTML = currentMonth;
    document.getElementById("year").innerHTML = year;
    document.getElementById("day").innerHTML = currentDay;
    console.log(currentDay);
  
    if (hours >= 12) {
      session.innerHTML = "PM";
    } else {
      session.innerHTML = "AM";
    }
  }
  setInterval(time, 10);
  