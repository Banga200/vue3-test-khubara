<script setup>
import DataTable from './components/DataTable.vue';
import TreeView from './components/TreeView.vue';
import {ref} from 'vue'
// import {ref} from 'vue'
// import DatePicker from 'vue-datetime-js'

// // import DatePicker from 'vue3-datetime-js'
// const dateInput = ref()

// const date = ref(null)
// function getDate() {
//   date.value = new Intl.DateTimeFormat(
//   'ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'short',year : 'numeric'}
//   ).format(new Date(dateInput.value));
  
// }
const users = ref( [
        { Name: 'John Doe', Email: 'johndoe@example.com', City: 'New York' },
        // ... further user data
      ],)
    
</script>

<template>
   <DataTable :items="users" :columns="['الاسم', 'الإيميل', 'المدينة']" :borderColor="true"/>
   <TreeView/>
  <RouterView/>
</template>

