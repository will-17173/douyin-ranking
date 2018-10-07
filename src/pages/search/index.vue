<template>
  <div class="container">
    <div class="search-place">
      <input class="place" placeholder="搜索播主、视频、音乐" focus="true"/>
    </div>
    <div class="search-tab">
      <div class="tab-item" :class="currentTab == 0 ? 'active' : ''" @click="switchTab(0)">
        播主
      </div>
      <div class="tab-item" :class="currentTab == 1 ? 'active' : ''" @click="switchTab(1)">
        视频
      </div>
      <div class="tab-item" :class="currentTab == 2 ? 'active' : ''" @click="switchTab(2)">
        音乐
      </div>
    </div>
    <div class="content">
      <div class="tab-content caster" :class="currentTab == 0 ? 'active' : ''">
        <div class="no-result">
          <div class="result">
            <div class="img"><img src="/static/img/result.png" mode="widthFix" alt=""></div>
            <div class="text">抱歉，暂无搜索结果</div>
          </div>
          <div class="search-caster">
            <div class="flex">
              <div class="input">
                <input type="text" >
              </div>
              <div class="search-button">
                <div class="button">搜索</div>
              </div>
            </div>
            <div class="text">
              你可以尝试在下方输入抖音号ID或主页链接，系统将自动收录该抖音号以便今后查询。
            </div>
          </div>
          <div class="list-caster">
            <div class="item">
              <div class="avatar"><img src="/static/img/4.png" mode="widthFix" alt=""></div>
              <div class="info">
                <div class="info-line-1">
                  大静子 <i class="tag">网红美女</i>
                </div>
                <div class="info-line-2">抖音ID：143552456</div>
                <div class="info-line-3">12.9w 粉丝</div>
              </div>
            </div>   
          </div>
          <div class="add">
            <div class="add-button">
              添加该抖音号
            </div>
          </div>
          
          
        </div>

        <div class="list-caster">
          <div class="item">
            <div class="avatar"><img src="/static/img/4.png" mode="widthFix" alt=""></div>
            <div class="info">
              <div class="info-line-1">
                大静子 <i class="tag">网红美女</i>
              </div>
              <div class="info-line-2">抖音ID：143552456</div>
              <div class="info-line-3">12.9w 粉丝</div>
            </div>
          </div>
          <div class="item">
            <div class="avatar"><img src="/static/img/4.png" mode="widthFix" alt=""></div>
            <div class="info">
              <div class="info-line-1">
                大静子 <i class="tag">网红美女</i>
              </div>
              <div class="info-line-2">抖音ID：143552456</div>
              <div class="info-line-3">12.9w 粉丝</div>
            </div>
          </div>
          <div class="item">
            <div class="avatar"><img src="/static/img/4.png" mode="widthFix" alt=""></div>
            <div class="info">
              <div class="info-line-1">
                大静子 <i class="tag">网红美女</i>
              </div>
              <div class="info-line-2">抖音ID：143552456</div>
              <div class="info-line-3">12.9w 粉丝</div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-content video" :class="currentTab == 1 ? 'active' : ''">

      </div>
      <div class="tab-content music" :class="currentTab == 2 ? 'active' : ''">

      </div>
    </div>

  </div>
</template>

<style lang="scss">
@import '@/common/scss/style.scss';

.container {
  .search-place {
    padding: 30rpx;
    .place {
      padding-left: 30px;
      background:  #ffffff;
      border-radius: 16px;
      width: 100%;
      height: 32px;
      line-height: 32px;
      font-size:14px;
      color:#888888;
      box-sizing: border-box;
      position: relative;
      &:before{
        display: block;
        content: ' ';
        background: url(../../common/assets/img/search-icon.png) no-repeat;
        background-size: 16px 16px;
        width: 16px;
        height: 16px;
        position: absolute;
        top: 8px;
        left: 10px;
      }
    }
  }
  .search-tab{
    display: flex;
    padding: 0 15px;
    .tab-item{
      flex:1;
      text-align: center;
      color: #fff;
      height: 30px;
      line-height: 30px;
      padding-bottom: 5px;
      font-size: 16px;
      &.active{
        color:#facd13;
        border-bottom: 2px solid #facd13;
      }
    }
  }
  .content{
    padding: 0 15px;
    .tab-content{
      display: none;
      &.active{
        display: block;
      }
      &.caster{
        .no-result{
          .result{
            border-top: 1rpx solid #32333c;
            margin-top: 15px;
            text-align: center;
            padding: 25px 0 15px;
            .img{
              img{
                width: 58px;
                height: 64px;
              }
            }
            .text{
              color: #fff;
              opacity: .6;
              font-size: 14px;
              margin-top: 10px;
            }
          }
          .search-caster{
            padding: 30px 30px 20px;
            .flex{
              display: flex;
              .input{
                flex: 1;
                input{
                  background: #fff;
                  height: 31px;
                  line-height: 31px;
                  border-top-left-radius: 2px;
                  border-bottom-left-radius: 2px;
                  padding-left: 5px;
                  font-size: 14px;
                  color: #333;
                }
              }
              .search-button{
                width: 70px;
                .button{
                  width: 70px;
                  text-align: center;
                  height: 31px;
                  line-height: 31px;
                  color: #fff;
                  background:#facd13;
                  border-top-right-radius: 2px;
                  border-bottom-right-radius: 2px;
                  font-size: 14px;
                }
              }
            }
            .text{
              font-size: 14px;
              text-align: center;
              color: #fff;
              opacity: .6;
              margin-top: 10px;
            }
          }
          .add{
            text-align: center;
            margin-top: 16px;
            .add-button{
              display: inline-block;
              background:#facd13;
              border-radius:2px;
              width:110px;
              height:31px;
              line-height: 31px;
              text-align: center;
              font-size: 14px;
              color: #fff;
            }
          }
        }
      }
      .list-caster{
        border-top: 1rpx solid #32333c;
        margin-top: 15px;
        .item{
          border-bottom: 1rpx solid #32333c;
          display: flex;
          font-size: 14px;
          padding: 15px 0;
          .avatar{
            width: 60px;
            height: 60px;

            img{
              width: 60px;
              height: 60px;
              border: 1rpx solid #fff;
              border-radius: 50%;
            }
          }
          .info{
            flex:1;
             color: #fff;
             height: 60px;
             padding-left: 15px;
             [class*=info-line]{
               height: 20px;
               line-height: 20px;
             }
            .info-line-1{
             font-size: 16px;
             height: 24px;
              .tag{
                display: inline-block;
                line-height: 18px;
                height: 18px;
                font-size: 14px;
                border:1px solid #facd13;
                border-radius:2px;
                padding: 0 4px;
                color: #facd13;
                margin-left: 10px;
              }
            }
            .info-line-2{
              opacity: .6;
              font-size: 12px;
            }
            .info-line-3{
              opacity: .6;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>

<script>


export default {
  data() {
    return {
      currentTab: 0
    };
  },

  components: {

  },

  methods: {
    switchTab(i){
      this.currentTab = i;
    }
  },

  created() {},
  mounted() {
    console.log(this.$root.$mp);
  },
};
</script>
