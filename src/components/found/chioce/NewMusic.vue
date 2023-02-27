<template>
    <div id="newMusic">
        <div class="nmhead">
            <el-row class="btn">
                <el-button type="primary" plain round @click="newSong"
                    >新歌速递</el-button
                >
                <el-button type="success" plain round @click="newDisc"
                    >新碟上架</el-button
                >
            </el-row>
        </div>
        <div class="nmcontent">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        newSong() {
            this.$router.push("/home/foundMusic/newMusic/NewSong");
        },
        newDisc() {
            this.$router.push("/home/foundMusic/newMusic/NewDisc");
        },
    },
};
</script>

<style>
.nmhead {
    margin: 25px auto;
}
.btn {
    /* border: 1px solid #cccccc; */
    border-radius: 20px;
    margin: 0 auto;
    width: 26%;
    color: black;
}
.nmcontent {
    width: 100%;
    padding: 0 40px;
    /* padding-left: 40px; */
}
</style>