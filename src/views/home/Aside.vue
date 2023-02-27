<template>
    <el-menu
        default-active="/home/foundMusic"
        background-color="#ffffff "
        text-color="#1f4e79"
        active-text-color="#ffd04b"
        :router="true"
    >
        <el-menu-item index="/home/foundMusic/recommend">
            <i class="el-icon-view"></i>
            <span slot="title">发现音乐</span>
        </el-menu-item>
        <el-menu-item index="/home/video">
            <i class="el-icon-video-play"></i>
            <span slot="title">视频</span>
        </el-menu-item>
        <el-menu-item index="/home/selfCenter">
            <i class="el-icon-s-custom"></i>
            <span slot="title">个人中心</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {};
</script>

<style>
.el-aside {
    text-align: left;
}
</style>