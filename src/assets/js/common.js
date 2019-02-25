export default{
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