<template>
  <div class="pay-button" :style="extraClass ? extraClass : ''">
    <button>{{ buttonTitle }}</button>
  </div>
</template>
<script setup>
defineProps(['extraClass', 'buttonTitle'])
</script>
<style lang="scss">
.pay-button {
  button {
    width: 100%;
    max-width: 99px;
    background-color: #6d5bd0;
    min-height: 39px;
    border-radius: 6px;
    color: white;
    border: none;
    cursor: pointer;
    @media screen and (max-width: 650px) {
      max-width: 100px;
      font-size: 12px;
      min-height: auto;
      height: 40px;
    }
  }
}
</style>
