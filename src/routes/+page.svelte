<script>
    let { data } = $props();
</script>
 
<h1>Events</h1>
<h2>{data.pageTitle}</h2>
 
{#each data.event as event}
    <a href={"/events/" + event.id}>
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <p>Category: {event.category_name}</p>
    </a>
{/each}

<h1>Manage Categories</h1>

{#each data.categories as category}
    <div>
        <p>{category.name}</p>
        <a href={`/admin/category/${category.id}`}>Edit</a>
    </div>
{/each}

<style>
    h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    a {
        text-decoration: none;
        color: inherit;
        border: 1px solid #ccc;
        padding: 1rem;
        border-radius: 4px;
        display: block;
        margin-bottom: 1rem;
    }

    a:hover {
        background-color: #f0f0f0;
    }
    div {
        border: 1px solid #ccc;
        padding: 1rem;
        border-radius: 4px;
        margin-bottom: 1rem;
    }
    div a {
        margin-top: 0.5rem;
        display: inline-block;
    }
</style>