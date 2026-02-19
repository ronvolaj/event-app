<script>
    let { data } = $props();
</script>

<h1>{data.event.name}</h1>
<h2>{data.event.description}</h2>
<h1>{data.event.startdate}</h1>
<h1>{data.event.starttime}</h1>

<style>
h1 {
  font-size: 32px;
  margin-bottom: 6px;
}

h2 {
  font-size: 18px;
  color: #6b7280;
  margin-bottom: 20px;
}
</style>