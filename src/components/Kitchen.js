import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) =>{
    console.log(props)

    return(
        <div>
            I am the Kitchen
            <Oven/>
            <Sink/>
        </div>
    )
}

export default Kitchen 