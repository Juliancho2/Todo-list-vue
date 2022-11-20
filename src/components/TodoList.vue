<script setup>
import FormList from './FormList.vue';
import ListTodo from './ListTodo.vue';
import TableList from './TableList.vue';
import Footer from './Footer.vue';




</script>

<template>
  <div class="todo-list">
    <FormList/>
    <TableList />
    <ListTodo/>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.todo-list {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
}
</style>