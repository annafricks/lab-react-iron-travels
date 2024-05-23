import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlan from "./TravelPlan";


const TravelList = () => {
    const [travelPlans, setTravelPlans] = useState(travelPlansData)
    console.log(travelPlans);
  return (
    <div>
        {travelPlans.map((travelPlan, i) => <TravelPlan key={i} travelPlan={travelPlan}/> )}
      {/* <TravelPlan travelPlan={travelPlans[0]}/> */}
    </div>
  )
}

export default TravelList
