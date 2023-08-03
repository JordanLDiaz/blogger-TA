<template>
  <div class="row card">
    <div class="d-flex align-content-between">
      <div class="col-8 p-3">
        <div class="d-flex align-items-center">
          <router-link :to="{ name: 'Profile', params: { profileId: blogProp.creatorId } }">
            <img :src="blogProp.creator.picture" class="blogger-pic rounded-circle">
          </router-link>
          <h3 class="ms-3">{{ blogProp.creator.name }}</h3>
        </div>

        <p>{{ blogProp.title }}
        </p>
        <p>{{ blogProp.body }}
        </p>
        <div>{{ blogProp.createdAt }}</div>

      </div>

      <div class="col-4 d-flex justify-content-end align-items-center">
        <img :src="blogProp.imgUrl" alt="" class="blog-img">
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Blog } from "../models/Blog.js";
export default {
  props: { blogProp: { type: Blog, required: true } },
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>
.blogger-pic {
  height: 10vh;
  width: 10vh;
}

.blog-img {
  background-position: center;
  background-size: cover;
  max-height: 50vh;
  max-width: 30vw;
  object-fit: contain;
}
</style>