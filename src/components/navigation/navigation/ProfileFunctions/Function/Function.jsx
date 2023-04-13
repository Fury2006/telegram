import { Link } from "react-router-dom";

const Function = (props) => {
    return ( 
        <div>
            <Link to={props.navigator.path}>{props.navigator.name}</Link>
        </div>
     );
}
 
export default Function;