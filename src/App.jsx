
import './App.css'
import HookForm from './Components/HookForm/HookForm'
import ReUseableForm from './Components/ReUseableForm/ReUseableForm'
import RefForm from './Components/RefForm/RefForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'
//46-1 Handle Form With OnSubmit And Access Field Data
//46-2 Form With State To Get Value And Set Default Value
//46-3 Explore Ref And Controlled And Uncontrolled Components

function App() {

  // const handleSignUpSubmit = (e) =>{
  //   e.preventDefault()
  // }

  // const handleUpdateProfile = (e) =>{
  //   e.preventDefault()
  // }
  const handleSignUpSubmit = (data) =>{
    // e.preventDefault()
    console.log('sign up data',data)
  }

  const handleUpdateProfile = (data) =>{
    // e.preventDefault()
    console.log('update profile data',data)
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReUseableForm FormTitle = {'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Pls sign up right now</p>
        </div>
      </ReUseableForm>
      <ReUseableForm FormTitle = {'Profile Update'} SubmitBtnText='Update' handleSubmit={handleUpdateProfile}>
        <div>
          <h1>Update PROFILE</h1>
          <p>keep update profile always</p>
        </div>
      </ReUseableForm>
    </>
  )
}

export default App
