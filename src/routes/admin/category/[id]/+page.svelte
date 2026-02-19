<script>
    let { data } = $props();
</script>

<h1>Edit Category</h1>

<form method="POST" action="?/edit">
    <div>
        <label for="name">Category Name:</label>
        <input type="text" id="name" name="name" required value={data.category.name}/>
    </div>

    <div>
        <button type="submit">Update Category</button>
    </div>
</form>


<style>
h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

form {
  max-width: 420px;
  background: #1182ae;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
}

div {
  margin-bottom: 16px;
}

label {
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #1182ae;
}

input:focus {
  outline: none;
  border-color: #2563eb;
}

button {
  width: 100%;
  background: #2563eb;
  color: #1182ae;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: #1e40af;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  form {
    background: #1f2937;
  }
  label, h1 {
    color: #1182ae;
  }
  input {
    background: #374151;
    color: #1182ae;
    border-color: #4b5563;
  }
}
</style>