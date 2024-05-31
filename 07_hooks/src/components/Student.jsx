import React from "react";

function Student({ student }) {
  console.log("student 리렌더링 됨");

  return (
    <div>
      <h5>{student.name}</h5>
      <div>{student.age}</div>
      <div>{student.gender}</div>
    </div>
  );
}

const MemoizedStudent = React.memo(Student);

export default MemoizedStudent;
