<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search Users by Name, Email or Date"
      @input="data => searchUserData(data?.target?.value)"
    />
    <div class="icon">
      <img src="../../assets/icons/search-icon.png" alt="filter-icon" />
    </div>
  </div>
</template>
<script setup>
import { useDataStore } from '@/stores/data'

const dataStore = useDataStore()
const { searchUserData } = dataStore
</script>

<style lang="scss">
.search-bar {
  position: relative;
  width: 100%;
  max-width: 392px;
  display: flex;
  border-radius: 6px;

  input {
    width: 100%;
    max-width: 392px;
    background-color: #f4f2ff;
    border-radius: 8px;
    border: none;
    font-size: 12px;
    font-weight: 400;
    color: #6e6893;
    padding-left: 50px;
    padding-top: 7px;
  }

  input::placeholder {
    font-size: 15px;
    font-weight: 400;
    color: #6e6893;
    @media screen and (max-width: 650px) {
      font-size: 12px;
    }
  }

  input:focus {
    outline: none;
  }
  .icon {
    position: absolute;
    left: 4%;
    top: 35%;
  }
}
</style>
