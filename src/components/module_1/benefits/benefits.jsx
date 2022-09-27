import "./benefits.css"
import benefistImg from "../../../img/benefits.png"

const Benefits = () => {
    return (
        <section className="benefits">
            <div>
            <div className="benefits-content">
                <h2 className="benefits-content-title">{"Light, Fast & Powerful"}</h2>
                <p className="benefits-content-text">{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."}</p>
            </div>
            <ul className="benefist-list">
                    <li className="item">
                    <div className="item-img"></div>
                        <h3 className="item-title">{"Title Goes Here"}</h3>
                        <p className="item-text">{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "}</p>
                    </li>
                    <li className="item">
                        <div className="item-img"></div>
                        <h3 className="item-title">{"Title Goes Here"}</h3>
                        <p className="item-text">{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "}</p>
                    </li>
                </ul>   
            </div>
            <img src={benefistImg} alt="benefits" height="524"/>
            
        </section>
    )
}

export default Benefits