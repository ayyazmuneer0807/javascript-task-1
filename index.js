
function submitClick(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const matric_marks = document.getElementById('matric_marks').value;
    const fsc_marks = document.getElementById('fsc_marks').value;
    const entry_marks = document.getElementById('entry_marks').value;
    const result = document.getElementById('aggrigate');
     
    const aggregate = (matric_marks/1100) * 20 + (fsc_marks/1100) * 30 + (entry_marks/100) * 50;
    const formattedAggregate = aggregate.toFixed(2);
    result.textContent = `${name}: Aggregate = ${formattedAggregate}%`;

    if (aggregate >= 60){
        window.alert('You are Eligible for admission')
    }
     else{
        window.alert('You are not Eligible for admission')
    };
    

    const student = {
        studentName: name,
        studentAggregate: formattedAggregate,
    }
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students' ,JSON.stringify(students) );

    window.location.href = "result.html";


    
    



}