import { useEffect, useState } from 'react'
import { Card } from '../components'
import { ArticleInterface } from '../interfaces'
import { ArticleService } from '../services'
import '../styles/home.css'

const Home = () => {
  const articleService = new ArticleService()
  const [articles, setArticles] = useState<ArticleInterface[]>([])
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const getArticles = async () => {
      const articles = await articleService.getArticles({limit: 7, offset: 0})
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
    <div className="home">
      <div className='container'>
        <div className="main">
          {articles.map((article, index) => (
            <Card article={article} customClass={index === 0 ? 'card_article_horizontal' : ''} key={article.id} />
          ))}
        </div>
        <div className="aside">
          publicidad
        </div>
      </div>
    </div>
  )
}

export default Home
