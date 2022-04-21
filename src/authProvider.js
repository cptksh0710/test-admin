import React, { useEffect, useState } from "react";

const authProvider = {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    //console.log(username)
    //console.log(password)
    //const response = fetch("http://localhost:8080/restapi/member/");
    //const users = response.json();
    //console.log(response)
    //const [data, setData] = useState([]);
    fetch("http://localhost:8080/restapi/member/")
      .then((response) => response.json())
      .then((data) => console.log(data.payload));

    /*
  if(username !== 'admin' || password !== '1234') {
    return Promise.reject();
    }*/
    localStorage.setItem("username", username);
    // accept all username/password combinations
    console.log(Promise.resolve())
    return Promise.resolve();

    /*
    return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })*/

  },

  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

export default authProvider;