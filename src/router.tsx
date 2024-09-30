import { Route, BrowserRouter , Routes } from "react-router-dom"
import App from "./App"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
      </Routes>
  </BrowserRouter>
  )
}

export default AppRouter