<template>
    <div class="rank-list">
        <div class="head">
            <div class="title">播主榜单</div>
            <div class="switch-time">
              <ul>
                <li class="curent">综合榜</li>
                <li>上升榜</li>
              </ul>
            </div>
            <div class="sort">日榜</div>
        </div>
        <div class="list">
            <Item />
        </div>
    </div>
</template>

<style lang="scss">
.rank-list{
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
        }
    }
}
</style>

<script>
import Item from "./item";
export default {
  components: {
    Item
  }
};
</script>