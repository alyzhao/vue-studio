<template>
  <div class="home">
    <div class="stream-content"></div>
    <div class="side-content">
      <div class="top-side">
        <Avartar :avartar="bgImage" :smallAvartar="bgImage" :working="false" />
        
      </div>
      <div class="bottom-side">
        <div v-for="n in 3" :key="n" class="records-cell">
          <IdentityRecord :avartar="bgImage" :recordName="'弹力小笼包'" :recordTime="'8:56:56'" />          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Avartar from '@/components/Avartar.vue'
import IdentityRecord from '@/components/IdentityRecord.vue'

export default {
  name: 'home',
  data() {
    return {
      // bgImage: 'http://www.ghost64.com/qqtupian/zixunImg/local/2017/12/13/15131436114287.jpg',
      bgImage: '',
    }
  },
  components: {
    Avartar,
    IdentityRecord,
  }
}
</script>
<style lang="scss">
  .home {
    display: flex;
    width: 100%;
    height: 100%;
    .stream-content {
      background-color: #b5ddfa;
      height: 100%;
      flex-grow: 1;
    }
    .side-content {
      width: 480px;
      height: 100%;
      .top-side {
        height: 60%;
        padding-top: 14%;
        box-sizing: border-box;
        .avartar {
          margin: 0 auto;
        }
      }

      .bottom-side {
        height: 40%;
        display: flex;
        flex-wrap: wrap;
        .records-cell {
          width: 33.33%;
          height: 142px;
          padding: 16px 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
</style>
