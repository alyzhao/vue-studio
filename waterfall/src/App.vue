<template>
  <div>
    <div class="waterfall">
       <div class="item">
          <div class="item-content">
             三月到大理赏樱花不远不近
          </div>
       </div>
       <div class="item">
           <div class="item-content">
              三月到大理赏樱花不远不近，才是最好的距离余生，请带上自己的阳光回忆，在部队那些日子被遗忘的花儿春光
           </div>
       </div>
       <div class="item">
          <div class="item-content">
              三月到大理赏樱花不远不近，才是最好的距离余生，请带上自己的阳光回忆
          </div>
       </div>
    </div> 

  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: []
      }
    },
    created () {
      let imgList = ['/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg', '/images/4.jpeg', '/images/5.jpeg', '/images/6.jpeg', '/images/7.jpeg', '/images/8.jpeg']
      this.list = imgList
    }
  }
</script>
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    /*flex-direction: column;*/
  }
  .waterfall{
  　　column-count: 3;
  　　column-gap: 0;
  }
              
  .item{
  　　box-sizing: border-box;
  　　break-inside: avoid;
  　　padding: 10px;
  }
  .item-content{
  　　display: flex;
  　　flex-direction: column;
  　　justify-content: center;
  　　align-items: center;
  　　padding: 10px;
  　　height: auto;
  　　font-size: 20px;
  　　color: #686868;
  　　box-sizing: border-box;
  　　border: 1px solid #ccc;
  }
</style>