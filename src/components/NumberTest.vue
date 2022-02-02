<template>
  <div
      class="test-number-wrapper hidden lg:block w-[20rem] h-[19rem] bg-green-500 mt-[4rem] ml-[2rem] rounded-3xl mr-[1rem]
      flex flex-col shadow-lg">
    <div class="text-[20px] m-[1rem]">Проверить номер телефона</div>
    <input v-model="req" class="mt-[1rem] w-[75%] mx-auto" placeholder="+79312678355">
    <button
        class="mt-[1rem] w-[25%] mx-auto hover:bg-indigo-500 ease-in-out delay-150 duration-300
         border-0 rounded-lg bg-green-300 h-[2rem] w-[6rem]"
        @click="makeRequest()">Submit
    </button>
    <div v-if="flag" class="mt-[1rem]">Success</div>
    <div v-if="flag">Country: {{ country }}</div>
    <div v-if="flag">Country Code: {{ code }}</div>
    <div v-if="flag === false" class="mt-[1rem]">Error</div>
  </div>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios'

export default {
  name: "NumberTest",
  setup() {
    const req = ref('');
    const country = ref('');
    const code = ref('');
    const flag = ref(undefined);
    const makeRequest = function () {
      axios.get('https://veriphone.p.rapidapi.com/verify', {
        params: {phone: req.value},
        headers: {
          'x-rapidapi-host': 'veriphone.p.rapidapi.com',
          'x-rapidapi-key': '28378676e0mshb011eb4a5272f7ep1f8eddjsnc6cc2ac86ca8'
        }
      }).then(response => {
        response.data.phone_valid === true ? flag.value = true : flag.value = false;
        country.value = response.data.country;
        code.value = response.data.country_code;
        for (let i in response.data) {
          console.log(i)
        }
        console.log(response.data)
      }).catch(e => console.log(e));
    };
    return {
      req,
      makeRequest,
      country,
      code,
      flag
    }
  }
}
</script>

<style scoped>

</style>