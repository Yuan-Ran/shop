<template> 
  <Container>
    <div slot="self">
      <div class="detail">
        <!-- <div class="detail-search"></div> -->
        <div class="detail-pull">
          财源滚滚，大吉大利
        </div>
        <div class="user-common-ul-next">
          <ul class="user-common-ul user-common-flex">
            <li v-for="(item,index) in newArr2" :key="index">{{item}}</li>
          </ul>
          <ul class="user-common-ul user-common-flex" v-for="(items,index) in newArr[this.$route.params.id]" :key="index">
            <li v-for="(item,index) in items" :key="index">{{item}}</li>
          </ul>
        </div>
        <ul class="user-page-button">
          <li @click="minus">-</li>
          <li v-for="(item,index) in newArr" :key="index" @click="$router.push(`/usercenter/personal/detail/${index}`)">{{`${index+1}`}}</li>
          <li @click="add">+</li>
        </ul> 
      </div>
    </div>
  </Container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      id: null,
      personalData: '网络延迟...',
      UnLoad: true,
      newArr: [],
      newArr2: [],
      third:[]
    }
  },
  components: {},
  mounted () {
    this.$store.dispatch('getMockData', ()=>{
      this.newArr2 = this.$store.state.mockData.msg.personalData.second
      this.third = this.$store.state.mockData.msg.personalData.third
      this.getNewData()
    })
  },
  computed: {
    ...mapGetters(['getData'])
  },
  methods: {
    getNewData(){
      this.$nextTick(()=>{
        this.getData(4,this.third)
        this.newArr = this.$store.state.newArr 
      })
    },
    minus(){
      const id = parseInt(this.$route.params.id)
      if(id>0){
        const path = this.$route.path
        const index = path.lastIndexOf('\/')
        const a = path.slice(0,index+1)
        this.$router.push(a+(id-1))
      }
    },
    add(){
      const id = parseInt(this.$route.params.id)
      if(id < this.newArr.length-1){
        const path = this.$route.path
        const index = path.lastIndexOf('\/')
        const a = path.slice(0,index+1)
        this.$router.push(a+(id+1))
      }
    }
  }
}
</script>

<style lang='scss' scoped>
   
</style>