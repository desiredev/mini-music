<template>
    <div id="collection">
        <div class="c-content" v-for="item in collectionList">
            <div class="cc-left">
                <img v-lazy="item.avatarUrl" alt="" />
            </div>
            <div class="cc-right">
                <span>{{ item.nickname }}</span>
                <span class="co">{{ item.signature }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("details");

export default {
    computed: {
        ...mapState(["collectionList"]),
    },
    methods: {},
};
</script>

<style lang="scss">
#collection {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: left;
    .c-content {
        width: 47%;
        margin-top: 15px;
        display: flex;
        padding: 20px;
        .cc-left {
            width: 30%;
            img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
        }
        .cc-right {
            width: 70%;
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
            span {
                width: 100%;
                align-items: center;
                display: flex;
                color: #1f4e79;
            }
            .co {
                color: #ccc;
            }
        }
    }
}
</style>