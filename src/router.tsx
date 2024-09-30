import { Route, BrowserRouter , Routes } from "react-router-dom"
import { Article, Home, NotFound } from "./pages"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
  </BrowserRouter>
  )
}

export default AppRouter