<template>
    <div class="rm">
        <div id="banner">
            <div class="content1">
                <el-carousel :interval="4000" type="card" height="147px">
                    <el-carousel-item
                        v-for="item in banners.banners"
                        :key="item.imageUrl"
                    >
                        <h3 class="medium">
                            <img v-lazy="item.imageUrl" alt="" />
                        </h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div id="recommend" class="mt">
            <div class="hd" @click="toMusicList">
                <span>推荐歌单</span>&nbsp
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="content">
                <div
                    class="rc-list"
                    v-for="item in recommendLists.result"
                    :key="item.id"
                    @click="detailsSong(item.id)"
                >
                    <div class="img1">
                        <img v-lazy="item.picUrl" alt="" />
                    </div>
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div id="sole" class="mt">
            <div class="hd" @click="toSole">
                <span>独家放送</span>&nbsp
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="content">
                <div
                    class="soleList"
                    v-for="item in soleList.result"
                    :key="item.id"
                    @dblclick="detailsSole(item.id)"
                >
                    <div class="img2">
                        <img v-lazy="item.sPicUrl" alt="" />
                    </div>
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div id="newMusic" class="mt">
            <div class="hd">
                <span @click="toNewMusic">最新音乐</span>&nbsp
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="content">
                <div
                    class="newMusicList"
                    v-for="item in newMusic.result"
                    :key="item.id"
                    @dblclick="detailsMusic(item.id)"
                >
                    <div class="nmLeft">
                        <img v-lazy="item.picUrl" alt="" />
                    </div>
                    <div class="nmRight">
                        <span>{{ item.name }}</span>
                        <div>
                            <i>SQ</i>
                            <span>{{ item.song.artists[0].name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="MV" class="mt">
            <div class="hd" @click="toMv">
                <span>推荐MV</span>&nbsp
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="content">
                <div
                    class="mvList"
                    v-for="item in mvList.result"
                    :key="item.id"
                    @dblclick="detailsMv(item.id)"
                >
                    <div class="img3">
                        <img v-lazy="item.picUrl" alt="" />
                    </div>
                    <span>{{ item.name }}</span>
                    <span>{{ item.artistName }}</span>
                </div>
            </div>
        </div>
        <div id="anchor" class="mt">
            <div class="hd">
                <span @click="toRadio">主播电台</span>&nbsp
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="content">
                <div
                    class="anchorList"
                    v-for="item in anchorList.result"
                    :key="item.id"
                >
                    <div class="img4">
                        <img v-lazy="item.picUrl" alt="" />
                    </div>
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
// recommend
const { mapActions, mapState } = createNamespacedHelpers("recommend");
// playList
const {
    mapActions: playListmapActions,
    mapState: playListmapState,
} = createNamespacedHelpers("playList");

export default {
    mounted() {
        // recommend
        this.getBanners();
        this.getRecommendList();
        this.getSoleList();
        this.getNewMusic();
        this.getMv();
        this.getAnchor();
    },
    computed: {
        // recommend
        ...mapState([
            "banners",
            "recommendLists",
            "soleList",
            "newMusic",
            "mvList",
            "anchorList",
        ]),
    },
    methods: {
        // recommend
        ...mapActions([
            "getBanners",
            "getRecommendList",
            "getSoleList",
            "getNewMusic",
            "getMv",
            "getAnchor",
        ]),
        // 点击到歌单
        toMusicList() {
            this.$router.push("/home/foundMusic/playList");
        },
        // 点击到最新音乐
        toNewMusic() {
            this.$router.push("/home/foundMusic/newMusic/NewSong");
        },
        // 点击到主播电台
        toRadio() {
            this.$router.push("/home/foundMusic/radio");
        },
        // 点击到详情页 独家放送
        detailsSole(id) {
            this.$router.push("/home/mvPlay/" + id);
        },
        // 点击到独家放送页
        toSole() {
            this.$router.push("/home/sole");
        },
        // 点击到MV
        toMv() {
            this.$router.push("/home/video");
        },
        detailsMusic(id) {
            this.$router.push("/home/play/" + id);
        },
        detailsMv(id) {
            this.$router.push("/home/mvPlay/" + id);
        },
        detailsSong(name) {
            this.$router.push("/home/playListDetails/" + name);
        },
    },
};
</script>

<style lang="scss">
.hd {
    font-weight: bolder;
    text-align: left;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.el-carousel__item {
    border-radius: 15px;
}
.content1 {
    width: 100%;
    margin-top: 20px;
}
.content {
    /* height: 100px; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
}
.mt {
    margin-top: 20px;
    cursor: pointer;
}
.rm {
    width: 90%;
    height: 100%;
    margin: 0 auto;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
#banner {
    margin-top: 20px;
}
.rc-list {
    width: 18%;
    margin-top: 15px;
    span {
        font-size: 13px;
        display: block;
        width: 100%;
        text-align: left;
        margin-top: 10px;
    }
}
#recommend {
    margin-top: 20px;
}
.img1 {
    width: 100%;
    height: 150px;
    border: 1px solid #ccc;
    background-color: #99a9bf;
    border-radius: 10px;
    img {
        border-radius: 10px;
        // width: 100%;
        height: 100%;
    }
}
.soleList {
    width: 30%;
    border-radius: 10px;
    .img2 {
        width: 100%;
        border-radius: 10px;
        img {
            border-radius: 10px;
        }
    }
    span {
        font-size: 13px;
        display: block;
        width: 100%;
        text-align: left;
        margin-top: 10px;
    }
}
.newMusicList {
    width: 30%;
    height: 50px;
    margin-top: 15px;
    display: flex;
    border-radius: 15px;
    text-align: left;
    cursor: pointer;
    &:hover {
        background-color: #fff;
    }
    .nmLeft {
        width: 50px;
        img {
            border-radius: 5px;
        }
    }
    .nmRight {
        padding-left: 10px;
        span {
            // display: block;
            text-align: left;
            margin-top: 4px;
            font-size: 13px;
        }
        i {
            font-style: normal;
            font-size: 12px;
            display: inline-block;
            color: red;
            border: 1px solid red;
            width: 25px;
            text-align: center;
            margin-right: 8px;
            margin-top: 8px;
            border-radius: 3px;
        }
    }
}
.mvList {
    width: 23%;
    img {
        border-radius: 12px;
    }
    span {
        display: block;
        font-size: 12px;
        width: 100%;
        text-align: left;
    }
}
.anchorList {
    width: 14%;
    img {
        border-radius: 12px;
        margin-top: 10px;
        width: 110px;
    }
    span {
        display: block;
        font-size: 12px;
        width: 100%;
        text-align: left;
    }
}
</style>