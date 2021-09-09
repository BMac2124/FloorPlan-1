import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"





const FloorPlan = () => {
    return (
        <div>
            I am the FloorPlan
            <Bedroom bedNUm1={1} />
            <Kitchen />
            <Bath size="full"/>
            <Bedroom bedNUm2={2} />
            <LivingRoom />
             <Bath />
            <Bedroom bedNUm3={3} />
            
        </div>
    )
}
export default FloorPlan