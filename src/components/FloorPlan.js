import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"





const FloorPlan = () => {
    
    return (
        <div>
            I am the FloorPlan
            <Bedroom number=' 1'/>
            <Kitchen />
            <Bath size="Full "/>
            <Bedroom number=' 2' />
            <LivingRoom />
             <Bath size="Half "/>
            <Bedroom number=' 3' />
            
        </div>
    )
}
export default FloorPlan