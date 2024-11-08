import axios from "axios";
export async function signup(signupObj) {
  //console.log("api", signupObj);
  try {
    const res = await axios.post(`/api/v1/auth/register`, signupObj);
    //console.log(res);
    return res;
  } catch (err) {
    const errorFromServer = err.response.data.msg;
    throw new Error(errorFromServer || "something went wrong");
  }
}
export async function login(loginObj) {
  //console.log("api", loginObjj);
  try {
    const res = await axios.post(`/api/v1/auth/login`, loginObj);
    //console.log(res);
    return res;
  } catch (err) {
    const errorFromServer = err.response.data.msg;
    throw new Error(errorFromServer || "something went wrong");
  }
}
export async function protectedRoutes() {
  try {
    const res = await axios.get(
      `/api/v1/auth/validate-for-protectedRoutesInClientSide`
    );
    //console.log("res", res.data.msg);
    return res.data.msg;
  } catch (error) {
    //console.log(error);
    throw new Error(error.response?.data?.msg || "something went wrong");
  }
}
export async function logout() {
  try {
    const res = await axios.post(`/api/v1/auth/logout`);

    return res;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "something went wrong");
  }
}
export async function protectedRoutes2() {
  const res = await fetch(
    `/api/v1/auth/validate-for-protectedRoutesInClientSide`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  if (!res.ok) throw new Error("failed getting data");
  const data = await res.json();

  return data;
}
