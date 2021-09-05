<script lang="ts">
  import Item from "./lib/Item.svelte";
  import List from "./lib/List.svelte";
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";

  let list = {
    todos: [
      { tid: "J---aiyznGQ", name: "Keyboard Cat", done: true },
      { tid: "z_AbfPXTKms", name: "Maru", done: false },
      { tid: "OUtn3pvWmpg", name: "Henri The Existential Cat", done: false },
    ],
  };

  function handleDelete(event) {
    list.todos = list.todos.filter((t) => t.tid != event.detail.tid);
  }

  function handleUpdate(event) {
    const { tid, done } = event.detail;
    list.todos.forEach((t, i, arr) => {
      if (t.tid == tid) {
        arr[i].done = done;
      }
    });
    list = list;
  }

  function handleAdd(event) {
    list.todos = [event.detail, ...list.todos];
  }

  function clearDone() {
    list.todos = list.todos.filter((t) => t.done === false);
  }

  $: doneCount = list.todos.filter((t) => t.done === true).length;
  $: total = list.todos.length;
</script>

<main>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header on:add={handleAdd} />
      <List on:delete={handleDelete} on:check={handleUpdate} {list} />
      <Footer {doneCount} {total} on:clear={clearDone} />
    </div>
  </div>
</main>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
