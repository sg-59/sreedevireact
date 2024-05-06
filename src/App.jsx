import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Main from "./Pages/Main"
import Cart from "./Pages/Cart"

function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Main/>
    },
    {
      path:"/cartabc",
      element:<Cart/>
    }
  ])

  return (
    <>
   <RouterProvider router={router}></RouterProvider>
  </>
  )
}

export default App
