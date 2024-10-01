import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArticleService } from '../services'
import { ArticleInterface } from '../interfaces'

const Article = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const articleService = new ArticleService()

  const [article, setArticle] = useState<ArticleInterface | null>(null)

  useEffect(() => {
    const getArticleById = async () => {
      const article = await articleService.getArticleById(Number(id))
      if (article.error) navigate('/404')
      setArticle(article)
      document.title = article.title
    }

    getArticleById()
  }, [])

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Article: {id} </h1>
      <p>{article.title}</p>
      <p>{article.contents}</p>
      <p>{article.author?.name}</p>
      <p>{article.section}</p>
    </>
  )
}

export default Article
