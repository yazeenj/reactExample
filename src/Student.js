function Student({ studentData, removeStudent }) {
  function handleStudentClick(e) {
    removeStudent(studentData);
  }
  return (
    <>
      <div
        style={{
          marginBottom: "10px",
          padding: "5px",
          backgroundColor: "pink",
        }}
      >
        <p>{studentData.name}</p>
        <p>age:{studentData.age}</p>
        <button onClick={handleStudentClick}>Remove</button>
      </div>
    </>
  );
}

export default Student;
