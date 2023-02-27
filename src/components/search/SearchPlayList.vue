<template>
    <div class="searchPlayList">
        <div
            class="sp-content"
            v-for="item in searchPlayList"
            @dblclick="details(item.id)"
        >
            <img v-lazy="item.coverImgUrl" alt="" />
            <p>{{ item.name }}</p>
            <span>{{ item.trackCount }}首</span>
            <span>by-{{ item.creator.nickname }}</span>
        </div>
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
                type: 1000,
                limit: 100,
            },
        };
    },
    mounted() {
        this.params.keywords = this.name;
        this.getSearchPlayList(this.params);
    },
    watch: {
        name() {
            this.params.keywords = this.name;
            this.getSearchPlayList(this.params);
        },
    },
    computed: {
        ...mapState(["searchPlayList"]),
    },
    methods: {
        ...mapActions(["getSearchPlayList"]),
        details(id) {
            this.$router.push("/home/playListDetails/" + id);
        },
    },
};
</script>

<style lang="scss">
.searchPlayList {
    width: 100%;
    .sp-content {
        width: 100%;
        display: flex;
        margin-top: 20px;
        img,
        p,
        span {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
        }
        img {
            width: 10%;
            border-radius: 10px;
        }
        p {
            width: 50%;
            justify-content: flex-start;
            padding-left: 20px;
        }
        span {
            width: 15%;
            color: #ccc;
        }
    }
}
</style>