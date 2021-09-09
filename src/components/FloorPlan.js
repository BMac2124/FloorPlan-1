import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"





const FloorPlan = () => {
    return (
        <div>
            I am the FloorPlan
            <Bedroom bedNUm={'1'} />
            <Kitchen />
            <Bath size="full "/>
            <Bedroom bedNUm={'2'} />
            <LivingRoom />
             <Bath size="half "/>
            <Bedroom bedNUm={'3'} />
            
        </div>
    )
}
export default FloorPlan