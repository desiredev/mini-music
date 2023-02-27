<template>
    <div id="ns">
        <div style="margin-top: 20px" class="menu">
            <el-radio-group v-model="type" size="mini" @change="type1">
                <el-radio-button label="0">全部</el-radio-button>
                <el-radio-button label="7">华语</el-radio-button>
                <el-radio-button label="96">欧美</el-radio-button>
                <el-radio-button label="8">日本</el-radio-button>
                <el-radio-button label="16">韩国</el-radio-button>
            </el-radio-group>
        </div>
        <div class="ns-content">
            <div class="one">
                <b-scroll height="400px">
                    <b-table
                        show-border
                        stripe
                        stripe-background-color="#f9f9f9"
                    >
                        <b-table-body slot="body">
                            <b-table-tr
                                v-for="(item, index) in newSong"
                                :key="index"
                            >
                                <b-table-td width="40px">
                                    {{ getListIndex(index) }}
                                </b-table-td>
                                <b-table-td class="ns-img" width="90px">
                                    <img
                                        @dblclick="details(item.id)"
                                        v-lazy="item.album.blurPicUrl"
                                        alt=""
                                        width="100%"
                                    />
                                </b-table-td>
                                <b-table-td width="300px">{{
                                    item.name
                                }}</b-table-td>
                                <b-table-td class="artist">
                                    <span
                                        v-for="(item1, index) in item.artists"
                                        :key="index"
                                        >{{ item1.name }}/</span
                                    >
                                </b-table-td>
                                <b-table-td>{{ item.album.name }}</b-table-td>
                                <b-table-td class="time" width="120px">{{
                                    toto(item)
                                }}</b-table-td>
                            </b-table-tr>
                        </b-table-body>
                    </b-table>
                </b-scroll>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("newMusic");

export default {
    data() {
        return {
            type: "0",
        };
    },
    mounted() {
        this.getNewSong(this.type);
    },
    computed: {
        ...mapState(["newSong"]),
    },
    methods: {
        ...mapActions(["getNewSong"]),

        toto(item) {
            let a =
                parseInt(item.duration / 1000 / 60) < 10
                    ? "0" + parseInt(item.duration / 1000 / 60)
                    : parseInt(item.duration / 1000 / 60);

            let b =
                parseInt(
                    (parseFloat(item.duration / 1000 / 60) -
                        parseInt(item.duration / 1000 / 60)) *
                        60
                ) < 10
                    ? "0" +
                      parseInt(
                          (parseFloat(item.duration / 1000 / 60) -
                              parseInt(item.duration / 1000 / 60)) *
                              60
                      )
                    : parseInt(
                          (parseFloat(item.duration / 1000 / 60) -
                              parseInt(item.duration / 1000 / 60)) *
                              60
                      );
            return a + ":" + b;
        },
        /**获取音乐列表下标 */
        getListIndex(index) {
            let currentIndex = 0;
            currentIndex = index < 9 ? "0" + (index + 1) : index + 1;
            return currentIndex;
        },
        // 搜索
        type1() {
            this.getNewSong(this.type);
        },
        details(id) {
            // console.log(id);
            this.$router.push("/home/play/" + id);
        },
    },
};
</script>

<style lang="scss">
.menu {
    width: 100%;
    text-align: left;
}
.ns-content {
    margin-top: 20px;
}
el-radio-button {
    margin-left: 20px;
}
.vbestui-table-td {
    text-align: left;
    display: flex;
    align-items: center;
    color: cadetblue;
    font-size: 13px;
}
.one {
    img {
        height: 100%;
        border-radius: 10px;
    }
}

.ns-img {
    text-align: center;
}
.time {
    padding-left: 50px;
}
</style>