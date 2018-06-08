<template>
    <div class="alert alert-dismissible " v-if="message" :class="[alertClass]" >
        <button type="button" class="close" data-dismiss="alert" @click="remove">&times;</button>
        {{ message }}
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'message',
      'alertClass'
    ])
  },
  methods: {
    ...mapMutations([
      'remove'
    ])
  }
}
</script>
