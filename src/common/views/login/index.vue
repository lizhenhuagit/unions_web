<template>
  <div class="back_ground">
    <el-form class="login-form" :model="ruleForm" ref="ruleForm">
      <div class="logo"><img src="/static/img/tianlang.png" ></div>
      <div class="title">天空之城会员管理平台</div>

      <el-form-item
        prop="userName"
        label="账号"
      >
        <el-input v-model="ruleForm.userName"></el-input>
      </el-form-item>
      <el-form-item
        prop="passWord"
        label="密码"
      >
        <el-input type="password" v-model="ruleForm.passWord" ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;" @click="handleLogin" >
          登 录
        </el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
     return{
       ruleForm: {
         userName: '',
         passWord: ''
       },
       loading: false
     }

    },
    methods:{
      handleLogin(){
        console.log(this.ruleForm)

      },
      // deleteRow(index, row) {
      //   this.$confirm('确定要删除该数据吗?', '提示', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //
      //     var id = row.id
      //     axios.post('/api/crdms-drug-manage/routeEdit/deleteReference', qs.stringify({id})).then((res) => {
      //       console.log(res);
      //       this.$message({type: 'success', message: '操作成功!'})
      //       this.fileSource()
      //
      //
      //     })
      //
      //   }).catch(() => {
      //     this.$message({
      //       type: 'info',
      //       message: '已取消删除'
      //     })
      //   })
      // },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style rel="stylesheet/scss" lang="scss"  scoped >
  $bg:#fff;
  .back_ground{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background:url(/static/img/login-bg.png) no-repeat ;
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 520px;
      max-width: 100%;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;

      background: $bg;
      .el-form-item {
        border: none;
        background: $bg;
        border-radius: 0px;
        color: #454545;
      }
    }
    .el-form-item{
      margin-left: 40px;
      margin-right: 46px;
      .el-input{
        width: 90%;
      }
    }

    .logo{
      text-align: center;
      img{
        height: 70px;
      }
    }
    .title {
      font-size: 30px;
      font-weight: 500;
      letter-spacing:20px;
      margin: 30px 0px 20px 0px;
      padding-left: 20px;
      color: black;
    }
  }
</style>


