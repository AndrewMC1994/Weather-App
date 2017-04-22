(function() {
    'use strict';

    function getDate() {
      var date = new Date();
      var weekday = date.getDay();
      var month = date.getMonth();
      var day = date.getDate();
      var year = date.getFullYear();
      var hour = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();

      if (hour < 10) hour = "0" + hour;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      var monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

      var weekdayNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

      var monthColors = ["#1E90FF", "#FF69B4", "#00FFFF", "#7CFC00", "#00CED1", "#FF1493", "#00008B", "#FF7F50", "#C71585", "#FF4500", "#FFD700", "#800000"]

    var ampm = " PM ";

    if (hour < 12) ampm = " AM ";

    if (hour > 12) hour -= 12;

    var showDate = weekdayNames[weekday] + " - " + monthNames[month] + " " + day + " - " + hour + ":" + minutes + ampm;

    var color = monthColors[month];

    document.getElementById('date').innerHTML = showDate;
        
    document.getElementById("date").style.fontFamily = "Century Gothic,sans-serif";
        
    document.getElementById("date").style.fontWeight = "600";
    
    requestAnimationFrame(getDate);
  }

  getDate();

}());