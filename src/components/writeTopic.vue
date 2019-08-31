<template>
  <div class="writcmt">
    <el-form ref="form" :model="form" :rules="rules" >

      <el-form-item label="标题"  prop="title">
        <el-input
          placeholder="请在这里写上标题"
          v-model="form.title"
        ></el-input>
      </el-form-item>

      <el-form-item label="编辑帖子"  prop="topic">
        <el-input
          type="textarea"
          :autosize="{minRows:4}"
          placeholder="写下您想要发表的话吧！"
          v-model="form.topic"
        ></el-input>
      </el-form-item>


      <el-form-item>
        <el-button @click="submmit('form')">立即发表</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "writeComment",
  data() {
    var validateTitle =(rule,value,callback) => {
        if(value===''){
          callback(new Error('标题不能为空'));
        }
        callback();
    };
    var validateTopic =(rule,value,callback) => {
        if(value===''){
          callback(new Error('贴子内容不能为空'));
        }
        else if(value.length<25){
          callback(new Error('帖子内容不能少于25个字'));
        }
        callback();
    };
    return {
      form: {
        title: "",
        topic: "",
      },
      rules : {
        title: [
          {validator: validateTitle, trigger: 'blur'}
        ],
        topic: [
          {validator: validateTopic, trigger: 'blur'}
        ],
        },
    };
    
  },
  props: {
    groupId: String,
  },
  methods: {
    submmit: function(formName) {
      var username=this.$store.state.username;
      this.$refs[formName].validate((valid) => {
          if (valid) {
              //alert(this.groupId)
            this.addPost(this.groupId, this.form.title,username, this.form.topic)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      //window.location.reload()
    },


  }
};
</script>

<style scoped>
.writcmt {
  border-style: solid;
  padding: 20px;
  border-width: 1px;
  border-radius: 5px;
  border-color: #dfe6e9;
}
.star {
  color: orange;
  position: relative;
  top: 11px;
}
.cmt {
  margin: 0;
}
</style>