<template>
    <div id="play">
        <div id="play-head">
            <div class="ph-left">
                <img
                    id="img1"
                    v-if="musicDetails.al"
                    :src="musicDetails.al.picUrl"
                    alt=""
                />
                <div id="circle"></div>
                <img
                    id="ccc"
                    src="../../assets/images/_r1_c1_r1_c1.png"
                    alt=""
                />
            </div>
            <div class="ph-right">
                <div class="pr-head">
                    <h3>{{ musicDetails.name }}</h3>
                    <div class="pr-in">
                        <span
                            >专辑：<i v-if="musicDetails.al">{{
                                musicDetails.al.name
                            }}</i></span
                        >
                        <span
                            >歌手：<i v-for="item in musicDetails.ar"
                                >{{ item.name }}/</i
                            ></span
                        >
                    </div>
                </div>
                <p v-if="lyric.lyric">{{ ll(lyric.lyric) }}</p>
            </div>
        </div>
        <div id="play-bottom">
            <div class="pb-left">
                <div class="pl-left">
                    <img
                        v-if="musicDetails.al"
                        v-lazy="musicDetails.al.picUrl"
                        alt=""
                        @click="open"
                    />
                </div>
                <div class="pl-right">
                    <span>{{ musicDetails.name }}</span>
                    <span
                        ><i v-for="item in musicDetails.ar"
                            >{{ item.name }}/</i
                        ></span
                    >
                </div>
            </div>
            <audio
                id="audio1"
                v-if="playUrlList[0]"
                :src="playUrlList[0].url"
                controls="controls"
                preload="preload"
            ></audio>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("play");

export default {
    props: ["id"],
    data() {
        return {
            num: 1,
        };
    },
    mounted() {
        this.playUrl(this.id);
        this.getLyric(this.id);
        this.getMusicDetails(this.id);
    },
    updated() {
        console.log(123);
        var audio1 = document.querySelector("audio");
        let timer;
        var current = 0;
        var cc = document.getElementById("ccc");
        audio1.addEventListener("play", function () {
            //开始播放时触发
            var pp = document.getElementById("img1");

            // 控制歌碟旋转
            timer = setInterval(() => {
                current = current + 10;
                pp.style.transform = "rotate(" + current + "deg)";
                pp.style.transition = "all 1s linear";
            }, 1000);
            cc.style.transform = "rotate( 20deg)";
            cc.style.transformOrigin = (0, 0, 0);
            cc.style.transition = "all 1s linear";
        });
        audio1.addEventListener("pause", function () {
            //开始播放时触发
            cc.style.transform = "rotate( -10deg)";
            cc.style.transformOrigin = (0, 0, 0);
            cc.style.transition = "all 1s linear";
            clearInterval(timer);
        });
    },
    computed: {
        ...mapState(["playUrlList", "musicDetails", "lyric"]),
    },
    methods: {
        ...mapActions(["playUrl", "getMusicDetails", "getLyric"]),
        ll(lyric1) {
            let a = lyric1.split("\n");
            let b = a.map((item) => {
                return item.substr(11, item.length);
            });
            let str = b.join("\n");
            return str;
        },
        open() {
            const div = document.getElementById("play-head");
            if (this.num % 2) {
                div.style.display = "none";
                div.style.transition = "all 1s linear";
                this.num++;
            } else {
                div.style.display = "flex";
                div.style.transition = "all 1s linear";
                this.num++;
            }
        },
    },
};
</script>

<style lang="scss">
#play-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 1100px;
    height: 60px;
    background-color: #17233d;
}
#play-head {
    height: 530px;
    display: flex;
    .ph-left {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        img {
            height: 300px;
            width: 300px;
            border-radius: 50%;
        }
        #circle {
            width: 50px;
            height: 50px;
            background-color: #fff;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            border-radius: 50%;
        }
        #ccc {
            position: absolute;
            top: -86px;
            left: 173px;
            z-index: 99;
            width: 248px;
            height: 299px;
        }
    }
    .ph-right {
        width: 50%;
        height: 100%;
        position: relative;
        p {
            width: 100%;
            height: 60%;
            padding: 0 20px;
            overflow-y: scroll;
            white-space: pre-line;
            text-align: center;
            line-height: 40px;
            position: absolute;
            bottom: 100px;
            left: 0;
        }
        .pr-head {
            margin-top: 35px;
            .pr-in {
                margin-top: 15px;
                display: flex;
                justify-content: space-evenly;
                span {
                    font-size: 14px;
                    width: 150px;
                    display: inline-block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    i {
                        font-style: normal;
                        color: #0f45b9;
                    }
                }
            }
        }
    }
}
.pb-left {
    position: absolute;
    width: 200px;
    height: 60px;
    color: #fff;
    display: flex;
    align-items: center;
    .pl-left {
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 43px;
            height: 43px;
            border-radius: 8px;
        }
    }
    .pl-right {
        width: 60%;
        height: 40px;
        display: flex;
        flex-wrap: wrap;
        span {
            width: 100%;
            text-align: left;
            font-size: 13px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            i {
                font-style: normal;
                color: #aaa;
            }
        }
    }
}
audio {
    width: 888px;
    background-color: #0f45b9;
    position: absolute;
    bottom: 10px;
    left: 200px;
}
</style>