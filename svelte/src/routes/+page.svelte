<script>
	let todos = $state([]);
	let newTodoText = $state('');

	const fetchTodos = async () => {
		todos = await (await fetch('http://127.0.0.1:3000/todos/vue')).json();
	};

	const newTodo = () => {
		event.preventDefault();

		todos.push({
			done: false,
			text: newTodoText
		});

		newTodoText = '';
	};
</script>

<main class="p-5">
	{#await fetchTodos()}
		<span>Loading...</span>
	{:then done}
		<ul>
			{#each todos as todo}
				<li>
					<input type="checkbox" bind:checked={todo.done} />
					{todo.text}
				</li>
			{/each}
		</ul>
	{/await}

	<form onsubmit={newTodo} class="flex gap-5 mt-5">
		<input bind:value={newTodoText} class="bg-slate-200 focus:bg-slate-300 p-3 rounded-full" />
		<button class="size-12 bg-slate-300 active:bg-slate-400 rounded-full">+</button>
	</form>
</main>
