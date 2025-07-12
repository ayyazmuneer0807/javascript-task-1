const tableBody = document.getElementById('studentsTableBody');
const students = JSON.parse(localStorage.getItem('students')) || [];
if(students.length > 0){


students.forEach(student => {
    const row = document.createElement('tr');
    const  studentName= document.createElement('td');
    studentName.textContent = student.studentName;
    row.appendChild(studentName);

     const  studentAggregate= document.createElement('td');
    studentAggregate.textContent = student.studentAggregate;
    row.appendChild(studentAggregate);

    tableBody.appendChild(row);

});
}