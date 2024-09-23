import React, { useState } from "react";
import "../Component/Hello.css";

const Hello = () => {
  const Users = [
    { name: "kirtan", age: 20, designation: "graphicDesigner" },
    { name: "Mira", age: 22, designation: "webDevloper" },
    { name: "Shweta", age: 29, designation: "IOS" },
    { name: "Krishna", age: 28, designation: "graphicDesigner" },
    { name: "Sanket", age: 20, designation: "graphicDesigner" },
    { name: "Pradip", age: 30, designation: "Shopify" },
  ];

  const [text, setText] = useState<string>("");
  const [userList, setUserList] = useState(Users);

  const handleOnClick = () => {
    const findUser = text
      ? Users.filter((e) => e.name.toLowerCase() === text.toLowerCase())
      : Users;
      console.log("finduser",findUser);

    setUserList(findUser);
  };

  return (
    <>
      <div className="header">
        <h1>Hello React With TypeScript</h1>
        <div>
          <h1>Find User</h1>
        </div>
        <div className="input">
          <input
            className="input1"
            type="text"
            placeholder="Search User"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="button" onClick={handleOnClick}>
            Search
          </button>
        </div>
        {/* Show filtered users */}
        <div className="body">
        {userList.length > 0 ? (
          userList.map((user) => (
            <div className="userlist" key={user.name}>
              <h3>Name: {user.name}</h3>
              <p>Age: {user.age}</p>
              <p>Designation: {user.designation}</p>
            </div>
          ))
        ) : (
          <p>No users found</p> // Show a message if no users match the search
        )}
      </div>
    </div>
    </>
  );
};

export default Hello;


