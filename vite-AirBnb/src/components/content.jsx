import gridPic from '/assets/photo-grid.png'
import './content.css'

function Content() {
    return(
        <section>
            <img src={gridPic} alt='airbnb grid photo card' />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by<br></br>
            one-of-a-kind hosts—all without leaving<br></br> home.</p>
        </section>
    )
}
export default Content