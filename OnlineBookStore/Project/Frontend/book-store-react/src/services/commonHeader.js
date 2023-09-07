
import { useSelector } from "react-redux";

  
//   makeRequest('/endpoint', requestData, customHeaders)


export function GetHeader() {
    const token = useSelector((state) => state.auth.token);
    const customHeader = {
        headers: {
        'Content-Type':'application/json',
        authorization :'Bearer '+token
        }
    }
    return customHeader;
}