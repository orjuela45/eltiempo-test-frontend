import { FetchClient } from "../classes"
import { PaginationInterface } from "../interfaces"

export class ArticleService {

  readonly httpClient = new FetchClient('article')

  async getArticleById(id: number) {
    return await this.httpClient.get(id.toString())
  }

  async getArticles(pagination?: PaginationInterface) {
    return await this.httpClient.get('', pagination || {})
  }
}