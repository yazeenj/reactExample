import React, { useRef, useState } from "react";
import MyNavBar from "./MyNavbar";
import StudentList from "./StudentList";

function App() {
  const [studentData, setStudentData] = useState([
    { id: 1, name: "yazeen", age: "24" },
    { id: 2, name: "Jasim", age: "42" },
  ]);
  const inputRef = useRef();
  const inputAge = useRef();

  function handleAddStudent() {
    let name = inputRef.current.value;
    let age = inputAge.current.value;

    setStudentData((prevStudents) => {
      return [...prevStudents, { name: name, age: age }];
    });

    inputRef.current.value = null;
  }

  function removeStudent(studentToRemove) {
    let tempStudents = [...studentData];
    const index = tempStudents.indexOf(studentToRemove);
    tempStudents.splice(index, 1);
    setStudentData(tempStudents);
  }

  return (
    <>
      <MyNavBar />
      <label>Student</label>
      <input ref={inputRef} type="text" />
      <input ref={inputAge} type="text" />

      <button onClick={handleAddStudent}>Add Student</button>
      <StudentList
        studentListData={studentData}
        removeStudent={removeStudent}
      />
    </>
  );
}

export default App;
