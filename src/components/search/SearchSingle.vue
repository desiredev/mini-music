<template>
    <div class="one">
        <b-scroll height="400px">
            <b-table show-border stripe stripe-background-color="#f9f9f9">
                <b-table-head slot="head" split split-color="#ffffff">
                    <b-table-tr>
                        <b-table-td width="300px">音乐标题</b-table-td>
                        <b-table-td class="ss" width="210px">歌手</b-table-td>
                        <b-table-td class="ss" width="170px">专辑</b-table-td>
                        <b-table-td width="120px">时长</b-table-td>
                    </b-table-tr>
                </b-table-head>
                <b-table-body slot="body">
                    <b-table-tr
                        v-for="(item, index) in searchSingleList"
                        :key="index"
                    >
                        <b-table-td width="40px">
                            {{ getListIndex(index) }}
                        </b-table-td>
                        <b-table-td class="one-img" width="250px">
                            <span class="play" @dblclick="music(item.id)">{{
                                item.name
                            }}</span>
                            <i>SQ</i>
                        </b-table-td>
                        <b-table-td class="athors1" width="200px"
                            ><span
                                v-for="(item1, index) in item.ar"
                                :key="index"
                                >{{ item1.name }}</span
                            >
                            <i v-if="item.ar.length > 1">/</i></b-table-td
                        >
                        <b-table-td class="artist1">
                            <span>{{ item.al.name }}</span>
                        </b-table-td>
                        <b-table-td class="time1" width="120px">{{
                            toto(item)
                        }}</b-table-td>
                    </b-table-tr>
                </b-table-body>
            </b-table>
        </b-scroll>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("search");

export default {
    props: ["name"],
    data() {
        return {
            params: {
                keywords: "",
                type: 1,
                limit: 100,
            },
        };
    },
    mounted() {
        this.params.keywords = this.name;
        this.getSearchSingle(this.params);
    },
    watch: {
        name() {
            this.params.keywords = this.name;
            this.getSearchSingle(this.params);
        },
    },
    computed: {
        ...mapState(["searchSingleList"]),
    },
    methods: {
        ...mapActions(["getSearchSingle"]),
        toto(item) {
            let a =
                parseInt(item.dt / 1000 / 60) < 10
                    ? "0" + parseInt(item.dt / 1000 / 60)
                    : parseInt(item.dt / 1000 / 60);

            let b =
                parseInt(
                    (parseFloat(item.dt / 1000 / 60) -
                        parseInt(item.dt / 1000 / 60)) *
                        60
                ) < 10
                    ? "0" +
                      parseInt(
                          (parseFloat(item.dt / 1000 / 60) -
                              parseInt(item.dt / 1000 / 60)) *
                              60
                      )
                    : parseInt(
                          (parseFloat(item.dt / 1000 / 60) -
                              parseInt(item.dt / 1000 / 60)) *
                              60
                      );
            return a + ":" + b;
        },
        // 获取音乐列表下标
        getListIndex(index) {
            let currentIndex = 0;
            currentIndex = index < 9 ? "0" + (index + 1) : index + 1;
            return currentIndex;
        },
        music(id) {
            this.$router.push("/home/play/" + id);
        },
    },
};
</script>

<style lang="scss">
.vbestui-table-td,
.vbestui-table-tr {
    border: none;
}
.vbestui-table-tr {
    margin-top: 8px;
}
.vbestui-table-td {
    display: flex;
    align-items: center;
}
.play {
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.one-img {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    padding-left: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    i {
        font-style: normal;
        font-size: 12px;
        display: inline-block;
        color: red;
        border: 1px solid red;
        width: 25px;
        text-align: center;
        margin-left: 8px;
        border-radius: 3px;
    }
}
.vbestui-table-body {
    font-size: 13px;
    color: #393d49;
}
.vbestui-table-head {
    color: #ccc;
}
.artist1 {
    text-align: left;
    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
.athors1 {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.vbestui-scroll {
    overflow: auto;
}
.vbestui-table-border {
    border: none;
}
.ss {
    text-align: left;
}
.time1 {
    text-align: center;
}
</style>