<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="first_name">First Name</label>
        <input
          type="text"
          class="form-control"
          id="first_name"
          required
          v-model="author.first_name"
          name="first_name"
        />
      </div>

      <div class="form-group">
        <label for="last_name">Last Name</label>
        <input
          class="form-control"
          id="last_name"
          required
          v-model="author.last_name"
          name="last_name"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="author.email"
          name="email"
        />
      </div>
      
      <div class="form-group">
        <label for="biography">Biography</label>
        <textarea
          class="form-control"
          id="biography"
          required
          v-model="author.biography"
          name="biography"
        />
      </div>

      <button @click="saveAuthor" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newAuthor">Add</button>
    </div>
  </div>
</template>

<script>
import AuthorDataService from "../services/AuthorDataService";

export default {
  name: "add-author",
  data() {
    return {
      author: {
        first_name: "",
        last_name: "",
        email: "",
        biography: "",
      },
      submitted: false
    };
  },
  methods: {
    saveAuthor() {
      var data = {
        first_name: this.author.first_name,
        last_name: this.author.last_name,
        email: this.author.email,
        biography: this.author.biography,
      };

      AuthorDataService.create(data)
        .then(response => {
          //this.author.last_name = response.data.data[0].last_name;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newAuthor() {
      this.submitted = false;
      this.author = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
