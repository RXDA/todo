import { writable } from "svelte/store";

export let todos = writable({
    todos: [
      { tid: "J---aiyznGQ", name: "Keyboard Cat", done: true },
      { tid: "z_AbfPXTKms", name: "Maru", done: false },
      { tid: "OUtn3pvWmpg", name: "Henri The Existential Cat", done: false },
    ],
  })