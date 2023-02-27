<template>
    <div class="searchRadio">
        <div class="sr-content" v-for="item in searchRadio">
            <img v-lazy="item.picUrl" alt="" />
            <p>{{ item.name }}</p>
            <span>by-{{ item.dj.nickname }}</span>
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
                type: 1009,
                limit: 100,
            },
        };
    },
    mounted() {
        this.params.keywords = this.name;
        this.getSearchRadio(this.params);
    },
    watch: {
        name() {
            this.params.keywords = this.name;
            this.getSearchRadio(this.params);
        },
    },
    computed: {
        ...mapState(["searchRadio"]),
    },
    methods: {
        ...mapActions(["getSearchRadio"]),
        details(id) {
            // this.$router.push("/home/playListDetails/" + id);
        },
    },
};
</script>

<style lang="scss">
.searchRadio {
    width: 100%;
    .sr-content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        img {
            width: 10%;
            border-radius: 10px;
        }
        p {
            width: 50%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-left: 20px;
            font-size: 14px;
        }
        span {
            display: inline-block;
            width: 20%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 14px;
            color: #ccc;
        }
    }
}
</style>