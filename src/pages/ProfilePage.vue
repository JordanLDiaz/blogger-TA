<template>
  <div class="container-fluid">
    <section class="row">

    </section>

    <section class="row">
      <div class="col-11 my-3" v-for="b in blogs">
        <BlogCard :blogProp="b" />
      </div>
    </section>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { profilesService } from "../services/ProfilesService.js";
import { useRoute } from "vue-router";
import { blogsService } from "../services/BlogsService.js";

export default {

  setup() {

    const route = useRoute()

    async function getProfileById() {
      try {
        const profileId = route.params.profileId
        await profilesService.getProfileById(profileId)
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    }

    async function getBlogsByProfile() {
      try {
        const profileId = route.params.profileId
        await blogsService.getBlogsByProfile(profileId)
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getProfileById(),
        getBlogsByProfile()
    })

    return {
      profile: computed(() => AppState.activeProfile),
      blogs: computed(() => AppState.blogs)
    }
  }
};
</script>


<style lang="scss" scoped></style>