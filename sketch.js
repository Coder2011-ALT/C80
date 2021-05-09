var students = [];

function submit() {
    for (var j = 1; j <= 4; j++) {
        var name_of_students = document.getElementById("student_" + j).value;
        console.log(name_of_students);
        students.push(name_of_students);
    }
    console.log(students);
    var studentsLength = students.length;
    console.log(studentsLength);
    for (var k = 0; k < studentsLength; k++){
        students.push("<h4> Name - " + students[k] + "</h4>");
        console.log(studentsLength);
    }
    console.log(students);
    document.getElementById("display_name_with_commas").innerHTML = students;
    var removeCommas = students.join(" ");
    console.log(removeCommas);
    document.getElementById("display_name_without_commas").innerHTML = removeCommas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() {
    students.sort();
    console.log(students);
    var studentsLength = students.length;
    console.log(students);
    for (var k = 0; k < studentsLength; k++) {
        students.push("<h4> Name - " + students[k] + "</h4>");
        console.log(studentsLength);
    }
    document.getElementById("display_name_with_commas").innerHTML = students;
    var removeCommas = students.join(" ");
    console.log(removeCommas);
    document.getElementById("display_name_without_commas").innerHTML = removeCommas;
}