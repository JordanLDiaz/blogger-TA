<template>
  <div class="container-fluid">
    <section class="row justify-content-center">
      <div class="col-11 my-3" v-for="b in blogs">
        <BlogCard :blogProp="b" />
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { blogsService } from "../services/BlogsService.js"
import { AppState } from "../AppState.js";

export default {
  setup() {

    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getBlogs()
    })


    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss"></style>
