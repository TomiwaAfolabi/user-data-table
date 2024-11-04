<template>
  <div class="filter-container">
    <div class="filter-button" @click="toggleFilter">
      <div>
        <img src="../../assets/icons/filter-icon.png" alt="filter-icon" />
      </div>
      <p>Filter</p>
    </div>
    <div v-if="showFilter" class="filter-dropdown">
      <p>SORT BY:</p>
      <div class="dropdown">
        <p>Default</p>
        <input
          type="radio"
          id="default"
          v-model="sortType"
          value="default"
          name="default"
          @click="$emit('sortedtype', sortType)"
        />
      </div>
      <div class="dropdown">
        <p>First Name</p>
        <input
          type="radio"
          id="firstname"
          v-model="sortType"
          name="firstname"
          value="firstname"
          @click="$emit('sortedtype', sortType)"
        />
      </div>
      <div class="dropdown">
        <p>Last Name</p>
        <input
          type="radio"
          id="lastname"
          v-model="sortType"
          name="lastname"
          value="lastname"
          @click="$emit('sortedtype', sortType)"
        />
      </div>
      <div class="dropdown">
        <p>Due Date</p>
        <input
          type="radio"
          id="duedate"
          v-model="sortType"
          name="duedate"
          value="duedate"
          @click="$emit('sortedtype', sortType)"
        />
      </div>
      <div class="dropdown">
        <p>Last Login</p>
        <input
          type="radio"
          id="lastlogin"
          v-model="sortType"
          name="lastlogin"
          value="lastlogin"
          @click="$emit('sortedtype', sortType)"
        />
      </div>
      <p>USERS:</p>
      <div class="dropdown">
        <p>All</p>
        <input
          type="radio"
          id="all"
          v-model="sortType"
          name="all"
          value="all"
          @click="$emit('sortedtype', sortType)"
        />
      </div>
      <div class="dropdown">
        <p>Active</p>
        <input
          type="radio"
          id="active"
          v-model="sortType"
          name="Active"
          value="Active"
          @click="$emit('sortedtype', sortType)"
        />
      </div>
      <div class="dropdown">
        <p>Inactive</p>
        <input
          type="radio"
          id="inactive"
          v-model="sortType"
          name="Inactive"
          value="Inactive"
          @click="$emit('sortedtype', sortType)"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const sortType = ref('default')
const showFilter = ref(false)
function toggleFilter() {
  showFilter.value = !showFilter.value
}
</script>
<style lang="scss">
.filter-container {
  width: 100%;
  position: relative;
  .filter-button {
    width: 100%;
    background-color: #ffffff;
    display: flex;
    max-width: 88px;
    align-items: center;
    justify-content: center;
    border: solid 2px #c6c2de;
    border-radius: 6px;
    padding: 5px;
    gap: 8px;

    @media screen and (max-width: 650px) {
      max-width: 55px;
      font-size: 12px;
      gap: 5px;
      height: 30px;
    }
    div {
      img {
        @media screen and (max-width: 650px) {
          width: 13px;
        }
      }
    }
    p {
      @media screen and (max-width: 650px) {
        font-size: 10px;
      }
    }
  }

  .filter-button:hover {
    cursor: pointer;
  }
  .filter-dropdown {
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0px;
    max-width: 224px;
    background-color: #ffffff;
    height: 307px;
    border: solid 1px #c6c2de;
    border-radius: 6px;
    line-height: 2px;
    p {
      color: #6e6893;
      font-size: 12px;
      padding-left: 20px;
    }
    .dropdown {
      display: flex;
      justify-content: space-between;
      padding-right: 20px;
      p {
        font-size: 14px;
        font-weight: 400;
        color: #25213b;
      }
      input {
        cursor: pointer;
        color: #6d5bd0;
      }
    }
  }
}
</style>
