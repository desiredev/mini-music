<template>
    <div id="rk">
        <div class="official">
            <div class="official-head">
                <h3>排行榜{{ big }}</h3>
            </div>
            <div
                class="official-content"
                v-for="(item, index) in big"
                :key="index"
            >
                <div class="oc-left">
                    <img v-lazy="item.rankImage" alt="" />
                </div>
                <div class="oc-right">
                    <div class="one">
                        <b-scroll height="400px">
                            <b-table stripe stripe-background-color="#f9f9f9">
                                <b-table-body
                                    slot="body"
                                    data-id=""
                                    v-if="item.small"
                                >
                                    <b-table-tr
                                        v-for="(
                                            item1, index
                                        ) in item.small.rr.slice(0, 5)"
                                        :key="index"
                                        class="tr"
                                        data-id="66"
                                    >
                                        <b-table-td
                                            width="50px"
                                            :class="{ active: index < 3 }"
                                        >
                                            {{ getListIndex(index) }}
                                        </b-table-td>
                                        <b-table-td width="60px"
                                            ><i class="iconfont icon-xihuan"></i
                                        ></b-table-td>
                                        <b-table-td class="name">{{
                                            item1.name
                                        }}</b-table-td>
                                        <b-table-td
                                            class="arname"
                                            width="120px"
                                            >{{ item1.ar[0].name }}</b-table-td
                                        >
                                    </b-table-tr>
                                </b-table-body>
                            </b-table>
                        </b-scroll>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("rank");

export default {
    mounted() {
        this.getRankList();
    },
    computed: {
        ...mapState(["rankList", "soar", "song1", "big"]),
    },
    methods: {
        ...mapActions(["getRankList", "getSoar"]),
        // 获取音乐列表下标
        getListIndex(index) {
            let currentIndex = 0;
            currentIndex = index < 9 ? "0" + (index + 1) : index + 1;
            return currentIndex;
        },
    },
};
</script>

<style lang="scss">
#rk {
    padding: 30px;
    padding-left: 40px;
}
h3 {
    width: 100%;
    text-align: left;
    padding-left: 25px;
}
tr {
    border-radius: 5px;
    background-color: #ffffff;
}
.active {
    color: red;
}
.official-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    height: 200px;
    .oc-left {
        width: 25%;
        img {
            // width: 100%;
            height: 75%;
        }
    }
    .oc-right {
        width: 75%;
    }
}
.name {
    text-align: left;
}
.arname {
    text-align: right;
}
</style>