<template>
  <div class="container">
    <div class="navigation">
      <ul class="plist" :class="{showAll: showAllCategories}">
        <li class="item" :class="{active: currentCategory === null}" @click="switchCategory(null)">全部</li>
        <li class="item" :class="{active: currentCategory === item.id, hidden: index >= maxCategoriesNum }" v-for="(item, index) in categories" :key="index" @click="switchCategory(item.id)">{{item.name}}</li>
        <li class="item more" @click="showMoreCategories"></li>
      </ul>
    </div>
    <div class="content">
      <RankList />
    </div>
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
import SYSTEM from '@/utils/system';
import RankList from '@/common/components/rank/list'

export default {
  data() {
    return {
      currentCategory: null,
      showAllCategories: false,
      maxCategoriesNum: 12,
      categories: [
        {
          id: 0,
          name: '美女'
        },
        {
          id: 1,
          name: '帅哥'
        },
        {
          id: 2,
          name: '宠物'
        },
        {
          id: 3,
          name: '情感'
        },
        {
          id: 4,
          name: '搞笑'
        },
        {
          id: 5,
          name: '创意'
        },
        {
          id: 6,
          name: '美女'
        },
        {
          id: 7,
          name: '帅哥'
        },
        {
          id: 8,
          name: '宠物'
        },
        {
          id: 9,
          name: '情感'
        },
        {
          id: 10,
          name: '搞笑'
        },
        {
          id: 11,
          name: '创意'
        },
        {
          id: 12,
          name: '美女'
        },
        {
          id: 13,
          name: '帅哥'
        },
        {
          id: 14,
          name: '宠物'
        },
        {
          id: 15,
          name: '情感'
        },
        {
          id: 16,
          name: '搞笑'
        },
        {
          id: 17,
          name: '创意'
        }
      ]
    };
  },

  components: {
    RankList
  },

  methods: {
    switchCategory(id){
      this.currentCategory = id;
    },
    showMoreCategories(){
      this.showAllCategories = !this.showAllCategories;
    }
  },

  created() {
    if(SYSTEM.WIN_WIDTH < 360){
      this.maxCategoriesNum = 10;
    }
  },
  mounted() {

  },
};
</script>
