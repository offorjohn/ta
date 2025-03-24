<script lang="ts">
	import { goto } from '$app/navigation';

	async function logout() {
		const res = await fetch('/api/logout', { method: 'POST' });
		if (res.ok) {
			// On logout, redirect to login page
			goto('/');
		}
	}
</script>

<div class="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
	<h1 class="text-3xl font-bold mb-9">Dashboard</h1>
	<p>Welcome to your dashboard!</p>
    <button 
    on:click={logout} 
    class="mt-6 text-red-500 font-semibold px-6 py-3 rounded-lg border border-red-500 
           bg-white shadow-md hover:bg-red-100 hover:border-red-600 hover:text-red-600 
           active:bg-red-200 transition-all duration-300"
  >
    Logout
  </button>
  
</div>
