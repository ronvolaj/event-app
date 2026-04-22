<script>
    let { form } = $props();
</script>

<h1>Login</h1>

{#if form?.error}
    <p id="warning">{form.error}</p>
{/if}

<section>
    <form method="POST" action="?/login">
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>

    <a href="/register">Don't have an account? Register here.</a>

</section>

<style>
    #warning {
        border: 1px solid red;
        background-color: red;
        padding: 25px;
        margin: 10px;
    }
</style>