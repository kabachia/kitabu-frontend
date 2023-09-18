<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
      </div>
    </div>
    <div class="col-md-6">
      <h4>Authors List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(author, index) in authors"
          :key="index"
          @click="setActiveAuthor(author, index)"
        >
          {{ author.last_name }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentAuthor">
        <div>
          <label><strong>First Name:</strong></label> {{ currentAuthor.first_name }}
        </div>
        <div>
          <label><strong>Last Name:</strong></label> {{ currentAuthor.last_name }}
        </div>
        <div>
          <label><strong>Email:</strong></label> {{ currentAuthor.email }}
        </div>
        <div>
          <label><strong>Biography:</strong></label> {{ currentAuthor.biography }}
        </div>

      </div>
      <div v-else>
        <br />
        <p>Choose an author to view details...</p>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorDataService from "../services/AuthorDataService";

export default {
  name: "authors-list",
  data() {
    return {
      authors: [],
      currentAuthor: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveAuthors() {
      AuthorDataService.getAll()
        .then(response => {
          this.authors = response.data.data;
          console.log(this.authors);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveAuthors();
      this.currentAuthor = null;
      this.currentIndex = -1;
    },

    setActiveAuthor(author, index) {
      this.currentAuthor = author;
      this.currentIndex = author ? index : -1;
    },

  },
  mounted() {
    this.retrieveAuthors();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
