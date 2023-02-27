<template>
    <div class="simi">
        <div
            class="simi-content"
            v-for="item in simiSinger"
            :key="item.id"
            @dblclick="details(item.id)"
        >
            <img v-lazy="item.img1v1Url" alt="" />
            <span>{{ item.name }}</span>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("singerHomePage");

export default {
    computed: {
        ...mapState(["simiSinger"]),
    },
    methods: {
        details(id) {
            this.$router.push("/home/SingerHomePage/" + id);
            location.reload();
        },
    },
};
</script>

<style lang="scss">
.simi {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.simi-content {
    width: 18%;
    margin-top: 20px;
    img {
        width: 100%;
        height: 142px;
        background-color: #ccc;
        border-radius: 10px;
    }
    span {
        width: 100%;
        display: block;
        text-align: left;
        font-size: 14px;
        margin-top: 10px;
    }
}
</style>