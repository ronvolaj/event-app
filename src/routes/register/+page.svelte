<script>
    let { form } = $props();
</script>

<h1>Register</h1>

{#if form?.error}
    <p id="warning">{form.error}</p>
{/if}

<section>
    <form method="POST" action="?/register">
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
    </form>

    <a href="/login">Already have an account? Login here.</a>
</section>

<style>
    #warning {
        border: 1px solid red;
        background-color: red;
        padding: 25px;
        margin: 10px;
    }
</style>