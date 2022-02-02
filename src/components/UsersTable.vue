<template>
  <div class="wwrapper flex mx-[1rem]">
    <div class="wrapper w-[70rem]">
      <div class="table-name text-[30px] py-[1rem]">Таблица пользвателей</div>
      <div class="users-table-wrapper bg-red-200 border-[1px] border-slate-400 rounded-3xl shadow-lg">
        <table class="users-table w-[100%]">
          <thead>
          <tr class="flex justify-around">
            <th class="hidden md:block px-[1rem]  my-[1rem] w-[20%]">Id</th>
            <th class="px-[1rem]  my-[1rem] w-[20%]">Имя</th>
            <th class="hidden sm:block px-[1rem]  my-[1rem] w-[20%]">Почта</th>
            <th class="hidden lg:block px-[1rem]  my-[1rem] w-[20%]">Телефон</th>
            <th class="hidden 2xl:block px-[1rem]  my-[1rem] w-[20%]">Profile link</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in USERS.values()" :key="user.id" class="flex justify-around w-[100%] text-[13px]">
            <td class="hidden md:block px-[1rem] my-[1rem]  w-[20%]">{{ user.id }}</td>
            <td class="px-[1rem] my-[1rem]  w-[20%]">{{ user.name }}</td>
            <td class="hidden sm:block px-[1rem] my-[1rem]  w-[20%]">{{ user.mail }}</td>
            <td class="hidden lg:block px-[1rem] my-[1rem]  w-[20%]">{{ user.phone }}</td>
            <td class="hidden 2xl:block px-[1rem] my-[1rem]  w-[20%]"><a :href="'#/user/' + user.id">link</a></td>
          </tr>
          </tbody>
        </table>
      </div>

      <button class="add-user my-[1rem] border-0 rounded-lg h-[2rem] w-[6rem] bg-green-300 shadow-md
              hover:bg-indigo-500 ease-in-out delay-150 duration-300"
              @click="click()">Add user
      </button>


      <div v-if="active" class="add-block flex flex-col items-center">
        <input v-model="name" placeholder="Boris"
               class="w-[20rem] h-[1.5rem] my-[0.5rem] rounded-sm border-0 bg-gray-200">
        <input v-model="mail" placeholder="boris.borisov@gmail.com"
               class="w-[20rem] h-[1.5rem] my-[0.5rem] rounded-sm border-0 bg-gray-200">
        <input v-model="phone" placeholder="+79523815588"
               class="w-[20rem] h-[1.5rem] my-[0.5rem] rounded-sm border-0 bg-gray-200">
        <button
            class="submit my-[1rem] border-0 rounded-lg h-[2rem] w-[6rem] bg-green-300
            shadow-mds hover:bg-indigo-500 ease-in-out delay-150 duration-300"
            @click="addUser(ADD_USER, {name, mail, phone})">Submit
        </button>
      </div>
    </div>
    <NumberTest/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {ref} from 'vue'
import NumberTest from "@/components/NumberTest";

export default {
  name: "UsersTable",
  components: {NumberTest},
  setup() {
    const active = ref(false);
    const name = ref('');
    const mail = ref('');
    const phone = ref('');


    const addUser = function (func, obj) {
      func(obj);
      name.value = '';
      mail.value = '';
      phone.value = '';
    }
    const click = function () {
      active.value = !active.value;
    }


    return {
      active,
      name,
      mail,
      phone,
      click,
      addUser,
    }
  },
  methods: {
    ...mapActions(['ADD_USER'])
  },
  computed: {
    ...mapGetters(['USERS', 'FREE_ID'])
  }
}
</script>


<style>
button {
  transform: scale(1) translateY(0.25rem);
}

button:hover {
  transform: scale(1.2);
  background-color: indigo;
}

</style>