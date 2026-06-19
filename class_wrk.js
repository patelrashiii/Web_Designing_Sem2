function checkAttendance() {
    let total = parseInt(document.getElementById("totalClasses").value);
    let attended = parseInt(document.getElementById("attendedClasses").value);

    if (total <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter a valid number of total classes.";
        return;
    }

    let percentage = (attended / total) * 100;

    let status;
    if (percentage >= 75) {
        status = "Eligible for Exam";
    } else {
        status = "Not Eligible for Exam";
    }

    document.getElementById("result").innerHTML =
        "<h3>Attendance: " + percentage.toFixed(2) + "%</h3>" +
        "<h3>Status: " + status + "</h3>";
}