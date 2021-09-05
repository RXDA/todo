<script lang="ts">
  import Item from "./Item.svelte";
  
  export let list = {
    todos: [
      { tid: "J---aiyznGQ", name: "Keyboard Cat", done: true },
      { tid: "z_AbfPXTKms", name: "Maru", done: false },
      { tid: "OUtn3pvWmpg", name: "Henri The Existential Cat", done: false },
    ],
  };
  // 空白样式
  $: ulClass = list.todos.length == 0 ? "todo-empty" : "todo-main";
</script>

<ul class={ulClass}>
  <!-- {#each $todos.todos as item (item.tid)} -->
  {#each list.todos as item (item.tid)}
    <Item {...item} on:delete on:check />
  {/each}
</ul>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
