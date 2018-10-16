<template>
    <div class="video-list">
        <div class="head">
            <div class="title">视频 <span class="title-number">{{total}}条</span></div>
            <div class="switch-time">
              <ul>
                <li :class="{curent: currentType == 0}" @click="filter({time: 1}, 0)">24小时</li>
                <li :class="{curent: currentType == 1}" @click="filter({time: 2}, 1)">近7天</li>
              </ul>
            </div>
            <div class="sort">综合排序
              <ul>
                <li class="active">综合排序</li>
                <li>最多点赞</li>
              </ul>
            </div>
        </div>
        <div class="list">
            <Item v-for="item in listData" :key="item.id" :itemData="item" />
        </div>
    </div>
</template>

<style lang="scss">
.video-list{
    background: #24252a;
    padding:0 15px;
    .head{ 
        height: 27px;
        padding: 11px 0;
        border-bottom: 1px solid #32333c;
        color: #fff;
        font-size:12px;
        color:#888888;
        display: flex;
        .title{ 
          font-size: 16px;
          line-height: 27px;
          color:#ffffff;
          flex: 1;}
        .title-number{
          font-size:12px;
          color:#888888;
          }
        .switch-time{
          flex: 1;
          ul{ 
            background:#32333c;
            border-radius:16px;
            width:108px;
            height:23px;
            font-size:11px;
            color:#ffffff;
            display: block;
            padding:2px 3px; }
          li{ text-align: center;
            float: left;
            width: 50%;
            line-height: 23px;
            }
          .curent{
            background:#24252a;
            border-radius:32px;
            width:52px;
            line-height: 23px;
            display: inline-block;
            text-align:center;
          }
        }
        .sort{
          width:80px;
          position: relative;
          line-height: 27px;
          text-align: right;
          padding-right: 20px;
          box-sizing: content-box;
          &::after{ 
            display: block;
            content: ' ';
            position: absolute;
            top: 11px;
            right:0;
            background: url(../../assets/img/arrow-down.png) center right no-repeat;
            background-size: 11px 6px;
            width: 11px;
            height: 6px;
            transition: all .2s; 
          }
          ul{
            position: absolute;
            top: 35px;
            left: 50%;
            margin-left: -40px;
            width: 100px;
            border: 1px solid #32333c;
            background:#24252a;
            border-radius: 4px;
            li{ 
              border-bottom: 1px solid #32333c; 
              text-align: center;
              line-height: 30px;
              &.active{
                color: #fff !important;
              }
            }
            &::before{
              content:"";
              width:0;
              height:0;
              position:absolute;
              left:46px;
              top:-6px;
              border-left:solid 7px transparent;
              border-bottom:solid 7px #32333c;
              border-right:solid 7px transparent;
            }
            &:after{
              content:"";
              width:0;
              height:0;
              position:absolute;
              left:47px;
              top:-5px;
              border-left:solid 6px transparent;
              border-bottom:solid 6px #24252a;
              border-right:solid 6px transparent;
            }
          }
        }
    }
}
</style>

<script>
import Item from "./item";
export default {
  data(){
    return {
      currentType: 0
    }
  },
  props: {
    listData: {
      type: Array
    },
    total: {
      type: Number
    }
  },
  components: {
    Item
  },
  methods: {
    filter(param, tabIndex){
      this.currentType = tabIndex;
      this.$bus.$emit('filter', param);
    }
  }
};
</script>