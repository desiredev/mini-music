<template>
    <div id="comment">
        <div class="comment-head">
            <textarea name="" id="" cols="90" rows="5"></textarea>
            <p>
                <el-row>
                    <el-button round size="mini">评论</el-button>
                </el-row>
            </p>
        </div>
        <div class="comment-content">
            <div class="hot">
                <p>精彩评论</p>
                <div class="hot-content">
                    <div class="hc" v-for="item in hotComment">
                        <div class="hc-img">
                            <img v-lazy="item.user.avatarUrl" alt="" />
                        </div>
                        <div class="hc-right">
                            <p>
                                <span class="one"
                                    >{{ item.user.nickname }}:
                                </span>
                                <span class="two"> {{ item.content }}</span>
                            </p>
                            <p class="pt">
                                <span class="one" v-if="item.beReplied[0]"
                                    >@{{
                                        item.beReplied[0].user.nickname
                                    }}:</span
                                >
                                <span class="two" v-if="item.beReplied[0]">{{
                                    item.beReplied[0].content
                                }}</span>
                            </p>
                            <span class="time">2020年9月9日 09:20</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="new">
                <p>最新评论</p>
                <div class="new-content">
                    <div class="hot-content">
                        <div class="hc" v-for="item in commentList">
                            <div class="hc-img">
                                <img v-lazy="item.user.avatarUrl" alt="" />
                            </div>
                            <div class="hc-right">
                                <p>
                                    <span class="one"
                                        >{{ item.user.nickname }}:
                                    </span>
                                    <span class="two"> {{ item.content }}</span>
                                </p>
                                <p class="pt">
                                    <span class="one" v-if="item.beReplied[0]"
                                        >@{{
                                            item.beReplied[0].user.nickname
                                        }}:</span
                                    >
                                    <span
                                        class="two"
                                        v-if="item.beReplied[0]"
                                        >{{ item.beReplied[0].content }}</span
                                    >
                                </p>
                                <span class="time">{{ time(item.time) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("details");

export default {
    computed: {
        ...mapState(["commentList", "hotComment"]),
    },
    methods: {
        time(time) {
            var unixTimestamp = new Date(time);
            var commonTime = unixTimestamp.toLocaleString();
            return commonTime;
        },
    },
};
</script>

<style lang="scss">
#comment {
    width: 100%;
    .comment-head {
        width: 100%;
        textarea {
            border: 1px solid #ccc;
        }
        p {
            width: 100%;
            text-align: right;
            padding-right: 20px;
        }
    }
    .comment-content {
        width: 100%;
        padding-left: 20px;
        .hot,
        .new {
            width: 100%;
            p {
                width: 100%;
                text-align: left;
                font-size: 14px;
                font-weight: 600;
            }
        }
    }
}
.time {
    width: 100%;
    display: block;
    text-align: left;
    font-size: 12px;
    color: #ccc;
    padding-left: 0;
}
.new {
    margin-top: 40px;
}
.hc {
    border-bottom: 1px solid #ccc;
    margin-top: 15px;
    display: flex;
    .hc-img {
        width: 5%;
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }
    .hc-right {
        width: 95%;
        padding-left: 25px;
        p {
            margin-bottom: 12px;
        }
        .pt {
            background-color: rgb(233, 225, 225);
        }
        .one {
            color: #1f4e79;
            font-weight: 100;
        }
        .two {
            font-weight: 100;
            line-height: 20px;
            font-size: 13px;
        }
    }
}
</style>