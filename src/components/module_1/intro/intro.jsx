import "./intro.css"

import introFirstImg from "../../../img/intro_1.png"
import introSecondImg from "../../../img/intro_2.png"
import introThirdImg from "../../../img/intro_3.png"

const Intro = () => {
    return (
        <ul className="intro">
            <li className="intro-item">
                <img className="intro-img" src={introFirstImg} alt="introImg" width="480"/>
                <div className="item-card">
                    <h3 className="card-title">{"Light, Fast & Powerful"}</h3>
                    <p className="card-text">{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."}</p>
                </div>
            </li>
            <li className="intro-item">
                <img className="intro-img" src={introSecondImg} alt="introImg" width="480"/>
                <div className="item-card">
                    <h3 className="card-title">{"Light, Fast & Powerful"}</h3>
                    <p className="card-text">{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."}</p>
                </div>
            </li>
            <li className="intro-item">
                <img className="intro-img" src={introThirdImg} alt="introImg" width="480"/>
                <div className="item-card">
                    <h3 className="card-title">{"Light, Fast & Powerful"}</h3>
                    <p className="card-text">{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."}</p>
                    <button className="intro-btn" type="button">Purchase Now</button>
                </div>
            </li>
            
        </ul>
    )
}

export default Intro