<template>
    <div id="cover">
        <div id="home">
            <el-container class="tp">
                <el-header id="header">
                    <h2>音域</h2>
                    <div class="big">
                        <el-row>
                            <el-button
                                type="primary"
                                icon="el-icon-arrow-left"
                                size="mini"
                                circle
                                @click="backOff"
                            ></el-button>
                            <el-button
                                type="primary"
                                icon="el-icon-arrow-right"
                                size="mini"
                                circle
                                @click="forwards"
                            ></el-button>
                        </el-row>
                    </div>
                    <div class="search">
                        <el-input
                            v-model="input"
                            placeholder="搜索"
                            @change="searchInput"
                        ></el-input>
                    </div>
                    <div class="myself" v-if="selfDetails.adValid">
                        <el-dropdown @command="handleCommand" size="medium">
                            <span class="el-dropdown-link">
                                <img
                                    v-lazy="selfDetails.profile.avatarUrl"
                                    alt=""
                                />
                                <span>{{ selfDetails.profile.nickname }}</span
                                ><i
                                    class="el-icon-arrow-down el-icon--right"
                                ></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="a"
                                    >个人中心</el-dropdown-item
                                >
                                <el-dropdown-item command="b"
                                    >退出登录</el-dropdown-item
                                >
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="myself" v-else>未登录</div>
                </el-header>
                <el-container>
                    <el-aside width="200px"> <Aside></Aside></el-aside>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
                <el-footer>音乐播放器@zylchange.com</el-footer>
            </el-container>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("mySelf");

import Aside from "./Aside";
export default {
    components: {
        Aside,
    },
    data() {
        return {
            input: "",
        };
    },
    created() {
        this.judgeLogin();
    },
    computed: {
        ...mapState(["selfDetails"]),
    },
    methods: {
        ...mapActions(["judgeLogin", "logout"]),
        handleCommand(command) {
            if (command == "b") {
                this.logout();
            } else if (command == "a") {
                this.$router.push("/home/selfCenter");
            }
        },
        // 后退
        backOff() {
            history.back();
        },
        // 前进
        forwards() {
            history.forward();
        },
        // 搜索跳转
        searchInput() {
            const name = this.input;
            this.$router.push("/home/Search/" + name);
        },
    },
};
</script>

<style lang="scss">
.el-dropdown-link {
    cursor: pointer;
    color: #fff;
}
.el-input__inner {
    border-radius: 30px;
    height: 30px;
}
.el-input {
    width: 80%;
}
#header .myself span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.el-dropdown {
    height: 100%;
    width: 100%;
}
#cover {
    width: 100%;
    height: 100%;
    background-color: rgba(37, 3, 3, 0.5);
}
#home {
    width: 1100px;
    height: 650px;
    /* border: 1px solid #cccc; */
    box-shadow: 0 0 80px 10px black;
    background-color: #fff;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    h2 {
        color: #ffffff;
        text-shadow: 0 0 20px #fff;
    }
}
Aside {
    border-right: 1px solid #ccc;
}
.tp {
    height: 100%;
}
.el-header,
.el-footer {
    background-color: #17233d;
    color: #ebeef5;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    // background-color: #d3dce6;
    color: #333;
    text-align: center;
}
.el-container {
    background-color: #ffffff;
}
.el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    padding: 0;
    // overflow-y: scroll;
}
#header {
    display: flex;
    justify-content: space-between;
    h2 {
        width: 50%;
        text-align: left;
        padding-left: 63px;
    }
    .myself {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            // margin-right: 10px;
        }
        span {
            font-size: 14px;
        }
    }
}
</style>