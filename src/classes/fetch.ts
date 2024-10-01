export class FetchClient {
  private baseUrl: string

  constructor(readonly basePath: string) {
    this.basePath = basePath
    this.baseUrl = `http://localhost:8080/api/${basePath}`
  }

  async get(subpath = '', queryParams = {}) {
    const url = this.buildUrl(subpath, queryParams)
    const response = await fetch(url)
    return await response.json()
  }

  async post(data: any, subpath = '', queryParams = {}) {
    const url = this.buildUrl(subpath, queryParams)
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  }

  private buildUrl(subpath = '', queryParams = {}) {
    let url = `${this.baseUrl}/${subpath}`

    if (Object.keys(queryParams).length > 0) {
      const queryString = new URLSearchParams(queryParams).toString()
      url += `?${queryString}`
    }
    return url
  }
}
