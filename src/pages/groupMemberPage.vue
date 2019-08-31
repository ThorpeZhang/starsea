<template>
  <div id="groupMemberPage">
    <el-container>
      <el-main>
        <el-col span="20" offset="4">
          <div><h1>小组成员管理</h1></div>
          <el-row>
            <div><h2>组长</h2></div>
            <div class="leader">
              <el-col span="3" v-for="(leader,index) in leaders" :key="leader">
                <member-card :info="leaders[index]"></member-card>
              </el-col>
            </div>
          </el-row>
          <el-row>
            <div><h2>管理员</h2></div>
            <div class="leader">
              <el-col span="3" v-for="(admin,index) in admins" :key="admin">
                <member-card :info="admins[index]"></member-card>
              </el-col>
            </div>
          </el-row>
          <el-row>
            <div><h2>成员</h2></div>
            <div class="leader">
              <el-col span="3" v-for="(user,index) in users" :key="user">
                <member-card :info="users[index]"></member-card>
              </el-col>
            </div>
          </el-row>
        </el-col>
      </el-main>
      <el-aside width="35%">
        <div class="space"></div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
  import memberCard from '../groupcomponents/memberCard.vue'
  export default {
    name: "groupMemberPage",
    components: {
      'member-card': memberCard,
    },
    data() {
      return {
        leaders: [
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
        ],
        admins: [
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
        ],
        users: [
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
          {
            name: 'zhaoRB',
            head: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          },
        ],
      }
    },
  }
</script>

<style scoped>
  #groupMemberPage {
    width: 100%;
    top: 60px;
    position: absolute;
    left: 0;
    min-width: 1400px;
    text-align: left;
  }
  .space{
    width: 100%;
    height: 60px;
  }
  h1 {
    margin-left: 15px;
    font-size: 30px;
    line-height: 70px;
  }
  h2 {
    margin-left: 15px;
    color: green;
    font-size: 23px;
  }
</style>
