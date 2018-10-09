<template>
  <div class="container">
    <MusicList />
  </div>
</template>

<style lang="scss">
@import '@/common/scss/style.scss';

.container {
  .navigation{
    background:#1d1e20;
    padding: 15px;
    font-size: 14px;
    .plist{
      .item{
        text-align: center;
        vertical-align: middle;
        width: 14.28%;
        height: 30px;
        line-height: 30px;
        display: inline-block;
        color:#a1a2a2;
        &.active{
          color:#facd13;
        }
        &.more{
          background: url(../../common/assets/img/arrow-down.png) center center no-repeat;
          background-size: 14px 8px;
          display: inline-block !important;
          transition: all .2s;
        }
        &.hidden{
          display: none;
        }
      }

      &.showAll{
        .item{
          &.hidden{
            display: inline-block;
          }
          &.more{
            transform:rotate(180deg)
          }
        }
      }
    }
  }
}

@media all and (max-width: 359px){
  .container .navigation .plist .item{
    width: 16.66%;
  }
}
</style>

<script>
import MusicList from '@/common/components/music/list'

export default {
  data() {
    return {

    };
  },

  components: {
    MusicList
  },

  methods: {

  },

  created() {

  },
  mounted() {

  },
};
</script>
