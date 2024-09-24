// 1......create a simple {FUNCTIONAL} component

import { useState } from "react";

// import { useState } from "react"

// const BasicTask: React.FC = () => {
//     return (
//         <>
//             <h1>Hello React/TypeScript</h1>
//         </>
//     )
// }
// export default BasicTask;

// 2......Type {Props }in a Component

// interface UserProps {
//     name?:string  ,//optional props..if you not pass props then use this method
//     age?:number,//optional value e jo props pass karti vakhate koi default value pass n kare to pan output aape
// }

// const BasicTask: React.FC<UserProps> = ({name = "kinjal", age = 33}) => {
//     return (
//         <>
//         <div>
//             <h1>name: {name}</h1>
//             <h1>age: {age}</h1>
//         </div>
//         </>
//     )
// }
// export default BasicTask;

// 3......Use {useState} with TypeScript
// import React, { useState } from "react";

// const BasicTask: React.FC = () => {
//   const [count, setCount] = useState<number>(0);

//   // Determine the text color based on the count value
//   const getTextColor = (): string => {
//     if (count > 0) {
//       return "green";
//     } else if (count < 0) {
//       return "red";
//     } else {
//       return "black";
//     }
//   };

//   // Determine the background color based on the count value
//   const getBackgroundColor = (): string => {
//     if (count > 0) {
//       return "lightgreen";
//     } else if (count < 0) {
//       return "lightcoral";
//     } else {
//       return "lightgray";
//     }
//   };

//   return (
//     <div style={{ backgroundColor: getBackgroundColor(), padding: "20px", borderRadius: "5px" }}>
//       <p style={{ color: getTextColor() }}>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// };

// export default BasicTask;

//4....Type Event Handlers

// const BasicTask: React.FC = () => {
//     const [text, setText] = useState<string>("")

//     const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>) => {
//         setText(e.target.value)
//     }
//     return(
//         <div>
//             <input type="text" value={text} onChange={handleInputChange}/>
//             <h1>name: {text}</h1>
//         </div>

//     )
// }
// export default BasicTask;

//5.... Fetch API Data with axios
// https://66d7f3d137b1cadd8052c5c1.mockapi.io/https/mock

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface User {
//   id: string;
//   name: string;
//   createdAt: string;
//   avatar: string;
// }

// const BasicTask: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState<string | null>(null); // State for error handling

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(
//           "https://66d7f3d137b1cadd8052c5c1.mockapi.io/https/mock"
//         );
//         setUsers(response.data);
//       } catch (err) {
//         setError("Failed to fetch users."); // Set error message
//         console.error(err); // Log error to console
//       }
//     };
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
//       <ul>
//         {users.map((user) => (
//           <li key={user.id} style={{ marginBottom: "20px" }}>
//             <img src={user.avatar} alt={`${user.name}`} style={{ width: "50px", borderRadius: "45%" }} />
//             <div>
//               <p>{user.name}</p>
//               <p>Created At: {user.createdAt}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BasicTask;

//6.... Create a useEffect Hook

// import { useEffect, useState } from "react";

// const BasicTask: React.FC = () => {
//     const [seconds, setSeconds] = useState<number>(0);

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setSeconds((prev) => prev + 1);
//       }, 1000);

//       return () => clearInterval(interval); // Cleanup on unmount
//     }, []);

//     return <p>Seconds: {seconds}</p>;
//   };

//   export default BasicTask;

//7.....Handle Conditional Rendering
// interface GreetingProps {
//     isLoggedIn?: boolean;
//   }

//   const BasicTask: React.FC<GreetingProps> = ({ isLoggedIn }) => {
//     return (
//       <div>
//         {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
//       </div>
//     );
//   };

//   export default BasicTask;

//8....Parent-Child Component Communication
// import { useState } from "react";
// interface DisplayProps {
//   message?: string;
// }

// const ChildComponent: React.FC<DisplayProps> = ({ message }) => {
//   return <p>{message}</p>;
// };

// const BasicTask: React.FC = () => {
//   const [message, setMessage] = useState<string>("Hello from Parent");

//   return <ChildComponent message={message} />;
// };

// export default BasicTask;

//9....Use useRef for DOM Manipulation
import { useRef } from "react";

const BasicTask: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default BasicTask;


//10..... Form Handling with TypeScript

// interface FormData {
//     name: string;
//     email: string;
//   }
  
//   const BasicTask: React.FC = () => {
//     const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
  
//     const handleSubmit = (e: React.FormEvent) => {
//       e.preventDefault();
//       console.log("Form Data:", formData);
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           placeholder="Name"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           placeholder="Email"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   };
  
//   export default BasicTask;
  