import { AppProps } from "next/app";
import Link from 'next/link';
import { z } from 'zod';
import { useEffect, useState } from "react";
import Navigation from "../Navigation";


export default function DashNav() {
  const [expandDashNav, setExpandDashNav] = useState(false);
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
          <div className="dashnav-container-content-profile">
            <div className="dashnav-container-content-profile-avi" onClick={() => setExpandDashNav(!expandDashNav)} >
              <img className="dashnav-container-content-profile-avi-image" src={data.aviSrc} />
            </div>
            <div className="dashnav-container-content-profile-text">
              <p className="dashnav-container-content-profile-text-name">{data.firstName + ' ' + data.lastName}</p>
              <p className="dashnav-container-content-profile-text-username">{'@' + data.username}
              </p>
            </div>
          </div>
          <div className="dashnav-container-content-navigation" aria-label="Page Navigation">
            <Navigation mut={expandDashNav ? "dash-expanded" : "dash-collapsed"} />
            {/* <ul className="dashnav-container-content-navigation-list">
              <li>
              </li>
            </ul> */}
          </div>
        </div>
      </div>

    </div>
  )
};