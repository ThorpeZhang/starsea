<template>
    <div>
        <input v-model="usrname" placeholder="请输入用户名"/>
        <input v-model="password" placeholder="请输入密码" type="password"/>
        <button onclick="login()">登录</button>
    </div>
</template>

<script>
export default {
    name: 'PageLogin',
    data: {
        usrname: '',
        password: ''
    },
    methods: {
        login: function(){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState==4&&this.status==200){
                    alert("登录成功");
                }
                else{
                    alert("登录中");
                }
            };
            xhttp.open("GET","./text.txt?usrname=usrname&password=password",true);
            xhttp.send();
        }
    }
}
</script>