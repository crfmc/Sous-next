import { AppProps } from "next/app";
import Link from 'next/link';
import { z } from 'zod';
import { useEffect, useState } from "react";


export default function DashNav() {
  const [expandDashNav, setExpandDashNav] = useState(true);
  const [data, setData] = useState({
    aviSrc: "",
    firstName: "",
    lastName: "",
    username: "",
  });

  useEffect(() => {
    fetch("https://randomuser.me/api/").then(
      (res) => res.json()).then(
        (data) => {
          if (data) {
            setData({
              aviSrc: data.results[0].picture.large,
              firstName: data.results[0].name.first,
              lastName: data.results[0].name.last,
              username: data.results[0].login.username,
            })
          }
        }).catch(err => console.log(err));
   }, [])

  return (
    <div className={ expandDashNav ? "dashnav expanded" : "dashnav collapsed" }>
      <div className="dashnav-container">
        <div className="dashnav-container-content">
          <button onClick={() => setExpandDashNav(!expandDashNav)}>{expandDashNav ? "->" : "<-"}</button>
          <div className="dashnav-container-content-profile">
            <img className="dashnav-container-content-profile-avi" src={data.aviSrc} />
            <p className="dashnav-container-content-profile-name">{data.firstName + ' ' + data.lastName}</p>
            <p className="dashnav-container-content-profile-username">{'@' + data.username}</p>
          </div>
          <nav className="dashnav-container-content-navigation" aria-label="Page Navigation">
            <ul className="dashnav-container-content-navigation-list">

            </ul>
          </nav>
        </div>
      </div>

    </div>
  )
};