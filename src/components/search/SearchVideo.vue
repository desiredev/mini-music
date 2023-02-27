<template>
    <div class="searchVideo">
        <div
            class="sv-content"
            v-for="item in searchVideo"
            @dblclick="details(item.vid)"
        >
            <img v-lazy="item.coverUrl" alt="" />
            <p>{{ item.title }}</p>
            <span>by-{{ item.creator[0].userName }}</span>
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
                type: 1014,
                limit: 100,
            },
        };
    },
    mounted() {
        this.params.keywords = this.name;
        this.getSearchVideo(this.params);
    },
    watch: {
        name() {
            this.params.keywords = this.name;
            this.getSearchVideo(this.params);
        },
    },
    computed: {
        ...mapState(["searchVideo"]),
    },
    methods: {
        ...mapActions(["getSearchVideo"]),
        details(id) {
            this.$router.push("/home/videoPlay/" + id);
        },
    },
};
</script>

<style lang="scss">
.searchVideo {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .sv-content {
        width: 30%;
        margin-top: 20px;
        img {
            width: 100%;
            height: 120px;
            border-radius: 10px;
        }
        p,
        span {
            display: block;
            width: 100%;
            text-align: left;
            font-size: 14px;
        }
        span {
            color: #ccc;
        }
    }
}
</style>