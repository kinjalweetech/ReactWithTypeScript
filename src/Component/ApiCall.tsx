import axios from "axios";
import { useEffect, useState } from "react";
import "../Component/ApiCall.css";

// Define the type outside the component
interface Users {
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const ApiCall: React.FC = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [text, setText] = useState<string>("");

  // Fetch the users from the API
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      console.log(data);
      setUsers(data.results); // Store the fetched users
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  // Initial fetch when component mounts
  useEffect(() => {
    fetchUsers();
  }, []); // Empty dependency array to call only on mount

  // Filter users based on the input text
  const filteredUsers = users.filter(({ name }) => {
    const fullName = `${name.first} ${name.last}`.toLowerCase();
    return fullName.includes(text.toLowerCase());
  });

  // Optionally log the user found based on the input text
  useEffect(() => {
    if (text) {
      const foundUser = users.find(({ name }) => {
        const fullName = `${name.first} ${name.last}`.toLowerCase();
        return fullName.includes(text.toLowerCase());
      });

      if (foundUser) {
        console.log("Searched User Details:", foundUser);
      }
    }
  }, [text, users]);

  return (
    <>
      <div className="title">
        <h1>Hello React/Typescript</h1>
        <input
          className="input"
          type="text"
          placeholder="Search User"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="button" onClick={fetchUsers}>
          Show the Users
        </button>
        <div className="user-list">
          <ul className="userlist-ul">
            {filteredUsers.map(({ login, name, email, picture }) => (
              <li key={login.uuid}>
                <div>
                  <img
                    src={picture.thumbnail}
                    alt={`${name.first} ${name.last}`}
                  />
                </div>
                <div>
                  Name: {name.first} {name.last}
                </div>
                <div>Email: {email}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ApiCall;
