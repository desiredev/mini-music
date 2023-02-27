<template>
    <div id="found">
        <div class="found-header">
            <el-menu
                :default-active="activePath"
                mode="horizontal"
                background-color="#ffffff"
                text-color="#1f4e79"
                :router="true"
            >
                <el-menu-item index="/home/foundMusic/recommend"
                    >个性推荐</el-menu-item
                >
                <el-menu-item index="/home/foundMusic/playList"
                    >歌单</el-menu-item
                >
                <el-menu-item index="/home/foundMusic/radio"
                    >主播电台</el-menu-item
                >
                <!-- <el-menu-item index="/home/foundMusic/rankList"
                    >排行榜</el-menu-item
                > -->
                <el-menu-item index="/home/foundMusic/singer"
                    >歌手</el-menu-item
                >
                <el-menu-item index="/home/foundMusic/newMusic/NewSong"
                    >最新音乐</el-menu-item
                >
            </el-menu>
        </div>
        <div class="found-bottom">
            <router-view></router-view>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            activePath: "/home/foundMusic/recommend",
        };
    },
    watch: {
        $route(newPath) {
            this.activePath = newPath.path;
        },
    },
};
</script>

<style>
#found {
    position: relative;
}
.el-main {
    padding: 0;
}
.found-bottom {
    height: 530px;
    padding-top: 60px;
    overflow: hidden;
    overflow-y: scroll;
}
.found-header {
    position: fixed;
    background-color: #eaeef2;
    margin-left: 40px;
    z-index: 99;
    width: 43%;
}
el-menu-item i {
    cursor: pointer;
}
</style>