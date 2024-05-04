function updateTime() {
  var now = new Date();
  var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  var months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  var day = days[now.getDay()];
  var date = now.getDate();
  var month = months[now.getMonth()];
  var year = now.getFullYear();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var timeString =
    addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
  var dateString = day + ", " + date + " " + month + " " + year;

  document.getElementById("time").innerText = timeString;
  document.getElementById("date").innerText = dateString;

  setTimeout(updateTime, 1000);
}

function addZero(num) {
  return (num < 10 ? "0" : "") + num;
}

updateTime();
