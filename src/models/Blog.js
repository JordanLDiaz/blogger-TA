export class Blog {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.tags = data.tags
    this.published = data.published
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.createdAt = new Date(data.createdAt).toLocaleDateString()
    this.updatedAt = new Date(data.updatedAt).toLocaleDateString()
  }
}