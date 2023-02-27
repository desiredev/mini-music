<template>
    <div class="selfCenter">
        <div class="sc-head">
            <div class="sh-left">
                <img :src="selfDetails.profile.avatarUrl" alt="" />
            </div>
            <div class="sh-right">
                <div class="sr-top">
                    <h3>{{ selfDetails.profile.nickname }}</h3>
                    <div class="st">
                        <i>Lv{{ selfDetails.level }}</i>
                        <el-row>
                            <el-button round>编辑个人信息</el-button>
                        </el-row>
                    </div>
                </div>
                <div class="sr-bottom">
                    <p>
                        <span
                            ><i>{{ selfDetails.profile.eventCount }}</i
                            >动态</span
                        >
                        <span
                            ><i>{{ selfDetails.profile.follows }}</i
                            >关注</span
                        >
                        <span
                            ><i>{{ selfDetails.profile.followeds }}</i
                            >粉丝</span
                        >
                    </p>
                    <p>所在地区：四川 成都</p>
                    <p>社交网络：无</p>
                    <p>个人介绍：无</p>
                </div>
            </div>
        </div>
        <div class="sc-content">
            <h4>我创建的歌单（{{ selfDetails.profile.playlistCount }}）</h4>
            <div class="sc-one sc">
                <img src="" alt="" />
                <p>我的听歌排行</p>
                <span>累计听歌{{ selfDetails.listenSongs }}首</span>
            </div>
            <div class="sc-two sc">
                <img src="" alt="" />
                <p>我喜欢的音乐</p>
                <span>{{ 1 }}首</span>
            </div>
            <div class="sc-three sc">
                <img src="" alt="" />
                <p>收藏</p>
                <span>{{ 1 }}首</span>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("mySelf");

export default {
    mounted() {
        this.judgeLogin();
    },
    computed: {
        ...mapState(["isLogout", "selfDetails"]),
    },
    methods: {
        ...mapActions(["logout", "judgeLogin"]),
        logout1() {
            this.logout();
        },
        selfMsg() {},
    },
};
</script>

<style lang="scss">
.selfCenter {
    width: 100%;
    padding: 0 30px;
    .sc-head {
        width: 100%;
        height: 300px;
        display: flex;
        .sh-left {
            width: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 200px;
                height: 200px;
                border-radius: 50%;
            }
        }
        .sh-right {
            width: 70%;
            height: 100%;
            text-align: left;
            .sr-top {
                height: 40%;
                border-bottom: 1px solid #ccc;
                padding: 50px 20px 0 0;
                h3 {
                    width: 100%;
                }
                .st {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    i {
                        display: inline-block;
                        width: 34px;
                        text-align: center;
                        height: 100%;
                        border-radius: 10px;
                        background-color: #ccc;
                        font-size: 12px;
                        font-style: normal;
                    }
                }
            }
            .sr-bottom {
                width: 100%;
                font-size: 13px;
                p {
                    margin: 10px 0;
                    &:first-child {
                        width: 100%;
                        display: flex;
                        span {
                            display: inline-block;
                            width: 100px;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            i {
                                font-style: normal;
                                display: block;
                                text-align: center;
                                margin-top: 10px;
                                width: 100%;
                            }
                            &:nth-child(2) {
                                border-left: 1px solid #ccc;
                                border-right: 1px solid #ccc;
                            }
                        }
                    }
                }
            }
        }
    }
}
.sc-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    h4 {
        width: 100%;
        text-align: left;
    }
    .sc {
        width: 20%;
        font-size: 13px;
        margin: 10px 45px;
        span {
            color: #ccc;
        }
        img {
            height: 150px;
        }
    }
}
</style>