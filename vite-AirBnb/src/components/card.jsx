import './card.css'
import star from '/assets/star.png'
function  Card(props) {
    let badgeTexts
    if (props.openSpots===0) {
        badgeTexts="SOLD OUT"
    }else if(props.location==="Online"){
        badgeTexts="ONLINE"
    }
    return(
        <div className="card-content">
            {badgeTexts && <div className="card-badge">{badgeTexts}</div>}
            <div className="card"><br></br>
            <img src={`/assets/${props.coverImg}`} className='card-image'></img>
            <div className="card-stats">
                <img src={star} className="card-star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}

export default Card