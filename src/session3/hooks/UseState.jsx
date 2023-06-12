import React, { useState } from "react";

export default function UseState() {
  const [show, setShow] = useState(false);
  const storageJob = localStorage.getItem("job")

  //parse từ string job trong localStorage ra array 
  const listJob = JSON.parse(storageJob)

  //lấy giá trị input người dùng nhập vào
  const [job, setJob] = useState("");

  //tạo mảng job để render UI
  const [jobs, setJobs] = useState(listJob || []);

  // const getJob = (e) => {
  //   setJob(e.target.value);
  // };

  const handleChange = () => {
    setJobs((prev) => {
      const newJob = [...prev, job]; // spread operator: clone ra 1 mảng job từ người dùng nhập vào 

      localStorage.setItem("job", JSON.stringify(newJob))
      console.log(newJob);
      return newJob;
    }); 
    setJob("")
  };

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && (
        <div style={{ padding: 20 }}>
          <h1>UseState</h1>
          <input value={job} onChange={(e) => setJob(e.target.value)} />
          <button onClick={handleChange}>Add</button>
          {jobs.map((job, index) => (
              <li key={index}>{job}</li>
          ))}
        </div>
      )}
    </>
  );
}
