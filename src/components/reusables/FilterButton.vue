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
      <div class="dropdown" v-for="item in filterOptions" :key="item?.id">
        <p>{{ item?.label }}</p>
        <input
          type="radio"
          :id="item?.id"
          v-model="sortType"
          :value="item?.value"
          :name="item?.name"
          :checked="item?.checked"
          @input="e => $emit('sortedtype', (sortType = e.target.value))"
        />
      </div>

      <p>USERS:</p>
      <div class="dropdown" v-for="item in otherfilterOptions" :key="item?.id">
        <p>{{ item?.label }}</p>
        <input
          type="radio"
          :id="item?.id"
          v-model="sortType"
          :value="item?.value"
          :name="item?.name"
          :checked="item?.checked"
          @input="e => $emit('sortedtype', (sortType = e.target.value))"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const sortType = ref('')
const showFilter = ref(false)
const filterOptions = [
  {
    id: 'default',
    name: 'default',
    label: 'Default',
    checked: false,
    value: 'default',
  },
  {
    id: 'firstname',
    name: 'firstname',
    label: 'First Name',
    checked: false,
    value: 'firstname',
  },
  {
    id: 'lastname',
    name: 'lastname',
    label: 'Last Name',
    checked: false,
    value: 'lastname',
  },
  {
    id: 'duedate',
    name: 'duedate',
    label: 'Due Date',
    checked: false,
    value: 'duedate',
  },
  {
    id: 'lastlogin',
    name: 'lastlogin',
    label: 'Last Login',
    checked: false,
    value: 'lastlogin',
  },
]
const otherfilterOptions = [
  { id: 'all', name: 'all', label: 'All', checked: false, value: 'all' },
  {
    id: 'active',
    name: 'active',
    label: 'Active',
    checked: false,
    value: 'active',
  },
  {
    id: 'inactive',
    name: 'inactive',
    label: 'Inactive',
    checked: false,
    value: 'inactive',
  },
]

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
