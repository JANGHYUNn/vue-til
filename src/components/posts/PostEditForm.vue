<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea type="text" id="contents" rows="5" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning">
            Contents length must be less than 200
          </p>
        </div>
        <button type="submit" class="btn">Edit</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length < 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        const postId = this.$route.params.id;
        await editPost(postId, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>

<style>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
