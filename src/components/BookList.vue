<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
      </div>
    </div>
    <div class="col-md-6">
      <h4>Books List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(book, index) in books"
          :key="index"
          @click="setActiveBook(book, index)"
        >
          {{ book.name }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentBook">
        <div>
          <label><strong>ISBN:</strong></label> {{ currentBook.ISBN }}
        </div>
        <div>
          <label><strong>Name:</strong></label> {{ currentBook.name }}
        </div>
        <div>
          <label><strong>Author:</strong></label> {{ currentBook.author.last_name }}
        </div>
      </div>
      <div v-else>
        <br />
        <p>Choose a book to view details...</p>
      </div>
    </div>
  </div>
</template>

<script>
import BookDataService from "../services/BookDataService";

export default {
  name: "books-list",
  data() {
    return {
      books: [],
      currentBook: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveBooks() {
      BookDataService.getAll()
        .then(response => {
          this.books = response.data.data;
          console.log(this.books);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveBooks();
      this.currentBook = null;
      this.currentIndex = -1;
    },

    setActiveBook(book, index) {
      this.currentBook = book;
      this.currentIndex = book ? index : -1;
    },

  },
  mounted() {
    this.retrieveBooks();
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
