import { AppState } from "../AppState.js";
import { Blog } from "../models/Blog.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class BlogsService {
  async getBlogs() {
    const res = await api.get('api/blogs')
    // logger.log('[GETTING BLOGS]', res.data)
    AppState.blogs = res.data.map(b => new Blog(b))
    logger.log('[BLOGS IN APPSTATE]', AppState.blogs)
  }

  async getBlogsByProfile(profileId) {
    const res = await api.get('api/blogs/', { params: { creatorId: profileId } })
    logger.log('[GETTING POSTS ON PROFILE PAGE]', res.data)
    AppState.blogs = res.data.map(b => new Blog(b))
  }
}

export const blogsService = new BlogsService();