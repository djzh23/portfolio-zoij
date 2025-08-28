<script>
  import '../app.css';
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="app-container">
  <slot />
</div>

<style>
  .app-container {
    min-height: 100vh;
    overflow-x: hidden;
  }
</style>