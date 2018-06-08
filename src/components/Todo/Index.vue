<template>
  <div>
    <h1>Todo List</h1>
    {{ countTodos }}
    <table class="table table-striped table-bordered mt-3" v-if="allTodos.length > 0">
      <thead>
      <tr>
        <th scope="col" style="width:100px" class="text-center">#</th>
        <th scope="col">Name</th>
        <th scope="col" style="width:100px" class="text-center">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, key) in allTodos" :key="key">
        <th scope="row" class="text-center">
          {{ (key + 1) }}
        </th>
        <td>
          {{ item.name }}
        </td>
        <td scope="row" class="text-center">
          <button @click.prevent="removeItem(item)" class="btn btn-danger btn-sm">x</button>
        </td>
      </tr>
      </tbody>
    </table>
    <hr>
    <div class="card mb-3" style="max-width: 20rem;">
      <div class="card-header">Item</div>
      <div class="card-body">
        <form >
          <div class="form-group">
            <input type="text" class="form-control" v-model="form.itemTodo" placeholder="Name Todo">
          </div>
          <div class="form-group">
            <button @click.prevent="newItem" class="btn btn-primary btn-block" :disabled="disableButton">add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'

export default {
  name: 'IndexTodo',
  data () {
    return {
      form: {
        itemTodo: ''
      }
    }
  },
  methods: {
    ...mapMutations([
      'notify'
    ]),
    ...mapActions([
      'storeNewItem',
      'destroyItem'
    ]),
    newItem () {
      const payload = {
        name: this.form.itemTodo
      }

      this.storeNewItem(payload)
      this.form.itemTodo = ''
      this.notify({ msg: 'Items have been added :)', type: 'success' })
    },
    removeItem (key) {
      const payload = key

      this.destroyItem(payload)
      this.notify({ msg: 'Items have been removed :)', type: 'danger' })
    }
  },
  computed: {
    ...mapGetters([
      'allTodos',
      'countTodos'
    ]),
    disableButton () {
      return this.form.itemTodo.length <= 3
    }
  }
}
</script>
