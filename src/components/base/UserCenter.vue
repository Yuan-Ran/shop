<template>
  <div v-show="userCenterShow" class="usercenter" ref="usercenter">
    <div class="usercenter-logo">
      <img src="../../assets/images/usercenter-logo.png">
    </div>
    <ul class="usercenter-info">
      <li>
        <router-link class="usercenter-info-icon" to="/usercenter/personal">
          <i class="iconfont icon-zhuye"></i>
        </router-link>
      </li>
      <li>
        <router-link class="usercenter-info-icon" :class="{'usercenter-info-active':isShow}" to="/usercenter/business/buy">
          <i class="iconfont icon-jiaoyijilu"></i>
        </router-link>
      </li>
      <li class="business-container" v-show="isShow">
        <ul>
          <li @click="goTo(index)" class="usercenter-info-business" v-for="(item,index) in business"
          :key="index" :class="{'usercenter-info-business-active': `/usercenter/business/${item.id}`===$route.path}">{{item.title}}</li>
        </ul>
      </li>
      <li>
        <router-link class="usercenter-info-icon" to="/usercenter/card">
          <i class="iconfont icon-icon-test"></i>
        </router-link>
      </li>
      <li>
        <router-link class="usercenter-info-icon" to="/usercenter/password">
          <i class="iconfont icon-shezhi"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      business: [
        {
          title: '买入',
          id: 'buy'
        },
        {
          title: '卖出',
          id: 'sell'
        },
        {
          title: '撤单',
          id: 'back'
        },
        {
          title: '今日委托',
          id: 'today'
        },
        {
          title: '历史委托',
          id: 'history'
        }
      ]
    };
  },
  components: {},
  mounted () {
    
  },
  computed: {
    isShow: function(){
      const pattern = /^\/usercenter\/business/
      return pattern.test(this.$route.path.toString())
    },
    userCenterShow: function(){
      const pattern = /^\/usercenter/
      return pattern.test(this.$route.path.toString())
    }
  },
  methods: {
    goTo: function(index){
      const id = this.business[index].id
      this.$router.push(`/usercenter/business/${id}`)
    }
  }
}
</script>

<style lang='scss' scoped>
  .usercenter{
    float: left;
    width: 100px;
    height: 100%;
    box-shadow: 0 10px 20px 0 #000;
    background-color:#252d3d;
    .usercenter-logo{
      width: 100%;
      height: 80px;
      text-align: center;
      img{
        margin-top: 20px;
      }
    }
    .usercenter-info-icon{
      display: block;
      text-align: center;
      width: 100%;
      height: 60px;
      line-height: 60px;
      i{
        font-size: 30px;
        color: rgb(123, 181, 247);
      }
    }
    .usercenter-info-icon:hover{
      background-color: rgba(23,34,57,.3); 
    }
    .usercenter-info-active{
      background-color: #172239;
    }
    
    .usercenter-info-active:after{
      content: '';
      display: inline-block;
      position: absolute;
      left: 0;
      width: 4px;
      height: 60px;
      background-color: #ff8932;
    }
    //business
    .usercenter-info-business{
      text-align: center;
      width: 100%;
      overflow-x: hidden;
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      color: #fff;
      cursor: pointer;
      background-color: rgba(23,34,57,.8); 
    }
    .usercenter-info-business:hover{
      background-color: rgba(23,34,57,.1);
    }
    .usercenter-info-business-active{
      color: #ff8932;
      background-color: rgba(23,34,57,.5);
    }
  }
  @media screen and (max-width: 650px){
      .usercenter{
        display: flex;
        min-height: 0;
        flex-wrap: nowrap;
        width: 100vw;
        height: 60px;
        overflow-x: hidden;
        .usercenter-logo{
          width: 80px;
          height: 60px;
          img{
            margin-top: 10px;
          }
        }
        .usercenter-info li{display: inline-block;}
        .usercenter-info-icon{
          width:  100px;
          height: 60px;
          line-height: 60px;
        }
        .usercenter-info-active:after{
          display: none;
        }
    //business
        .business-container{
          width: 100%;
          left: 0;
          top: 60px;
          position: absolute;
          display: flex;
          .usercenter-info-business{
            width: 20%;
            display: inline-block;
            background-color: #2a395a;
          }
          .usercenter-info-business:hover{
            background-color: rgba(14, 38, 90, 0.8);
    }
        }
      }
    }
    @media screen and (max-width: 500px) {
      .usercenter{
        .usercenter-info-icon{
          width:  50px;
          height: 60px;
          line-height: 60px;
        }
      }
      
    }
</style>