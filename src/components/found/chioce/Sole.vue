<template>
    <div id="sole1">
        <h3>独家放送</h3>
        <div class="sole-content">
            <div
                class="sc-content"
                v-for="item in soleList"
                :key="item.id"
                @dblclick="details(item.id)"
            >
                <img v-lazy="item.picUrl" alt="" />
                <span>{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("personal");

export default {
    mounted() {
        this.getSoleList();
    },
    computed: {
        ...mapState(["soleList"]),
    },
    methods: {
        ...mapActions(["getSoleList"]),
        details(id) {
            this.$router.push("/home/mvPlay/" + id);
        },
    },
};
</script>

<style lang="scss">
#sole1 {
    width: 100%;
    height: 490px;
    padding: 10px 35px;
    overflow-y: scroll;
    h3 {
        width: 100%;
        text-align: left;
    }
    .sole-content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .sc-content {
            width: 48%;
            margin-top: 50px;
            img {
                width: 100%;
                border-radius: 5px;
            }
            span {
                display: block;
                width: 100%;
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 14px;
                margin-top: 5px;
            }
        }
    }
}
</style>