<template>
  <div class="page-wrapper">
    <div class="element-wrapper">
      <div class="element-body">
        <h1>Todo lijst</h1>
        <LevButton @clicked="addTodo">Voeg een todo item toe</LevButton>
        <br>
        <TodoTable></TodoTable>
        <br>
        <NuxtLink to="/about">Over ons</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '~/stores/todoStore';
const todoStore = useTodoStore();

function addTodo() {
  todoStore.addItem();
}
</script>