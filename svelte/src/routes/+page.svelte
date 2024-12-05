<script lang="ts">
	const todos = $state([
		{
			done: false,
			text: 'add more todos'
		}
	]);

	let newTodoText = $state('');

	const newTodo = (event: SubmitEvent) => {
		event.preventDefault();

		todos.push({
			done: false,
			text: newTodoText
		});

		newTodoText = '';
	};
</script>

<main class="p-5">
	<ul>
		{#each todos as todo}
			<li>
				<input type="checkbox" bind:checked={todo.done} />
				{todo.text}
			</li>
		{/each}
	</ul>

	<form onsubmit={newTodo} class="flex gap-5 mt-5">
		<input bind:value={newTodoText} class="bg-slate-200 focus:bg-slate-300 p-3 rounded-full" />
		<button class="size-12 bg-slate-300 active:bg-slate-400 rounded-full">+</button>
	</form>
</main>
