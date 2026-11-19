import { useContext } from "react";

//css and page imports
import "../blocks/Main.css";
import EventBox from "./homepage/EventBox";
import OfficerBox from "./homepage/Officerbox";
import HistoryBox from "./homepage/HistoryBox";
import SocialBox from "./homepage/SocialBox";

export default function Main({}) {
  return (
    <div className="main">
      <EventBox></EventBox>
      <OfficerBox></OfficerBox>
      <HistoryBox></HistoryBox>
      <SocialBox></SocialBox>
    </div>
  );
}
