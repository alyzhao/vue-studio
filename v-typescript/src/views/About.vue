<template>
  <div class="about">
    <h1>{{aboutTitle}}</h1>
  </div>
</template>
<script lang="ts">
  import { Emit, Inject, Model, Provide, Watch, Mixins, Component, Prop, Vue } from 'vue-property-decorator'

  @Component
  export default class About extends Vue {


    @Prop({default: 'about v-typescript'}) aboutTitle!: string
    @Prop(Number) count!: number
    @Prop(Number) propA!: number

    @Watch('name')
    nameChange (val: string, oldVal: string) {
      console.log('oldVal', oldVal)
      console.log('val', val)      
    }

    created () {
      console.log(this.propA)
    }

    @Emit('resetName')
    reset () {
      return 'xxx'
    }


  }

</script>
