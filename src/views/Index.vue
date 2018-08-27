<template>
    <div class="index">
      <Header :text="'合享驾培'"  :handle="false" :backable="false" ></Header>
      <div class="content">
        <div class="statistics">
          <div class="stu-total">学员总数: <span class="num">60</span></div>
          <div class="analyze">
            <div class="">
              <div>今日预约</div>
              <div>20</div>
            </div> <div>
            <div>今日报名</div>
            <div>10</div>
          </div> <div>
            <div>空闲课时(小时)</div>
            <div>24</div>
          </div>
          </div>
        </div>
        <div class="task">
          <div class="task-items">
            <label>待审核</label>
            <span>14</span>
          </div>
          <div class="task-items">
            <label>待接送</label>
            <span>6</span>
          </div>
        </div>
        <div class="modules">
          <div class="items" v-for="item in moduleData">
            <div><img :src="item.src" alt=""></div>
            <div class="title">{{item.name}}</div>
          </div>
        </div>
        <div class="push-content">
          <mt-cell title="平台推送内容"  is-link>
          <span>推荐、咨询、视频等</span>
          <img slot="icon" src="http://img1.3lian.com/2015/a1/37/d/16.jpg" width="24" height="24">
        </mt-cell>
        </div>
      </div>
    </div>
</template>
<style lang="scss">
    @import "../styles/style";
  .index .content .statistics{
    background: linear-gradient(180deg, #99CC66,#65a921);
    border-radius: 20px;
    margin: 40px 20px;
    padding:40px 20px;
    color: #fff;
  }
  .index .content .statistics .stu-total{
    font-size: $fontSize16; /*no*/
  }
  .index .content .statistics .num{
    padding-left: 10px;
  }
  .index .content .statistics .analyze{
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 40px 0 0;
  }
  .index .content .statistics .analyze div{
    padding: 10px;
    font-size: $fontSize13;/*no*/
  }
  .index .content .task{
    display: flex;
    justify-content: space-between;
    padding: 40px 50px;
    margin: 20px 0;
    background-color: #fff;
    text-align: center;
    flex:1;
    height: 110px;
    line-height: 30px;
    font-size: $fontSize15;/*no*/
    box-sizing: border-box;
  }
  .index .content .task .task-items{
    width: 50%;
    position: relative;
  }
  .index .content .task .task-items:first-child{
    border-right:1px solid $grayColor ;/*no*/
  }
  .index .content .modules{
    background-color: #fff;
    padding: 40px 20px;
    display: flex;
    flex-wrap: wrap
  }
  .index .content .modules .items{
    width: 157px;
    height: 170px;
    margin: 20px 10px;
    text-align: center;
  }
  .index .content .modules .items:active{
    opacity: 0.5;
  }

  .index .content .modules .items img{
    width: 100%;
    height: 130px;
    margin-bottom: 10px;
  }
  .index .content .modules .items .title{
    height: 30px;
  }

  .index .content .push-content{
    margin: 20px 0;
  }
</style>
<script>
    export default ({
        data:function () {
            return {
              isTransparent:false,
              moduleData:[
                {
                  src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533880966530&di=6afff68f5200deb157db1244e5db9933&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F58b633f91106a.jpg',
                  name:'班次管理'
                },
                {
                  src:'http://a.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd595c64c185dda81cb38db3d40.jpg',
                  name:'套餐管理'
                },
                {
                  src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533881531140&di=a7df18c9dd6021a4085953a44286e2d4&imgtype=0&src=http%3A%2F%2Fs8.sinaimg.cn%2Fmiddle%2F8ee3e0acxb0171b491f27%26690',
                  name:'场地管理'
                },
                {
                  src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3738895404,4233994017&fm=15&gp=0.jpg',
                  name:'车辆管理'
                },
                {
                  src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533881701449&di=0ca7e9595cd8faf47980323fe39841e0&imgtype=0&src=http%3A%2F%2Fimg1qn.moko.cc%2F2016-07-26%2F79726bdb-2247-4db6-ac16-6d170dc48982.jpg%3FimageView2%2F2%2Fw%2F915%2Fh%2F915',
                  name:'预约审核'
                },
                {
                  src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533881667988&di=4ec7ebb436ea3dd50ce2115a2da9c90c&imgtype=0&src=http%3A%2F%2Flol.91danji.com%2FUploadFile%2F20141128%2F1417165228238101.jpg',
                  name:'接送管理'
                },
                {
                  src:'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1533871781&di=050dcc37b32e091976f311b1c579d79a&src=http://pic.yesky.com/uploadImages/2015/163/14/IOGH1907JNL1.jpg',
                  name:'营销管理'
                },
                {
                  src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=780158400,2072709799&fm=15&gp=0.jpg',
                  name:'学员管理'
                },
              ]
            }
        },
        methods:{

        }
    })
</script>
