<template>
    <div class="search1">
        <!-- <div class="search-head">
            <h4>找到999首单曲</h4>
        </div> -->
        <div class="search-content">
            <el-tabs v-model="activeName">
                <el-tab-pane label="单曲" name="first"
                    ><SearchSingle :name="name"></SearchSingle
                ></el-tab-pane>
                <el-tab-pane label="歌手" name="second"
                    ><SearchSinger :name="name"></SearchSinger
                ></el-tab-pane>
                <el-tab-pane label="视频" name="third"
                    ><SearchVideo :name="name"></SearchVideo
                ></el-tab-pane>
                <el-tab-pane label="歌单" name="fourth"
                    ><SearchPlayList :name="name"></SearchPlayList
                ></el-tab-pane>
                <el-tab-pane label="主播电台" name="fifth"
                    ><SearchRadio :name="name"></SearchRadio
                ></el-tab-pane>
                <el-tab-pane label="用户" name="sixth"
                    ><SearchUser :name="name"></SearchUser
                ></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import SearchSingle from "./SearchSingle";
import SearchSinger from "./SearchSinger";
import SearchVideo from "./SearchVideo";
import SearchPlayList from "./SearchPlayList";
import SearchRadio from "./SearchRadio";
import SearchUser from "./SearchUser";

// import { createNamespacedHelpers } from "vuex";
// const { mapState, mapMutations } = createNamespacedHelpers("search");

export default {
    props: ["name"],
    components: {
        SearchSingle,
        SearchSinger,
        SearchVideo,
        SearchPlayList,
        SearchRadio,
        SearchUser,
    },
    data() {
        return {
            activeName: "first",
        };
    },
    methods: {},
};
</script>

<style lang="scss">
.search1 {
    padding: 30px;
    height: 520px;
    overflow-y: scroll;
    .search-head {
        margin-bottom: 20px;
        h4 {
            text-align: left;
        }
    }
}
</style>