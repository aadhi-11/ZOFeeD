import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import List from './Pages/List/List'
import New from './Pages/New/New'
import Login from './Pages/Login/Login'
import Single from './Pages/Single/Single'
import { UserInputs, productInput } from './formSource'


const App = () => {
  return (
    <div className={"app"} >
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/user/*">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="New" element={<New inputs={UserInputs} title="Add New User" />} />
        </Route>
        <Route path="/product/*">
          <Route index element={<List />} />
          <Route path=":ProductId" element={<Single />} />
          <Route path="New" element={<New inputs={productInput} title="Add New product" />} />
        </Route>
        <Route path="/Login" element={<Login />} />
      </Routes>

    </div>
  )
}

export default App
