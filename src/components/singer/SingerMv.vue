<template>
    <div class="singerMv">
        <div
            class="sm-content"
            v-for="item in singerMv"
            :key="item.id"
            @dblclick="details(item.id)"
        >
            <img v-lazy="item.imgurl" alt="" />
            <span>{{ item.name }}</span>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("singerHomePage");

export default {
    computed: {
        ...mapState(["singerMv"]),
    },
    methods: {
        ...mapActions(["getSingerMv"]),
        details(id) {
            this.$router.push("/home/mvPlay/" + id);
        },
    },
};
</script>

<style lang="scss">
.singerMv {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .sm-content {
        width: 30%;
        margin-top: 20px;
        img {
            width: 100%;
            height: 153px;
            border-radius: 10px;
        }
        span {
            display: block;
            width: 100%;
            text-align: left;
            font-size: 14px;
            margin-top: 5px;
        }
    }
}
</style>