<template>
  <p>{{ $route.params.name  }} says: </p>
  <p>{{ $route.params.message}}</p>
</template>

<script>
export default {
name: 'Message'
}
</script>

<style>

</style>