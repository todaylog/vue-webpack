
<template>
  <div class="home">
    <h1>홈</h1>
    <input v-model="message" type="text" />
    <h2 class="message">{{ message }}</h2>
    <hr />
    <h2>상태 관리</h2>
    Parent counter : {{ $store.state.counter }}
    <br />
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props로 전달한다. -->
    <!-- <child v-bind:num="counter"></child> -->
    <Child />
  </div>
</template>

<script>
import Child from "../components/Child.vue";

export default {
  name: "Home",
  components: {
    // Child 컴포넌트를 하위 컴포넌트로 등록
    Child,
  },
  data() {
    return {
      message: "Hello world!",
      //counter: 0,
    };
  },
  methods: {
    // 이벤트 추가
    addCounter() {
      this.$store.state.counter++;
    },
    subCounter() {
      this.$store.state.counter--;
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  margin: 20px;
}
.message {
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: blue;
}
</style>