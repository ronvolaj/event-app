<script>
    let { data } = $props();
</script>

<h1>Manage Categories</h1>

<a href="/admin/category/new">
    <button>Add new Category</button>
</a>

{#each data.categories as { id, name }}
  <div>
    <p>{name}</p>

    <a href={`/admin/category/${id}`}>
      <button>Edit</button>
    </a>

    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={id} />
      <button type="submit">Delete</button>
    </form>
  </div>
{/each}

<style>
h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

div {
  background: white;
  padding: 18px;
  border-radius: 12px;
  margin-bottom: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}

p {
  font-weight: 600;
  margin-bottom: 12px;
}

button {
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
}

a > button {
  background: #2563eb;
  color: white;
}

form {
  display: inline;
}

form button {
  background: #ef4444;
  color: white;
}

form button:hover {
  background: #dc2626;
}
</style>