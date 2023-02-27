<template>
    <div id="video">
        <el-tabs class="videoh" v-model="activeName">
            <el-tab-pane class="vvv" label="视频" name="first"
                ><Video></Video
            ></el-tab-pane>
            <el-tab-pane label="MV" name="second"><Mv></Mv></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Video from "./choice/Video";
import Mv from "./choice/Mv";
export default {
    components: {
        Video,
        Mv,
    },
    data() {
        return {
            activeName: "first",
        };
    },
};
</script>

<style lang="scss">
#video {
    width: 100%;
    height: 100%;
    padding: 0 40px;
    .videoh {
        height: 100%;
    }
}
.el-tabs__nav-wrap {
    height: 60px;
    .el-tabs__nav-scroll {
        height: 100%;
        .el-tabs__nav {
            height: 100%;
            .el-tabs__item {
                height: 100%;
                line-height: 60px;
            }
        }
    }
}
.el-tab-pane {
    height: 430px;
    overflow-y: scroll;
}
#pane-second {
    padding-right: 30px;
}
</style>