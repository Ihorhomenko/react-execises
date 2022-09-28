import "./price.css"

const Price = () => {
    return (
        <section className="price">
            <h3 className="price-title">{"A Price To Suit Everyone"}</h3>
            <p className="price-text">{"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus "}</p>
            <p className="price-value">{"$40"}</p>
            <p className="price-value-title">{"UI Design Kit"}</p>
            <p className="price-body">{"See, One price. Simple."}</p>
            <button className="price-btn" type="button">{"Purchase Now"}</button>
        </section>
    )
}

export default Price