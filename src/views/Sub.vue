<template>
  <div class="sub">
    <h1>서브</h1>
    <p class="red">
      레드
      <span>(레드 내부 퍼플)</span>
    </p>
    <p class="green">그린</p>
    <p class="blue">블루</p>
  </div>
</template>

<style scoped lang="scss">
.sub {
  margin: 20px;
}
.red {
  color: red;

  span {
    color: purple;
  }
}
.green {
  color: green;
}
.blue {
  color: blue;
}
</style>