<template>
  <div class="container">
    <MusicList />
  </div>
</template>

<style lang="scss">
@import '@/common/scss/style.scss';

.container {

}
</style>

<script>
import MusicList from '@/common/components/music/list'

export default {
  data() {
    return {};
  },

  components: {
    MusicList
  },

  methods: {
  },

  created() {},
  mounted() {
  },
};
</script>
