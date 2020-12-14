import Student from "./Student";

function StudentList({ studentListData, removeStudent }) {
  console.log(studentListData);
  return studentListData.map(function (student) {
    return (
      <div key={student.name}>
        <Student
          style={{ padding: "5px", backgroundColor: "pink" }}
          studentData={student}
          removeStudent={removeStudent}
        />
      </div>
    );
  });
}

export default StudentList;
