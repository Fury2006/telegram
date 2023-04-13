import {Routes, Route } from 'react-router-dom'
import userFunctions from './../../userFunctions/userFunctions';

const userFunctionsContent = () => {
    return ( 
        <Routes>
            {userFunctions.map(func => <Route path={func.path} element={func.component} />)}
        </Routes>
     );
}
 
export default userFunctionsContent;