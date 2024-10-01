import moment from 'moment'
import { ArticleInterface } from '../../interfaces'

export const ArticleHeader: React.FC<{ article: ArticleInterface }> = ({
  article,
}) => {
  return (
    <div className="article_header">
      <a
        href={`/${article.section}`}
        title={`Ver mas noticias en ${article.section}`}
        className="article_section"
      >
        {article.section}
      </a>
      <h1 className="article_title">{article.title}</h1>
      <div className="article_description">
        <p>
          {article.contents
            .filter((content) => content.type === 'description')
            .map((content) => content.content)}
        </p>
        <p></p>
      </div>
      <div className="article_author">
        <p className="article_author_name">
          {'Por '}
          <a
            href={`/author/${article.author!.name}`}
            title={article.author!.name}
          >
            {article.author!.name} {article.author!.lastName}
          </a>
        </p>
        <span>-</span>
        <time className="article_date">
          {moment(article.createdAt).format('D [de] MMMM [de] YYYY')}
        </time>
      </div>
    </div>
  )
}
