import "./hero.css"
import hero from '../../../img/designer_1.png'

const Hero = () => {
    return (
        <section className="hero">
            <div className="content">
                <h2 className="content-title">{"Introduce Your Product Quickly & Effectively"}</h2>
                <p className="content-text">{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."}</p>
                <button type="button" className="content-btn current">Purchase UI Kit</button>
                <button type="button" className="content-btn">Learn More</button>
            </div>
            <img className="hero-img"
            src={hero}
            alt="Hero img"
            />

        </section>
    )
}
export default Hero