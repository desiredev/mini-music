<template>
    <div id="cover">
        <div id="register">
            <h2>Music</h2>
            <hr />
            <div class="inp">
                <div class="input">
                    <input type="text" placeholder="请输入账号" />
                </div>
                <div class="input">
                    <input type="text" placeholder="请输入密码" />
                </div>
            </div>
            <div class="btn">
                <button class="push">注册</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
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
#register {
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
    // padding: 20px;
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
    height: 60%;
    // margin-top: 30px;
    box-sizing: border-box;
}
.input {
    width: 100%;
    height: 28%;
    text-align: center;
}
input {
    width: 300px;
    height: 50px;
    border-radius: 25px;
    text-align: center;
    border: 1px solid #cccc;

    &:focus {
        width: 400px;
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
    text-align: center;
    margin-top: -65px;
}
button {
    width: 150px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #cccc;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 5px;
    margin-left: 10px;
    color: rgb(179, 174, 174);
    &:focus {
        box-shadow: 0 0 5px 0 black;
    }
}
</style>