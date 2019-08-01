<template>
  <div>
    <div>{{ msg }}</div>
    <div>{{ num }}</div>
    <div>{{ doubleNum }}</div>
    <button @click="addNum(100)">+100</button>
    <button @click="reduceNum">-100</button>
     <button @click="getData(2)">+</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import * as type from '../store/mutations-types'

export default {
  name: 'TodoList',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      // 简洁写法，直接获取相应的数据
      num: state => state.moduleA.num, // state[模块名][属性名]

      // 可以对数据进行处理（getters相当于sotre的计算属性，所以也可以现在getters中先进行数据处理）
      msg (state) {
        return `这是msg： ${state.moduleA.msg}`
      }
    }),
    // 默认情况下，getters、actions、mutations注册在同一命名空间下（所以要避免命名重复）
    // 即使分为moduleA、moduleB，但是只有state在不同的命名空间下（默认情况）
    // 如果想让getters、actions、mutations在不同命名空间下，可以开启命名空间（看Vuex文档，我还没研究）
    ...mapGetters(['doubleNum'])
  },
  methods: {
    // 1.起别名
    ...mapMutations({
      addNum: type.ADD_NUM // 将this.addNum()映射为 this.$store.commit('increment')
    }),
    // 2.直接使用不改名（不推荐，因为一开始定义了常量作为mutation的函数名）
    // ...mapMutations([`${type.REDUCE_NUM}`]), // 将REDUCE_NUM()映射为 this.$store.commit('REDUCE_NUM')
    // 3.手动地调用mutation
    reduceNum: function () {
      this.$store.commit(`${type.REDUCE_NUM}`, 100)
    },
    ...mapActions(['getData'])
  }
}
</script>

<style lang="sass" scoped>

</style>
