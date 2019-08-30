<template>
  <div class="writcmt">
    <el-form ref="form" :model="form" :rules="rules" >
      <el-form-item label="评分">
        <div class="star">
          <el-rate :colors="colors" v-model="form.mark" show-text :texts="text"></el-rate>
        </div>
      </el-form-item>

      <el-form-item label="评论" prop="comment">
        <el-input
          type="textarea"
          :autosize="{minRows:4}"
          placeholder="请输入评论"
          v-model="form.comment"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="submmit('form')">提交评论</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "writeComment",
  data() {
    var validateComment =(rule,value,callback) => {
        if(value===''){
          callback(new Error('评论不能为空'));
        }
        else if(value.length<25){
          callback(new Error('评论不能少于25个字'));
        }
        callback();
    };
    return {
      form: {
        mark: 0.0,
        comment: ""
      },
      rules : {
        comment: [
            {validator: validateComment, trigger: 'blur'}
          ],
        },
      text: ["1", "2", "3", "4", "5"],
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
    };
    
  },
  props: {
    type: String,
    id: String
  },
  methods: {
    submmit: function(formName) {
      //alert(this.getUser)
      this.$refs[formName].validate((valid) => {
          if (valid) {
              //alert('1234')
            this.addEvaluation(this.type, this.id, this.form.mark, this.form.comment)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      //window.location.reload()
    }
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