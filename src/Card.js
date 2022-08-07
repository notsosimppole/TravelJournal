import './Card.css'

export default function Card(props){
    return(
        <div className='card'>
            <div className='card--img'>
                <img src = {props.imageUrl} className = "card--img--img"/>
            </div>
            <div className='card--content'>
                <span className='card--loc'>
                <span className='pin'><i class="fas fa-solid fa-location-dot"></i></span>
                <span className='loc'>{props.location} </span>
                <a href = {props.googleMapsUrl} target="_blank">View on google maps</a>
                </span>
                <span className='card--title'>
                    <h1>{props.title}</h1>
                </span>
                <span className='card--date'>
                    <p className='date'>{props.startDate} - {props.endDate}</p>
                </span>
                <span className='card--details'>
                    <p className='deets'>{props.description}</p>
                </span>
            </div>
        </div>
    )
}