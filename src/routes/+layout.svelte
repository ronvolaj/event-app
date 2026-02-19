<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}


<footer>
    <div>
        <h2>Contact</h2>
        <a href="ronvolaj8@gmail.com">Write a mail!</a>
    </div>
    <div>
        <h3>Admin</h3>
        <a href="/admin">Go to admin area</a>
    </div>
</footer>

<style>
div {
  display: flex;
  gap: 16px;
  padding: 20px;
  flex-wrap: wrap;
}

a {
  background: white;
  padding: 12px 18px;
  border-radius: 10px;
  text-decoration: none;
  color: #2563eb;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

a:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.1);
}
</style>