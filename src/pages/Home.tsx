import { useEffect, useState } from "react"
import { LittleCard } from "../components"
import { ArticleInterface } from "../interfaces"
import { ArticleService } from "../services"

const Home = () => {
  const articleService = new ArticleService()
  const [articles, setArticles] = useState<ArticleInterface[]>([])
  const [error, setError] = useState<boolean>(false);
  
  useEffect(() => {
    const getArticles = async () => {
      const articles = await articleService.getArticles()
      if (articles.error) setError(true)
      setArticles(articles)
    console.log(articles);
    }

    getArticles()
  }, [])

  if (error) {
    return <div>
      <h1>No Articles</h1>
    </div>
  }
  
  return (
    <div>
      <h1>Home</h1>
      <LittleCard article={articles[0]} />
    </div>
  )
}

export default Home
