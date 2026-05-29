import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"
import toast from "react-hot-toast"
const App = ()=>{
  return(
    <div>
      <button onClick={()=> toast.success("Congrats")}>Click me</button>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/create" element={<CreatePage></CreatePage>}></Route>
      <Route path="/note/:id" element={<NoteDetailPage></NoteDetailPage>}></Route>

    </Routes>
    </div>
  )
}

export default  App