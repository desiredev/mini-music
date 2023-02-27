<template>
    <div id="cover">
        <div id="login">
            <h2>Music</h2>
            <hr />
            <div class="inp">
                <div class="input">
                        <b-input type="text" 
                        placeholder="请输入账号" 
                        v-model="type.phone" 
                        :maxlength="11"
                        prefix="vbestui-iconfont icon-touxiang" 
                        clearable
                        @inhibiting="handleInhibiting" 
                    /></b-input>
                </div>
                <div class="input">
                    <b-input id="ps"
                        type="password"
                        placeholder="请输入密码"
                        prefix="vbestui-iconfont icon-sousuo" 
                        v-model="type.password"
                        show-password
                    /></b-input>
                </div>
                <div class="input">
                    <input type="text" v-model="params.captcha" placeholder="请输入验证码" @change="checked" />
                </div>
            </div>
            <div class="btn"><button id="code" class="push" @click="pushCode">发送验证码</button><button id="push" @click="login1">登录</button></div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("login");

export default {
    data() {
        return {
            type: {
                password: "",
                phone: "",
            },
            islog: "",
            params: {
                phone: "",
                captcha: "",
            },
        };
    },
    computed: {
        ...mapState(["login", "code", "checkCd"]),
    },
    watch: {},
    methods: {
        ...mapActions(["isLogin", "judgeLogin", "sendCode", "checkCode"]),
        handleInhibiting(value, size) {
            this.$Toast.info(`${"达到长度限制,限制长度：" + size}`, 4);
        },
        // 判断是否登录
        login1() {
            this.isLogin(this.type);
            this.judgeLogin();
            if (this.checkCd.data == true) {
                this.$router.push("/home/foundMusic/recommend");
            }
        },
        pushCode() {
            this.sendCode(this.type.phone);
        },
        checked() {
            this.params.phone = this.type.phone;
            this.checkCode(this.params);
        },
    },
};
</script>

<style lang="scss">
body {
    width: 100vw;
    height: 100vh;
    background: url("../../assets/images/c53cfaeaeea2d84cb3dd5635962c13fc.jpeg")
        no-repeat;
    background-size: cover;
}
hr {
    border-right: 370px solid #cccc;
}
#cover {
    width: 100%;
    height: 100%;
    background-color: rgba(37, 3, 3, 0.3);
}
#login {
    width: 400px;
    height: 400px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(179, 174, 174);
    border-radius: 5%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    box-shadow: 0 0 60px 0 black;
}
px h2,
.inp,
.btn {
    width: 100%;
}
.inp {
    height: 42%;
    margin-top: 30px;
    box-sizing: border-box;
}
.input {
    width: 100%;
    height: 44%;
    text-align: center;
}
input,
.vbestui-input-group {
    display: inline-block;
    width: 300px;
    height: 50px;
    border-radius: 25px;
    text-align: center;
    border: 1px solid #cccc;
    &:focus {
        // width: 400px;
        height: 60px;
        border: 2px solid rgb(52, 21, 163);
        transition: all 0.5s;
    }
}
h2 {
    margin: 0;
    width: 100%;
    text-shadow: 0 10px 10px rgb(11, 24, 61);
    text-align: center;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
}
.btn {
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 50px;
    line-height: 58px;
}
#code {
    font-size: 15px;
    width: 100px;
}
button {
    width: 150px;
    height: 50px;
    border-radius: 15px;
    border: 1px solid #cccc;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 10px;
    color: rgb(179, 174, 174);
    &:focus {
        box-shadow: 0 0 5px 0 black;
    }
}
</style>