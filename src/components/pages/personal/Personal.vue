<template>
  <Container>
    <div slot="self">
      <div class="personal-card user-common-flex">
        <div class="personal-card-item card-item-1" @click="$router.push('/usercenter/personal/detail')"></div>
        <div class="personal-card-item card-item-2" @click="$router.push('/usercenter/personal/withdraw')"></div>
        <div class="personal-card-item card-item-3" @click="$router.push('/usercenter/personal/withdrawbank')"></div> 
      </div>
      <div class="personal-info">
        <ul class="personal-ul user-common-flex">
          <li class="personal-li font-cursive" v-for="(item,index) in mockData.msg.personalData.first" :key="index">
            <p>
              <span>{{item.msg1}}</span>
              <span>{{item.number1}}</span>
            </p>
            <p>
              <span>{{item.msg2}}</span>
              <span>{{item.number2}}</span>
            </p>
          </li>
        </ul>
        <p class="personal-info-p">资金构成</p>
        <div class="user-common-ul-next">
          <ul class="user-common-ul user-common-flex">
            <li v-for="(item,index) in mockData.msg.personalData.second" :key="index">{{item}}</li>
          </ul>
          <ul class="user-common-ul user-common-flex" v-for="(items,index) in mockData.msg.personalData.third" :key="index">
            <li v-for="(item,index) in items" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="user-common-prompt font-cursive">
        <h2>温馨提示：</h2>
        <p>1. 提现：账户余额不为0且不预警可提现；</p>
        <p>2. 提前结束：策略余额大于当前策略金额方可提前结束；</p>
        <p>3. 提取利润：策略动态资产大于策略金额且持仓为0方可提取利润。</p>
      </div>
    </div>
  </Container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('getMockData')
  },
  computed: {
    ...mapState(['mockData'])
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
    .personal-card
    {
      margin-top:100px;
      margin-bottom: 40px;
    }
    .personal-li{
        display: inline-block;
        p{
          height: 38px;
          line-height: 38px;
          font-size: 20px;
          text-indent: 10px;
        }
      }
    .personal-card-item{
      width: 240px;
      height: 100px;
      border-radius: 10px;
      z-index: 9;
    }
    .personal-card-item:hover{
      transform: scale(1.1,1.1);
      transition: all 1s;
    }
    .card-item-1{
      background: url('../../../assets/images/card_1.png') no-repeat ;
      background-size: cover;
    }
    .card-item-2{
      background: url('../../../assets/images/card_2.png') no-repeat ;
      background-size: cover;
    }
    .card-item-3{
      background: url('../../../assets/images/card_3.png') no-repeat ;
      background-size: cover;
    }
    .personal-info{
      
      .personal-info-p{
        height: 40px;
        line-height: 32px;
        margin-top: 24px;
        color: #ff8932;
        font-family: 'microsoft-YaHei';
        font-weight: bold;
        font-size: 16px;
        text-indent: 20px;
      }
    }
    @media screen and (max-width: 900px) {
      .personal-card-item{
        width: 180px;
        height: 75px;
      }
      .personal-li{
        p{
          height: 30px;
          font-size: 14px;
        }
      }
    }
    @media screen and (max-width: 650px){
      .personal-card,
      .personal-ul{
        width: 100%;
        margin-top:20px;
      }
      .personal-card-item{
        display: inline-block;
        margin-left: 20px;
        border-radius: 5px;
        margin-top: 20px;
      }
      .personal-info{
        width: 100%;
        .personal-info-p{
          background-color: #fff!important;
          margin-bottom: 0;
        }
        .personal-li{
          width: 100%;
          p:first-child{
            background-color: rgb(203, 235, 203);
          }
          p:last-child{
            background-color: rgb(238, 206, 159);
          }
          p{
            width: 100%;
            border-bottom: 1px solid #ddd;
            span{
              display: inline-block;
              font-size: 15px;
              width: 145px;
              text-align: left;
            }
          }
        }
        .personal-info-p{
          height: 30px;
          margin-top: 0;
          line-height: 30px;
          font-size: 14px;
          background-color: #ddd;
        }
      }
    }
</style>