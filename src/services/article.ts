import { FetchClient } from "../classes"

export class ArticleService {

  readonly httpClient = new FetchClient('article')

  async getArticleById(id: number) {
    return await this.httpClient.get(id.toString())
  }

  async getArticles() {
    return await this.httpClient.get()
  }
}