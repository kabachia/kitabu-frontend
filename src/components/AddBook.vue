<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="ISBN">ISBN</label>
        <input
          type="text"
          class="form-control"
          id="ISBN"
          required
          v-model="book.ISBN"
          name="ISBN"
        />
      </div>

      <div class="form-group">
        <label for="name">Name</label>
        <input
          class="form-control"
          id="name"
          required
          v-model="book.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <p>Author</p>
        <select class="form-select" required v-model="book.author_id">
           <option v-for="author in authors" v-bind:key="author.id" v-bind:value="{id:author.id}">{{author.last_name}}</option>
        </select>
      </div>

      <button @click="saveBook" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newBook">Add</button>
    </div>
  </div>
</template>

<script>
import BookDataService from "../services/BookDataService";
import AuthorDataService from "../services/AuthorDataService";

export default {
  name: "add-book",
  data() {
    return {
      book: {
        ISBN: null,
        name: "",
        author_id: "",
      },
      submitted: false,
      authors: null,
    };
  },
  methods: {
    saveBook() {
      var data = {
        ISBN: this.book.ISBN,
        name: this.book.name,
        author_id: this.book.author_id.id,
      };

      BookDataService.create(data)
        .then(response => {
          //this.book.ISBN = response.data[0].ISBN;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newBook() {
      this.submitted = false;
      this.book = {};
    },

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
  },
  mounted() {
    this.retrieveAuthors();
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
