<template>
  <div class="rank">
    <Title :icon="iconUrl" :moreUrl="moreUrl">
      <template slot="text">播主榜单</template>
    </Title>
    <div class="content">
      <div class="plist">
        <div class="list-item list-item1">
          <div class="col1">
            <div class="c">
              <div class="icon">
                <img src="/static/img/icon-girl.png" mode="widthFix" alt="">
                网红美女
              </div>
              <div class="text">
                上升榜
              </div>
            </div>
          </div>
          <div class="col2">
            <div class="plist">
              <div class="item item1">
                <div class="index">01.</div>
                <div class="avatar"><img src="/static/img/3.png" mode="widthFix"></div>
                <div class="name">莉哥o3o</div>
                <div class="rate">989.5</div>
              </div>
              <div class="item item2">
                <div class="index">01.</div>
                <div class="avatar"><img src="/static/img/3.png" mode="widthFix"></div>
                <div class="name">阿纯（全网男女通用脸）</div>
                <div class="rate">989.5</div>
              </div>
              <div class="item item3">
                <div class="index">01.</div>
                <div class="avatar"><img src="/static/img/3.png" mode="widthFix"></div>
                <div class="name">莉哥o3o</div>
                <div class="rate">989.5</div>
              </div>
            </div>

          </div>
        </div>
        <div class="list-item list-item2">
          <div class="col1">
            <div class="c">
              <div class="icon">
                <img src="/static/img/icon-men.png" mode="widthFix" alt="">
                网红美女
              </div>
              <div class="text">
                上升榜
              </div>
            </div>
          </div>
          <div class="col2">
            <div class="plist">
              <div class="item item1">
                <div class="index">01.</div>
                <div class="avatar"><img src="/static/img/3.png" mode="widthFix"></div>
                <div class="name">莉哥o3o</div>
                <div class="rate">989.5</div>
              </div>
              <div class="item item2">
                <div class="index">01.</div>
                <div class="avatar"><img src="/static/img/3.png" mode="widthFix"></div>
                <div class="name">阿纯（全网男女通用脸）</div>
                <div class="rate">989.5</div>
              </div>
              <div class="item item3">
                <div class="index">01.</div>
                <div class="avatar"><img src="/static/img/3.png" mode="widthFix"></div>
                <div class="name">莉哥o3o</div>
                <div class="rate">989.5</div>
              </div>
            </div>

          </div>
        </div>
        <div class="list-item list-item3">
          <div class="col1">
            <div class="c">
              <div class="icon">
                <img src="/static/img/icon-pet.png" mode="widthFix" alt="">
                宠物
              </div>
              <div class="text">
                上升榜
              </div>
            </div>
          </div>
          <div class="col2">
            <div class="plist">
              <div class="item item1">
                <div class="index">01.</div>
                <div class="avatar"><img src="/static/img/3.png" mode="widthFix"></div>
                <div class="name">莉哥o3o</div>
                <div class="rate">989.5</div>
              </div>
              <div class="item item2">
                <div class="index">01.</div>
                <div class="avatar"><img src="/static/img/3.png" mode="widthFix"></div>
                <div class="name">阿纯（全网男女通用脸）</div>
                <div class="rate">989.5</div>
              </div>
              <div class="item item3">
                <div class="index">01.</div>
                <div class="avatar"><img src="/static/img/3.png" mode="widthFix"></div>
                <div class="name">莉哥o3o</div>
                <div class="rate">989.5</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .rank{
    padding: 0 0 15px 15px;
    margin-top: 15px;
    .content{
      margin-top: 15px;
      .plist{
        .list-item{
          &.list-item2, &.list-item3{
            margin-top: 15px;
          }
          display: flex;
          .col1{
            width: 84px;
            .c{
              width: 84px;
              height: 84px;
              border-radius: 4px;
              position: relative;
              text-align: center;
              .icon{
                color: #fff;
                font-size: 14px;
                padding-top: 8px;
                img{
                  margin: 0 auto;
                  display: block;
                  margin-bottom: 8px;
                }
              }
              .text{
                height: 21px;
                line-height: 21px;
                text-align: center;
                color: #fff;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                font-size: 10px;
                opacity:0.7;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
              }
            }
          }
          .col2{
            flex: 1;
            box-sizing: border-box;
            padding-left: 10px;
            .plist{
              padding-right: 15px;
              .item{
                display: flex;
                height: 28px;
                line-height: 28px;
                .index{
                  width: 25px;
                  color: #fff;
                  font-size: 12px;
                }
                .avatar{
                  width: 25px;
                  img{
                    width: 16px;
                    height: 16px;
                    position: relative;
                    top: 2px;
                  }
                }
                .name{
                  flex: 1;
                  color: #fff;
                  font-size: 12px;
                }
                .rate{
                  width: 40px;
                  font-size: 12px;
                  color:#facd13;
                  font-weight: bold;
                  font-style: italic;
                  text-align: right;
                }
                &.item1, &.item2{
                  border-bottom:1rpx solid #32333c;
                }
              }
            }
          }

          &:nth-child(1) .col1 .c{
            background:#ff5e8e;
            img{
              width: 24px;
              height: 24px;
            }
            .text{
              background:#f05180;
            }
          }
          &:nth-child(2) .col1 .c{
            background:#4a90e2;
            img{
              width: 18px;
              height: 22px;
            }
            .text{
              background:#327bd0;
            }
          }
          &:nth-child(3) .col1 .c{
            background:#a844ff;
            img{
              width: 34px;
              height: 24px;
            }
            .text{
              background:#9631ee;
            }
          }
        }
      }
    }
  }
</style>

<script>
import Title from '@/common/components/title'

export default {
  data(){
    return {
      iconUrl: '/static/img/title-rank.png',
      moreUrl: '/pages/index/main'
    }
  },
  components: {
    Title
  }
}
</script>


