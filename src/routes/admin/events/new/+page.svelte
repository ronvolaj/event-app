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
    <label for="image" class="block mb-1 font-medium">Image</label>

    <input type="file" id="image" name="image" accept="image/*" class="w-full border rounded p-2" >
</div>

    <div>
        <button type="submit">Create Event</button>
    </div>
</form>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

    {#each data.events as event}

        <div class="bg-white rounded-xl shadow overflow-hidden">

            {#if event.image_url}
                <img
                    src={event.image_url}
                    alt={event.name}
                    class="w-full h-56 object-cover"
                >
            {/if}

            <div class="p-4">

                <h2 class="text-xl font-bold mb-2">
                    {event.name}
                </h2>

                <p class="text-gray-600 mb-2">
                    {event.description}
                </p>

                <p class="text-sm text-gray-500 mb-4">
                    {event.startdate} — {event.starttime}
                </p>

                <form method="POST" action="?/delete">

                    <input
                        type="hidden"
                        name="id"
                        value={event.id}
                    >

                    <button
                        type="submit"
                        class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                    >
                        Delete Event
                    </button>

                </form>

            </div>

        </div>

    {/each}

</div>

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

