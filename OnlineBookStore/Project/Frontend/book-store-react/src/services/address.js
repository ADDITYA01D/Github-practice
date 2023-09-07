// import axios from "axios";
// import { useCallback, useState } from "react";

// const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaXBhbUBnbWFpbC5jb20iLCJpYXQiOjE2OTI5ODE0MzAsImV4cCI6MTY5MzA2NzgzMCwiYXV0aG9yaXRpZXMiOiJVU0VSIn0.lka5eUe8JrYw0Br78De5VG2c3BNppGkd3fkMaRrnQvBkIY33Uv-3hGfldY2z0WO8InNIynbXQZOgp6HYu442OA";

// const apiUrl = "http://localhost:7788/address/user/1";

// axios.interceptors.request.use(
//     config => {
//         config.headers.authorization = `Bearer ${accessToken}`;
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// )


// function Appy() {
//     const [users, setUsers] = useState([]);
//     const [requestError, setRequestError] = useState();
    
//     const fetchData = useCallback(async () => {
//         try {
//             const result = await axios.get(`${apiUrl}`);
//             setUsers(result.data);
//         } catch(err) {
//             setRequestError(err.message);
//         }
//     })
//     return (
//         <div className="container">
//             <button onClick={() => fetchData()}>Get Address</button>
//             {users.map(user => {
//                 return <p>{user}</p>
//             })}
//         </div>
//     )
// }
// export default Appy

