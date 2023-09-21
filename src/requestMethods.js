import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjgyNDQwOTg5YjM1OThjYWQ3NTZjNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTMxNDEwNywiZXhwIjoxNjk1NTczMzA3fQ.cupaWlQv-mjj1En0dNjwfiKoPaxpP2U4H51SV_aA0ec"

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });

