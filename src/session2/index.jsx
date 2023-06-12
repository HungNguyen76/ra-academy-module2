import React from "react";

export default function Class() {
  return (
    <div style={{ fontSize: 20 }}>
      <h1>Class Component</h1>
      <ol>
        <li>Hiểu khái niệm Class là gì? Constructor là gì?</li>
        <li>
          Hiểu props, state để làm gì? Cách truyền dữ liệu từ comp cha sang con
          và ngược lại?
          <ul>
            <li>
              state khai báo local state cho 1 component - object, string,
              number
            </li>
            <li>cú pháp: this.state</li>
            <li>props: truyền dữ liệu từ comp cha sang con</li>
            <li>comp con nhận dữ liệu = this.propsName</li>
          </ul>
        </li>
        <li>
          Hiểu về lifecycle và các methods tương ứng trong lifecyle của Class
          Component?
          <ul>
            <li>constructor - khi component mounted</li>
            <li>component will mount</li>
            <li>component did mount - call api</li>
            <li>component did update</li>
            <li>component will unmount</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
