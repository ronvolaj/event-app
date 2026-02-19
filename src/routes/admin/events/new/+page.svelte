<script>
    let { data } = $props();
</script>


<h1>Add New Event</h1>


<form method="POST" action="?/create">
    <div>
        <label for="name">Event Name:</label>
        <input type="text" id="name" name="name" required/>
    </div>

    <div>
        <label for="description">Description:</label>
        <textarea id="description" name="description" required></textarea>
    </div>

    <div>
        <label for="startdate">Start Date:</label>
        <input type="date" id="startdate" name="startdate" required/>
    </div>

    <div>
        <label for="starttime">Start Time:</label>
        <input type="time" id="starttime" name="starttime" required/>
    </div>

    <div>
        <label for="category">Category:</label>
        <select id="category" name="category_id" required>
            {#each data.categories as category}
                <option value={category.id}>
                    {category.name}
                </option>
            {/each}
        </select>
    </div>

    <div>
        <button type="submit">Create Event</button>
    </div>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 400px;
        margin: 0 auto;
    }

    label {
        font-weight: bold;
    }

    input, textarea, select {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 0.5rem 1rem;
        background-color: #007acc;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    } 
    button:hover {
        background-color: #005fa3;
    }
</style>

