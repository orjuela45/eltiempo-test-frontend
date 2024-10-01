import { useEffect, useState } from 'react'
import { LittleCard } from '../components'
import { ArticleInterface } from '../interfaces'
import { ArticleService } from '../services'

const Home = () => {
  const articleService = new ArticleService()
  const [articles, setArticles] = useState<ArticleInterface[]>([])
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const getArticles = async () => {
      const articles = await articleService.getArticles()
      if (articles.error) setError(true)
      setArticles(articles)
    }

    getArticles()
  }, [])

  if (error || !articles.length) {
    return (
      <div>
        <h1>No Articles</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Home</h1>
      {articles.map((article) => (
        <LittleCard article={article} />
      ))}
    </div>
  )
}

export default Home
