
import './App.css'
import HookForm from './Components/HookForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'
//46-1 Handle Form With OnSubmit And Access Field Data
//46-2 Form With State To Get Value And Set Default Value
//46-3 Explore Ref And Controlled And Uncontrolled Components

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      <HookForm></HookForm>
    </>
  )
}

export default App
