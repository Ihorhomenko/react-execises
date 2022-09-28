import { Container } from "./container/container"
import Header from "./header/header"
import Hero from "./hero/hero"
import Benefits from "./benefits/benefits"
import Intro from "./intro/intro"
import Price from "./price/price"

const Landie = () => {
    return (
        <Container>
            <Header/>
            <Hero/>
            <Benefits/>
            <Intro/>
            <Price/>
        </Container>
        
    )
}

export default Landie