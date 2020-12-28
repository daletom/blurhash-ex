<template>
  <section>
    <div v-for="image in images" :key="image">
      <h2>{{ blurred }}</h2>
      <blur-hash-image
        width="400"
        height="300"
        hash="LdHfL}oJR$WBKnfi%3ofT0kCM{ay"
        :src="image"
        alt="green lawn grass during daytime"
        class="gallery-image"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      images: [
        "https://images.unsplash.com/photo-1545910684-8e7c081be9b0?auto=format&fit=crop&w=400&h=300&q=80",
        "https://images.unsplash.com/photo-1601758260892-a62c486ace97?auto=format&fit=crop&w=400&h=300&q=80"
      ],
      blurred: []
    };
  },
  computed: {
    getBlurhash() {
      return this.image + "&fm=blurhash";
    }
  },
  created: {
    storeBlur() {
      fetch(this.image + "&fm=blurhash")
      .then(response => response.json())
      .then(data => (this.blurred = data.total))
      return this.blurred;
    }
  }
};
</script>
<style scoped>
.gallery-image {
  width: 400px;
  height: 300px;
}

img {
  display: block;
  float: none;
}
</style>
