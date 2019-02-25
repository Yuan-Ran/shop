<template>
  <div class="user-common">
    <div class="user-common-head"></div>
    <div class="user-common-container">
      <slot name="self"></slot>
      <!-- <slot neme="button"></slot> -->
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    minus(){
      const id = parseInt(this.$route.params.id)
      if(id>0){
        const path = this.$route.path
        const index = path.lastIndexOf('\/')
        const a = path.slice(0,index+1)
        this.$router.push(a+(id-1))
      }
    },
  }
}
</script>

<style lang='scss' scoped>
  @import '../../assets/css/user.scss';
  .details{
    margin-top: 50px;
    min-height: 500px;
    box-sizing: border-box;
    border-left: 20px solid #fff;
    border-right: 20px solid #fff;
    .details-search{
        width: 100%;
        height: 30px;
        background-color: lightblue;
        box-shadow:15px 20px 20px 0 #666;
        transform: skewX(-40deg);
        border-bottom-left-radius: 20px;
        margin: 50px 0 -30px -10px;
    }
    .details-pull{
      width: 100%;
      height: 80px;
    }
    .details-ul-first{
        height: 50px!important;
        background-color: orange;
        border-bottom: none!important;
        color: #fff;
    }
    .details-ul-next{
        height: 80px!important;
    }
    .user-page-button{
      margin: 60px 0 0 200px;
      li{
        display: inline-block;
        cursor: pointer;
        border: 1px solid yellowgreen;
        text-align: center;
        width: 20px;
        height: 20px;
        line-height: 20px;
        color: #666;
        background-color: lavenderblush;
      }
      li:hover{
        background-color: red;
      }
    }
  }
</style>