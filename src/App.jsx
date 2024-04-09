
import './App.css'
import RefForm from './Components/RefForm/RefForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'
//46-1 Handle Form With OnSubmit And Access Field Data
//46-2 Form With State To Get Value And Set Default Value

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      <RefForm></RefForm>
    </>
  )
}

export default App
