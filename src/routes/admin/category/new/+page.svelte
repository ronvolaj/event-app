<h1>Add New Category</h1>

<form method="POST" action="?/create">
    <div>
        <label for="name">Category Name:</label>
        <input type="text" id="name" name="name" required/>
    </div>

    <div>
        <button type="submit">Create Category</button>
    </div>
</form>


<style>
h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

form {
  max-width: 420px;
  background: #54a1ee;
  padding: 24px;
  border-radius: 12px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 14px;
  border-radius: 8px;
}

button {
  width: 100%;
  background: #16a34a;
  color: rgb(78, 154, 236);
  padding: 12px;
  border-radius: 8px;
}

button:hover {
  background: #15803d;
}
</style>
