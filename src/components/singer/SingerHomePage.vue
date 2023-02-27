<template>
    <div class="singerHomePage1">
        <div class="shp-head">
            <div class="sh-left">
                <img :src="singer.img1v1Url" alt="" />
            </div>
            <div class="sh-right">
                <h3>{{ singer.name }}</h3>
                <el-row>
                    <el-button size="small" round>收藏</el-button>
                    <el-button size="small" round>个人主页</el-button>
                </el-row>
                <p>
                    <span>单曲数：{{ singer.musicSize }}</span>
                    <span>专辑数：{{ singer.albumSize }}</span>
                    <span>MV数：{{ singer.mvSize }}</span>
                </p>
            </div>
        </div>
        <div class="shp-content">
            <el-tabs v-model="activeName">
                <el-tab-pane label="专辑" name="first"
                    ><SingerAlbum></SingerAlbum
                ></el-tab-pane>
                <el-tab-pane label="MV" name="second"
                    ><SingerMv></SingerMv
                ></el-tab-pane>
                <el-tab-pane label="歌手详情" name="third"
                    ><SingerDetails></SingerDetails
                ></el-tab-pane>
                <el-tab-pane label="相似歌手" name="fourth"
                    ><SingerSimi></SingerSimi
                ></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("singerHomePage");
import SingerAlbum from "./SingerAlbum";
import SingerMv from "./SingerMv";
import SingerDetails from "./SingerDetails";
import SingerSimi from "./SingerSimi";

export default {
    components: {
        SingerAlbum,
        SingerMv,
        SingerDetails,
        SingerSimi,
    },
    props: ["id"],
    data() {
        return {
            activeName: "first",
        };
    },
    mounted() {
        this.singerHomePage(this.id);
    },
    computed: {
        ...mapState(["singer"]),
    },
    methods: {
        ...mapActions(["singerHomePage"]),
    },
};
</script>

<style lang="scss">
.singerHomePage1 {
    width: 100%;
    height: 530px;
    padding: 30px 30px 0 30px;
    overflow-y: scroll;
    .shp-head {
        height: 240px;
        display: flex;
        .sh-left {
            width: 25%;
            img {
                width: 100%;
                border-radius: 8px;
                border: 1px solid #ccc;
            }
        }
        .sh-right {
            width: 75%;
            padding-left: 20px;
            h3,
            p,
            .el-row {
                width: 100%;
                text-align: left;
                margin: 20px 0;
            }
            p {
                text-indent: 0;
                span {
                    margin-right: 20px;
                    font-size: 14px;
                    font-weight: 100;
                }
            }
        }
    }
    .shp-content {
        margin-top: 30px;
    }
}
</style>