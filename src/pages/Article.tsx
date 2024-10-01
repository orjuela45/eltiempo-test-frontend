import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArticleService } from '../services'
import { ArticleInterface } from '../interfaces'
import { ArticleHeader, Paragraph } from '../components'
import '../styles/Article.css'

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
    return <div>Loading...</div>
  }

  return (
    <div className="article">
      <ArticleHeader article={article} />
      <div className="container">
        <div className="main">
          <div className="article_image">
            <img src={article.image} alt="" />
          </div>
        </div>
        <div className="aside">publicidad</div>
      </div>
      <div className="container">
        <div className="networks">redes sociales</div>
        <div className="main">
          {article.contents.map((content, index) => {
            switch (content.type) {
              case 'paragraph':
                return <Paragraph key={index}> {content.content}</Paragraph>
              case 'image':
                return <img key={index} src={content.content} alt="" />
              default:
                return null
            }
          })}
        </div>
        <div className="aside">publicidad</div>
      </div>
    </div>
  )
}

export default Article
