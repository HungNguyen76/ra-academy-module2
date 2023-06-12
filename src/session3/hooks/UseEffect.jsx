import React, { useState, useEffect } from "react";

//useEffect thực hiện các side effect trong function component
// side effect: call api, listen event, update DOM

//1.useEffect(callback)
//Gọi callback mỗi khi component re-render
//Gọi callback sau khi thêm component vào DOM

//2.useEffect(callback, [])
//Chỉ gọi callback 1 lần sau khi component mounted

//3.useEffect(callback, [deps])
//Callback sẽ được gọi lại mõi khi deps thay đổi

export default function UseEffect() {
  const [text, setText] = useState("");
  const [job, setJob] = useState([])

  useEffect(() => {
    // console.log("mounted")
    // document.title = text

    //call API để lấy danh sách posts
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => setJob(data))

    return(() => console.log("unmounted"))
  }, [])
  return (
      <div>
        {console.log("render")}
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {job.map((item, index) => <li key={index}>{item.body}</li> )}
    </div>
  );
}
