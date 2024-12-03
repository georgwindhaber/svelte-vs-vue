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

<main>
	<ul>
		{#each todos as todo}
			<li>
				{todo.done} - {todo.text}
			</li>
		{/each}
	</ul>

	<form onsubmit={newTodo}>
		<input bind:value={newTodoText} />
	</form>
</main>
