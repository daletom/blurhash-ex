<template>
  <section>
    <div v-for="(image, idx) in images" :key="idx">
      <blur-hash-image
        width="400"
        height="300"
        :hash="image.bhash"
        :src="image.url"
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
      {
        url: 'https://images.unsplash.com/photo-1545910684-8e7c081be9b0?fit=crop&w=400&h=300&q=80',
        bhash: ''
      },
      {
        url: 'https://images.unsplash.com/photo-1601758260892-a62c486ace97?fit=crop&w=400&h=300&q=80',
        bhash: ''
      }
    ],
  }
},
asyncComputed: {
  async getBlurhash() {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const blurhashifications = this.images.map((img, i) => {
      return fetch(img.url + '&fm=blurhash', requestOptions)
        .then((res) => res.text())
        .then((bhash) => {
          console.log('Eloi, Eloi, lama sabachthani', bhash)
          this.images[i].bhash = bhash
        })
    })
    return await Promise.all(blurhashifications).catch((error) => console.log("error", error));
  },
},
  /*computed: {
    getBlurhash() {
      return this.image + "&fm=blurhash";
    }
  },
  created: {
    getBlurry() {
      return this.image + "&fm=blurhash";
    }
    storeBlur() {
      return fetch(this.image + "&fm=blurhash")
      .then(response => response.data)
      //.then(data => (this.blurred = data.total))
      //return this.blurred;
    }
  }*/
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
