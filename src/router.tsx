import { Route, BrowserRouter , Routes } from "react-router-dom"
import { Article, Home, NotFound } from "./pages"
import { Layout } from "./components"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
  </BrowserRouter>
  )
}

export default AppRouter