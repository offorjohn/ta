<script lang="ts">
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';
	let error = '';

	async function handleSubmit(event: Event) {
		event.preventDefault();
		error = '';

		const res = await fetch('/api/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password })
		});

		if (res.ok) {
			goto('/dashboard');
		} else {
			const err = await res.json();
			error = err.error || 'Login failed';
		}
	}
</script>

<form on:submit={handleSubmit} class="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
	<h1 class="text-2xl font-bold mb-6">Login</h1>
	{#if error}
		<p class="text-red-500 mb-4">{error}</p>
	{/if}
	<div class="mb-4">
		<label class="block text-gray-700 mb-2">Username</label>
		<input
			type="text"
			bind:value={username}
			placeholder="Enter your username"
			class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
		/>
	</div>
	<div class="mb-6">
		<label class="block text-gray-700 mb-2">Password</label>
		<input
			type="password"
			bind:value={password}
			placeholder="Enter your password"
			class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
		/>
	</div>
	<button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
		Login
	</button>
</form>
