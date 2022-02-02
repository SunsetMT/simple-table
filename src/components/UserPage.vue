<template>
  <div class="user-page-wrapper flex justify-between flex-col " v-bind="u = USER($route.params.id)">
    <h1 class="user-name">Id: {{ u.id }}</h1>
    <h1 class="user-name">Name: {{ u.name }}</h1>
    <h1 class="user-name">Mail: {{ u.mail }}</h1>
    <h1 class="user-name">Phone: {{ u.phone }}</h1>
    <button class="my-[1rem] mx-auto text-[20px] border-0 rounded-lg h-[5rem] w-[10rem] bg-red-300
            shadow-mds hover:bg-red-600 ease-in-out delay-150 duration-300"
            @click="() => {DEL_USER(u.id); print()}">Удалить пользователя
    </button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "UserPage",

  computed: {
    ...mapGetters(['USER'])
  },
  methods: {
    ...mapActions(['DEL_USER']),
    print: function (){
      window.location='#'
    }
  }

}
</script>

<style scoped>

</style>