<script>
    let { children } = $props();
</script>

<header>
    <h1>Admin Dashboard</h1>
</header>

{@render children()}


<style>
header {
  background: linear-gradient(135deg, #1f2937, #111827);
  color: rgb(44, 128, 154);
  padding: 28px;
  text-align: center;
}

header h1 {
  margin: 0;
}
</style>