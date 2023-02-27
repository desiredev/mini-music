<template>
    <div id="rd">
        <div class="rd-head">
            <el-carousel :interval="4000" type="card" height="147px">
                <el-carousel-item
                    v-for="item in radioList.data"
                    :key="item.pic"
                >
                    <h3 class="medium">
                        <img v-lazy="item.pic" alt="" />
                    </h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="rd-content">
            <div class="payradio">
                <span>付费精品</span>&nbsp
                <i class="el-icon-arrow-right"></i>
                <div class="content2">
                    <div
                        class="prlist"
                        v-for="item in payRadio.list"
                        :key="item.picUrl"
                    >
                        <div class="pr-left">
                            <img v-lazy="item.picUrl" alt="" />
                        </div>
                        <div class="pr-right">
                            <p>{{ item.name }}</p>
                            <span>{{ item.rcmdText }}</span>
                            <span>{{ item.lastProgramName }}</span>
                            <i
                                >￥{{
                                    (item.originalPrice * 0.01).toFixed(2)
                                }}</i
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="recommendradio">
                <span>电台个性推荐</span>&nbsp
                <i class="el-icon-arrow-right"></i>
                <div class="content2">
                    <div
                        class="rcr"
                        v-for="item in recommendRadio.data"
                        :key="item.rcmdtext"
                    >
                        <div class="rcr-img">
                            <img v-lazy="item.picUrl" alt="" />
                        </div>
                        <span>{{ item.rcmdtext }}</span>
                    </div>
                </div>
            </div>
            <div class="createcover">
                <span>创作翻唱</span>&nbsp
                <i class="el-icon-arrow-right"></i>
                <div class="content2">
                    <div
                        class="cc1"
                        v-for="item in createCover.djRadios"
                        :key="item.rcmdtext"
                    >
                        <div class="cc1-img">
                            <img v-lazy="item.picUrl" alt="" />
                        </div>
                        <span>{{ item.rcmdtext }}</span>
                    </div>
                </div>
            </div>
            <div class="listen">
                <span>声之剧场</span>&nbsp
                <i class="el-icon-arrow-right"></i>
                <div class="content2">
                    <div class="lis" v-for="item in listenList.djRadios">
                        <div class="lis-img">
                            <img v-lazy="item.picUrl" alt="" />
                        </div>
                        <span>{{ item.rcmdtext }}</span>
                    </div>
                </div>
            </div>
            <div class="story">
                <span>音乐故事</span>&nbsp
                <i class="el-icon-arrow-right"></i>
                <div class="content2">
                    <div class="storylist1" v-for="item in story.djRadios">
                        <div class="storylist-img">
                            <img v-lazy="item.picUrl" alt="" />
                        </div>
                        <span>{{ item.rcmdtext }}</span>
                    </div>
                </div>
            </div>
            <div class="emotion">
                <span>情感调频</span>&nbsp
                <i class="el-icon-arrow-right"></i>
                <div class="content2">
                    <div class="emo" v-for="item in emotion.djRadios">
                        <div class="emo-img">
                            <img v-lazy="item.picUrl" alt="" />
                        </div>
                        <span>{{ item.rcmdtext }}</span>
                    </div>
                </div>
            </div>
            <div class="friends">
                <span>声音恋人</span>&nbsp
                <i class="el-icon-arrow-right"></i>
                <div class="content2">
                    <div class="fri" v-for="item in friends.djRadios">
                        <div class="fri-img">
                            <img v-lazy="item.picUrl" alt="" />
                        </div>
                        <span>{{ item.rcmdtext }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="rd-bottom"></div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("radio");

export default {
    mounted() {
        this.getRadio();
        this.getPayRaddio();
        this.getRecommendRadio();
        this.getCreateCover();
        this.getListen();
        this.getStory();
        this.getEmotion();
        this.getFriend();
    },
    computed: {
        ...mapState([
            "radioList",
            "payRadio",
            "recommendRadio",
            "createCover",
            "listenList",
            "story",
            "emotion",
            "friends",
        ]),
    },
    methods: {
        ...mapActions([
            "getRadio",
            "getPayRaddio",
            "getRecommendRadio",
            "getCreateCover",
            "getListen",
            "getStory",
            "getEmotion",
            "getFriend",
        ]),
    },
};
</script>

<style lang="scss">
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}
span {
    font-weight: bold;
}
.medium {
    img {
        width: 100%;
    }
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    border-radius: 15px;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
    border-radius: 15px;
}
#rd {
    padding: 40px;
}
.rd-content {
    text-align: left;
}
.content2 {
    /* height: 100px; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 20px;
}
.prlist {
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
    .pr-left {
        width: 30%;
        img {
            width: 100%;
            border-radius: 10px;
        }
    }
    .pr-right {
        width: 70%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 8px;
        p {
            font-weight: bold;
        }
        span {
            color: #99a9bf;
        }

        p,
        span,
        i {
            display: block;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 13px;
        }
        i {
            font-style: normal;
            font-size: 18px;
            color: red;
        }
    }
}
.rcr,
.cc1,
.lis,
.emo,
.storylist1,
.fri {
    width: 18%;
    margin-top: 10px;
    img {
        width: 140px;
        border-radius: 10px;
    }
    span {
        font-size: 13px;
        margin-top: 15px;
        display: block;
        font-weight: 100;
    }
}
</style>