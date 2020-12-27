<template>
  <div>
    <blur-hash-image
      width="400"
      height="300"
      hash="LdHfL}oJR$WBKnfi%3ofT0kCM{ay"
      src="https://images.unsplash.com/photo-1545910684-8e7c081be9b0?auto=format&fit=crop&w=400&h=300&q=80"
      alt="green lawn grass during daytime"
      class="gallery-image"
    />
    <blur-hash-image
      width="400"
      height="300"
      hash="https://images.unsplash.com/photo-1601758260892-a62c486ace97?fm=blurhash&w=400&h=300&fit=crop"
      src="https://images.unsplash.com/photo-1601758260892-a62c486ace97?auto=format&fit=crop&w=400&h=300&q=80"
      alt="green lawn grass during daytime"
      class="gallery-image"
    />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped>
.gallery-image {
  width: 400px;
  height: 300px
}
</style>
