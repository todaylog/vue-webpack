<template>
  <div>
    <hr />
    Child counter : {{ $store.state.counter }}
    <br />
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  // 상위 컴포넌트에서 내려준 counter 속성을 num로 받음
  //props: ["num"],
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