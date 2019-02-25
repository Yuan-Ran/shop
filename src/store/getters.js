export default{
    getData: (state)=> (num,data=[]) => {
        let arr = [],
        newArr = [],
        len = data.length,
        h = len/num
        data.forEach(element => {
            arr.push(element)
            len -= 1
            if(arr.length >= num || (newArr.length < h && len == 0 )){
                newArr.push(arr)
                arr = []
            }
            return state.newArr = newArr
        })
        console.log(len,h,newArr.length)
        console.log(state.newArr)
    } 
}