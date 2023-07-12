'use client'
import React, { useContext, useEffect, useState } from "react"

import AdminHeader from "@/components/Admin/AdminHeader"
import Table from "@/components/Admin/Table"
import Login from "@/components/Admin/Login";


export const UserContext = React.createContext();

export const useUserContext = () => {
  return useContext(UserContext);
}

export default function Admin() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  // const [user, setUser] = useState({email: 'admin@cgalmaty.kz'});
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('userdata');
  }
  const login = (data) => {
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem('userdata', JSON.stringify(data));
  }

  useEffect(()=>{
    if(!user && localStorage.getItem('userdata')){
      const data = JSON.parse(localStorage.getItem('userdata'));
      setUser(data.user);
      setToken(data.token);
    }
  }, [user]);

  const value = {
    user: user,
    login: login,
    logout: logout
  }

  return (
    <UserContext.Provider value={value} >
      {(user && user.email) ? (
        <>
          <AdminHeader />
          <main>
              <Table />
          </main>
        </>
      ) : (
        <Login />
      )}
    </UserContext.Provider>
  )
}
