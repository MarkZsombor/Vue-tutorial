<template>
  <div>
    <h1>Items</h1>
    <div class="row">
      <div class="col-md-8"></div>
      <div class="col-md-4">
        <router-link :to="{ name: 'CreateItem' }" class="btn btn-primary">Create Item</router-link>
      </div>
    </div><br />

    <table class="table table-hover">
      <thread>
      <tr>
        <td>ID</td>
        <td>Item Name</td>
        <td>Item Price</td>
        <td>Actions</td>
      </tr>
      </thread>

      <tbody>
        <tr v-for="item in items">
          <td>{{ item._id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        items: []
      }
    },
    created: function() {
      this.fetchItems();
    },
    methods: {
      fetchItems() {
        let uri = 'http://localhost:4000/items';
        this.axios.get(uri).then((response) => {
          this.items = response.data;
        });
      }
    }
  }
</script>