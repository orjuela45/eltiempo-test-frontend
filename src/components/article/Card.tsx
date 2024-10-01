import moment from "moment";
import { ArticleInterface } from '../../interfaces'
import '../../styles/cardsArticle.css'

export const Card: React.FC<{ article: ArticleInterface, customClass?: string }> = ({
  article, customClass
}) => {

  return (
    <article className={`card_article ${customClass}`}>
      <figure className="card_article_img">
        <a href="#" title={article.title} target="_self">
          <img src={article.image} alt="" />
        </a>
      </figure>
      <div className="card_article_content">
        <div className="card_article_share">
          <a
            href="#"
            title={`Ver mas noticias en ${article.section}`}
            className="card_article_section"
          >
            {article.section}
          </a>
          <svg
            className="icono icono--share"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
          >
            <path
              d="M22.5,25.492c-1.1,0-2,0.899-2,2c0,1.1,0.9,2,2,2s2-0.9,2-2C24.5,26.392,23.6,25.492,22.5,25.492z M22.5,19.492
    c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S23.6,19.492,22.5,19.492z M22.5,17.492c1.1,0,2-0.9,2-2s-0.899-2-2-2s-2,0.9-2,2
    S21.4,17.492,22.5,17.492z"
            ></path>
          </svg>
        </div>
        <div className="card_article_info">
          <h2 className="card_article_title">
            <a href="#" title={article.title} target="_self">
              {article.title}"
            </a>
          </h2>
          <div className="card_article_author">
            <p className="card_article_author_name">
              {'Por '}
              <a href="#" title={article.author!.name}>
                {article.author!.name} {article.author!.lastName}
              </a>
            </p>
            <span>-</span>
            <time className="card_article_date">
              {moment(article.createdAt).format('D [de] MMMM [de] YYYY')}
            </time>
          </div>
        </div>
        

      </div>
    </article>
  )
}
