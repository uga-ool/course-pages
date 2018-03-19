// Config Elements
var courseName = "Change Course Name in course_config.js";


// Puts the course name in the footer of each HTML page
var courseTitleElements = document.getElementsByClassName("course-title");

for (var i = 0; i < courseTitleElements.length; i++) {
    courseTitleElements[i].innerHTML = courseName;
}