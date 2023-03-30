<template>
  <div class="home">
    
      <Header/>
      <el-container class="content">
          <Menu/>
          <el-container>
            <el-main>
            <Bread/>
              <div class="cont"></div>
            <router-view></router-view>
            </el-main>
            <el-footer><Footer/></el-footer>
         </el-container>
      </el-container>
    

  </div>
</template>

<script>
import Menu from './common/Menu.vue'
import Header from './common/Header.vue'
import Footer from './common/Footer.vue'
import Bread from './common/Breadcrumb.vue'
export default {
  components:{
    Menu,
    Header,
    Footer,
    Bread
  },
  data(){
    return {
    
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.home {
  width:100%;
  height:100%;
  .content{
    position: absolute;
    width: 100%;
    top:60px;
    bottom: 0;
    .count{
      margin:20px 0;
    }
  }
  
  }



</style>
