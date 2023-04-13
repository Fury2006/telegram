import Function from "../Function/Function";
import navigators from "./navigators";

const ProfileFunctions = (props) => {
    return ( 
        <div>
            {navigators.map(navigator => <Function navigator={navigator} />)}
        </div>
     );
}
 
export default ProfileFunctions;