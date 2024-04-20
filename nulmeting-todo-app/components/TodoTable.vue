<template>
  <table>
    <tr>
      <th>Verantwoordelijke</th>
      <th>Deadline</th>
      <th>Omschrijving</th>
    </tr>
    <tr v-for="todoItem in todoItems">
      <td>{{todoItem.assignee}}</td>
      <td>{{todoItem.dueDateTime}}</td>
      <td>{{todoItem.description}}</td>
    </tr>
  </table>  
</template>

<script setup lang="ts">
import { useTodoStore } from '~/stores/todoStore';
const todoStore = useTodoStore();

const todoItems = computed(() => {
  return todoStore.todoItems;
});
</script>

<style>
table{
    width: 60%;
    table-layout: fixed;
}
tr:nth-child(even) {
    background-color: #f2f2f2;
}
th, td {
    text-align: left;
}
</style>