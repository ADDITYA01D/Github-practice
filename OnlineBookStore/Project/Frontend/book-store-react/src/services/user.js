import axios from "axios"
import { createUrl, log } from "../utils/utils"

export async function loginUser(e, p) {
  const url = createUrl('/users/signin')
  const body = {
    email:e,
    password:p,
  }

  try {
    const response = await axios.post(url, body)
    log(response.data)
    return response;
  } catch (ex) {
    log(ex)
    return ex.response;
  }
}

export async function updateProfile(customerId, profile, token) {
  const header = {
      headers: { 
          "content-type" : "application/json",
          Authorization: `Bearer ${token}`,
      }
  };

  try {
      const response = await axios.put( 
          `http://localhost:7788/user/update/${customerId}`, profile,
          header
          );
      return response;

  } catch (ex) {
      log(ex);
      return ex
  }
}