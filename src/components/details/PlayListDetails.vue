<template>
    <div id="details">
        <div class="details-head">
            <div class="dh-left">
                <img v-lazy="detailsList.coverImgUrl" alt="" />
            </div>
            <div class="dh-right">
                <div class="dh-one">
                    <i>歌单</i>
                    <span>{{ detailsList.name }}</span>
                </div>
                <div class="dh-two" v-if="detailsList.creator">
                    <img v-lazy="detailsList.creator.avatarUrl" alt="" />
                    <span>{{ detailsList.creator.nickname }}</span>
                    <i></i>
                </div>
                <div class="dh-three">
                    <el-row>
                        <el-button size="mini" type="primary" round
                            >播放全部</el-button
                        >
                        <el-button size="mini" round
                            >收藏（{{
                                detailsList.subscribedCount
                            }}）</el-button
                        >
                        <el-button size="mini" round
                            >分享（{{ detailsList.shareCount }}）</el-button
                        >
                        <el-button size="mini" round>下载全部</el-button>
                    </el-row>
                </div>
                <div class="dh-four">
                    标签：<span v-for="item in detailsList.tags"
                        >{{ item }} /
                    </span>
                </div>
                <div class="dh-five">
                    <span>歌曲：{{ detailsList.trackCount }}</span>
                    <span>播放：{{ play(detailsList.playCount) }}</span>
                </div>
                <div class="dh-six">
                    <span> 简介：{{ detailsList.description }}</span>
                </div>
            </div>
        </div>
        <div class="details-content">
            <el-tabs class="ttt" v-model="activeName">
                <el-tab-pane label="歌曲列表" name="first"
                    ><MusicList></MusicList
                ></el-tab-pane>
                <el-tab-pane
                    :label="`评论（${detailsList.commentCount}）`"
                    name="second"
                    ><Comment></Comment
                ></el-tab-pane>
                <el-tab-pane label="收藏者" name="third"
                    ><Collection></Collection
                ></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import MusicList from "../details/MusicList";
import Comment from "../details/Comment";
import Collection from "../details/Collection";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("details");

export default {
    props: ["name"],
    components: {
        MusicList,
        Comment,
        Collection,
    },
    data() {
        return {
            activeName: "first",
        };
    },
    mounted() {
        this.getDetails(this.name);
    },
    computed: {
        ...mapState(["detailsList", "musicList"]),
    },
    methods: {
        ...mapActions(["getDetails"]),
        play(num) {
            if (parseInt(num / 10000) > 0) {
                return parseInt(num / 10000) + "万";
            } else {
                return num;
            }
        },
    },
};
</script>

<style lang="scss" >
#details {
    padding: 30px 30px 0 30px;
    height: 490px;
    h1 {
        color: chocolate;
    }
}
.ttt > .el-tabs__header {
    padding: 0;
    position: relative;
    margin: 0 0 15px;
}
.details-content {
    margin-top: 20px;
}
.el-tabs__content {
    padding-top: 10px;
}
.details-head {
    height: 220px;
    // border: 1px solid #ccc;
    display: flex;

    .dh-left {
        width: 25%;
        img {
            height: 100%;
            width: 100%;
            border-radius: 15px;
        }
    }
    .dh-right {
        width: 70%;
        padding-left: 20px;
        .dh-one,
        .dh-two,
        .dh-three,
        .dh-four,
        .dh-five,
        .dh-six {
            width: 100%;
            text-align: left;
            padding: 5px;
        }
        .dh-one {
            i {
                font-style: normal;
                display: inline-block;
                width: 40px;
                height: 22px;
                color: red;
                text-align: center;
                border: 1px solid red;
                margin-right: 10px;
            }
            span {
                font-size: 22px;
                font-weight: bold;
            }
        }
        .dh-two {
            display: flex;
            align-items: center;
            img,
            span,
            i {
                font-weight: 100;
                height: 100%;
                margin-left: 10px;
                font-size: 13px;
            }
            img {
                margin-left: 0;
                width: 35px;
                border-radius: 50%;
            }
            span {
                color: #1f4e79;
            }
        }

        .dh-four {
            font-size: 14px;
            span {
                font-size: 12px;
                color: #1f4e79;
            }
        }
        .dh-five {
            span {
                margin-right: 10px;
                font-size: 14px;
            }
        }
        .dh-six {
            font-size: 14px;
            height: 30px;
            span {
                display: inline-block;
                height: 100%;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
}
</style>    