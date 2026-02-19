<script>
    let { data } = $props();
</script>

<h1>Edit Event</h1>

<form method="POST" action="?/edit">
    <div>
        <label for="name">Event Name:</label>
        <input type="text" id="name" name="name" required value={data.event.name}/>
    </div>

    <div>
        <label for="description">Description:</label>
        <textarea id="description" name="description" required>{data.event.description}</textarea>
    </div>

    <div>
        <label for="startdate">Start Date:</label>
        <input type="date" id="startdate" name="startdate" required value={data.event.startdate}/>
    </div>

    <div>
        <label for="starttime">Start Time:</label>
        <input type="time" id="starttime" name="starttime" required value={data.event.starttime}/>
    </div>

    <div>
        <button type="submit">Update Event</button>
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

    input, textarea {
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