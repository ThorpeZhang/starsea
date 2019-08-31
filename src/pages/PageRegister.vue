<template>
  <div>
    <el-form status-icon ref="form" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">您正在注册账号</h3>
      <el-form-item label="账号" prop="username">
        <el-input minlength="3" maxlength="13" type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item label="验证密码" prop="checkpassword">
        <el-input type="password" placeholder="请再次输入密码" v-model="form.checkpassword"/>
      </el-form-item>
      <el-form-item label="验证码" prop="checkcode">
        <el-input type="tel" placeholder="请输入验证码" v-model="form.checkcode"/>
        <div>
          <a href="javascript:void(0);" title="点击更换验证码">
            <img id="imgVerify" src="" alt="点击更换验证码" height="20" width="40%"
              @click="getVerify(this);"/>
          </a>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('form')">注册</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      var validateCode=(rule,value,callback) => {
        var flag=false;
          if(value===''){
            callback(new Error('请输入验证码'));
          }
          else{
            this.$axios
            .post('/checkVerify', {
                verifyInput :value
            })
            .then(successResponse =>{
                this.responseResult = JSON.stringify(successResponse.data)
                if(successResponse.data.code === 200) {
                    flag=responseResult;
                    //alert(flag);
                }
            })
            .catch(failResponse => {alert('连接失败');})
          }
            if(flag){
              callback();
            }
            else{
              callback(new Error('验证失败'));
            }
      };
      var validatePass2=(rule,value,callback) => {
          if(value===''){
            callback(new Error('请再次输入密码'));
          }
          else if(value.length<8 || value.length>16){
            callback(new Error('请将密码保持在8-16位之间'));
          }
          else if(value!==this.form.password){
            callback(new Error('两次输入密码不一致！'));
          }
          else{
            callback();
          }
      };
      var validatePass=(rule,value,callback) => {
        if(value===''){
          callback(new Error('请输入密码'));
        }
        else if(value.length<8 || value.length>16){
          callback(new Error('请将密码保持在8-16位之间'));
        }
        else{
          if(this.form.checkpassword!==''){
            this.$refs.form.validateField('checkPassword');
          }
          callback();
        }
      };
      var validateUsername=(rule,value,callback) => {
        if(value===''){
          callback(new Error('请输入用户名'));
        }
        else if(value.length<3 || value.length>12){
          callback(new Error('请将用户名保持在3-12位之间'));
        }
        else{
          callback();
        }
      };
      return {
        form: {
          username: '',
          password: '',
          checkpassword: '',
          checkcode: '',
        },

        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username: [
            {validator: validateUsername, trigger: 'blur'}
          ],
          password: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkpassword: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          checkcode: [
            {validator: validateCode, trigger: 'blur'}
          ]
        },

        // 对话框显示和隐藏
        dialogVisible: false
      };
    },
    methods: {
      getVerify: function(obj) {
        obj.src="/getVerify?"+Math.random();
      },
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.register(this)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
  }
</script>

<style lang="scss" scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 130px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
</style>