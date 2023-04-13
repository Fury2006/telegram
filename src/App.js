import ProfileFunctions from "./components/navigation/navigation/ProfileFunctions/FunctionsBody/ProfileFunctions";
import Main from "./components/navigation/main/Main";


const App = (props) => {
  return (
    <div className='App'>
      {/* <ProfileFunctions /> */}
      <Main store={props.store} />
    </div>
  );
}

export default App;
