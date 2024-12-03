<script lang="ts">
let todos = $state([
	{
		done: false,
		text: 'add more todos'
	}
]);

todos[0].done = !todos[0].done;
</script>

<ul>
	{#each todos as todo}
		{todo.done} - {todo.text}
	{/each}
</ul>