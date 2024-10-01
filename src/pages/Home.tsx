import { useEffect, useState } from 'react'
import { Card } from '../components'
import { ArticleInterface } from '../interfaces'
import { ArticleService } from '../services'
import '../styles/home.css'

const Home = () => {
  const articleService = new ArticleService()
  const [articlesContainer1, setArticlesContainer1] = useState<ArticleInterface[]>([])
  const [articlesContainer2, setArticlesContainer2] = useState<ArticleInterface[]>([])
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const getArticles = async () => {
      const results = await Promise.allSettled([
        articleService.getArticles({ limit: 7, offset: 0 }),
        articleService.getArticles({ limit: 10, offset: 7 }),
      ]);
    
      const initialArticles = results[0];
      const secondArticles = results[1];
      console.log(initialArticles, secondArticles);
    
      if (initialArticles.status === 'rejected' || secondArticles.status === 'rejected') {
        setError(true); 
        return; 
      }

      setArticlesContainer1(initialArticles.value);
      setArticlesContainer2(secondArticles.value);
    }

    getArticles()
  }, [])

  if (error || !articlesContainer1.length || !articlesContainer2.length) {
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
          {articlesContainer1.map((article, index) => (
            <Card article={article} customClass={index === 0 ? 'card_article_horizontal' : ''} key={article.id} />
          ))}
        </div>
        <div className="aside">
          publicidad
        </div>
      </div>
      <div className='container'>
        <div className="main">
          {articlesContainer2.map((article) => (
            <Card article={article} customClass={'card_article_horizontal_left'} key={article.id} />
          ))}
        </div>
        <div className="aside">
          publicidad 3
        </div>
      </div>
    </div>
  )
}

export default Home
