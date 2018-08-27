<template>
  <div id="app">
    <transition :name="animate" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <div class="tab">
      <router-link class="item" :class="active === 1 ? 'active':''" to="/" @click.native="tabEvent(1)">
        <div class="img-content">
          <img slot="icon" src="http://pic30.nipic.com/20130625/7447430_154310311000_2.jpg">
        </div>
        <div class="tab-label">首页</div>
      </router-link>
      <router-link  class="item" :class="active === 2 ? 'active':''" to="/msg" @click.native="tabEvent(2)">
        <div class="img-content">
          <img slot="icon" src="http://pic29.nipic.com/20130529/7447430_172314315000_2.jpg">
        </div>
        <div class="tab-label">消息</div>
      </router-link >
      <router-link  class="item" :class="active === 3 ? 'active':''" to="/center" @click.native="tabEvent(3)">
        <div class="img-content">
          <img slot="icon" src="http://img1.3lian.com/2015/a1/37/d/16.jpg">
        </div>
        <div class="tab-label">个人</div>
      </router-link >
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      animate: "left-fade",
      active:1
    }
  },
  methods:{
    tabEvent:function(id){
        this.active = id;
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.meta.value === from.meta.value) {
        this.animate = "fade";
      } else if(to.meta.value > from.meta.value){
        this.animate = "left-fade";
      } else {
        this.animate = "right-fade";
      }
    }
  }
}
</script>

<style lang="scss">
@import "styles/style.scss";

#app {
  width: 100%;
  height: 100vh;
  background: #efefef;
  overflow: hidden;
}
  #app .tab{
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left:0;
    right: 0;
    height: 90px;
    line-height: 90px;
    text-align: center;
    background-color: #fff;
  }

  #app .tab .item{
    flex: 1;
    padding: 14px 0;
  }
  #app .tab .item  .img-content {
    width: 34px;
    height: 34px;
    margin: 0 auto 5px;
  }

#app .tab .item  .img-content img{
  width: 100%;
  height: 100%;
  display: block;
  margin: auto;
}
#app .tab .item .tab-label{
  line-height: 1;
  color: #000000;
}
#app .tab .item:active{
  opacity: 0.7;
  color: $grayColor;

}
#app .tab .active .tab-label{
    color: $grayColor;
  }

</style>
