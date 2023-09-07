import axios from "axios"
import { createUrl, log } from "../utils/utils"

export async function registerUser(
    firstName,
    lastName,
    email,
    mobile,
    password,
  ) {
    const url = createUrl('/users/signup')
    const body = {
      firstName,
      lastName,
      email,
      mobile,
      password,
    }
    // wait till axios is making the api call and getting response from server
    try {
      console.log(url)
      const response = await axios.post(url, body)
      log(response.data)
      return response
    } catch (ex) {
      log(ex)
      return ex
    }
  }