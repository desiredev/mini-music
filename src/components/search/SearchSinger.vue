<template>
    <div class="searchSinger">
        <div
            class="ss-content"
            v-for="item in searchSinger"
            @dblclick="details(item.id)"
        >
            <div class="sc-left">
                <img v-lazy="item.picUrl" alt="" />
            </div>
            <div class="sc-center">
                <p>{{ item.name }}</p>
            </div>
            <div class="sc-right">
                <el-row>
                    <el-button icon="el-icon-user-solid" circle></el-button>
                </el-row>
            </div>
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
                type: 100,
                limit: 100,
            },
        };
    },
    mounted() {
        this.params.keywords = this.name;
        this.getSearchSinger(this.params);
    },
    watch: {
        name() {
            this.params.keywords = this.name;
            this.getSearchSinger(this.params);
        },
    },
    computed: {
        ...mapState(["searchSinger"]),
    },
    methods: {
        ...mapActions(["getSearchSinger"]),
        details(id) {
            this.$router.push("/home/SingerHomePage/" + id);
        },
    },
};
</script>

<style lang="scss">
.searchSinger {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .ss-content {
        width: 100%;
        height: 100px;
        display: flex;
        .sc-left {
            width: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 80px;
                height: 80px;
                border-radius: 10px;
            }
        }
        .sc-center {
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-left: 20px;
            p {
                font-size: 13px;
            }
        }
        .sc-right {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 10%;
        }
    }
}
</style>