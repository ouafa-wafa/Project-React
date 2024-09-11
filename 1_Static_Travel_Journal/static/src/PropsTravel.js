


function PropsTravelCard(props) {
  return (
    <div className="PropsTravelCard">
        <img src={props.imageUrl}/>
        <div className="content">
          <div className="location">
            <p>{props.location}</p>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h5>{props.startDate} {props.endDate}</h5>
          <h4>{props.title}</h4>
          <p className="paragraph">{props.description}</p>
        </div>
    </div>
  );
}

export default PropsTravelCard;