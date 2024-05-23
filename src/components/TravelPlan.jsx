

const TravelPlan = ({travelPlan}) => {
    const {destination, image, description, totalCost, allInclusive} = travelPlan
  return (
    <div className="travel-card">
      <img src={image}/>
      <div className="travel-content">
        <h1>{destination}</h1>
        <p>{description}</p>
        <p>Price: {totalCost} €</p>
        <div className="deals">
            {totalCost < 350 && <p className="great-deal">Great Deal </p>}
            {totalCost > 1500 && <p className="premium">Premium</p>}
            {allInclusive && <p className="all-inclusive">All-Inclusive</p>}
        </div>
      </div>
        
    </div>
  )
}

export default TravelPlan
