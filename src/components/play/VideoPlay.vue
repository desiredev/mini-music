<template>
    <div id="videoPlay">
        <div class="vp-left">
            <div class="vl-head">
                <h3>视频详情</h3>
            </div>
            <div class="vl-content">
                <video
                    v-if="videoUrl[0]"
                    :src="videoUrl[0].url"
                    controls
                    width="500"
                ></video>
                <div class="vl-bottom">
                    <div class="vb-head">
                        <img v-lazy="videoDetails.avatarUrl" alt="" />
                        <span v-if="videoDetails.creator">{{
                            videoDetails.creator.nickname
                        }}</span>
                    </div>
                    <h4>{{ videoDetails.title }}</h4>
                    <p>
                        <span>发布：{{ time(videoDetails.publishTime) }}</span>
                        <span
                            >播放：{{
                                parseInt(videoDetails.playTime / 10000)
                            }}万次</span
                        >
                    </p>
                    <p id="name">
                        <i v-for="item in videoDetails.videoGroup">{{
                            item.name
                        }}</i>
                    </p>
                </div>
            </div>
        </div>
        <div class="vp-right">
            <div class="vr-head">
                <h3>相关推荐</h3>
            </div>
            <div class="vr-content">
                <div
                    class="vc-cc"
                    v-for="item in relate"
                    @dblclick="details(item.vid)"
                >
                    <div class="vc-img">
                        <img v-lazy="item.coverUrl" alt="" />
                    </div>
                    <div class="vc-right">
                        <span>{{ item.title }}</span>
                        <i v-if="item.creator"
                            >by - {{ item.creator[0].userName }}</i
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("videoPlay");

export default {
    props: ["id"],
    mounted() {
        this.getVidieoUrl(this.id);
        this.getVideoDetails(this.id);
        this.getRelated(this.id);
    },
    computed: {
        ...mapState(["videoUrl", "videoDetails", "relate"]),
    },
    methods: {
        ...mapActions(["getVidieoUrl", "getVideoDetails", "getRelated"]),
        time(time) {
            var unixTimestamp = new Date(time);
            var commonTime = unixTimestamp.toLocaleDateString();
            return commonTime;
        },
        details(id) {
            this.$router.push("/home/videoPlay/" + id);
            location.reload();
        },
    },
};
</script>

<style lang="scss">
#videoPlay {
    width: 100%;
    height: 530px;
    overflow-y: scroll;
    display: flex;
    padding: 30px;
    h3 {
        width: 100%;
        text-align: left;
    }
    .vp-left {
        width: 65%;
        text-align: left;
        video {
            margin-top: 20px;
        }
        .vl-content {
            width: 100%;
            height: 100%;
            .vl-bottom {
                width: 100%;
                .vb-head {
                    width: 100%;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    margin: 20px 0;
                    img {
                        height: 50px;
                        width: 50px;
                        border-radius: 50%;
                        margin-right: 20px;
                    }
                }
                p {
                    font-size: 13px;
                    color: #ccc;
                    margin: 10px 0;
                    span {
                        margin-right: 10px;
                    }
                }
                #name {
                    color: black;
                    i {
                        font-style: normal;
                        background-color: rgb(235, 231, 231);
                        margin-right: 8px;
                    }
                }
            }
        }
    }
    .vp-right {
        width: 35%;
        .vr-content {
            width: 100%;
            .vc-cc {
                width: 100%;
                display: flex;
                margin-top: 20px;
                cursor: pointer;
                .vc-right {
                    width: 60%;
                    margin-left: 10px;
                    span,
                    i {
                        width: 100%;
                        text-align: left;
                        display: block;
                        font-size: 14px;
                    }
                    i {
                        color: #ccc;
                        font-style: normal;
                    }
                }
                .vc-img {
                    width: 40%;
                    img {
                        width: 100%;
                        border-radius: 8px;
                    }
                }
            }
        }
    }
}
</style>