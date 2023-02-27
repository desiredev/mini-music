<template>
    <div class="searchUser">
        <div class="su-content" v-for="item in searchUser">
            <div class="sc-left">
                <img v-lazy="item.avatarUrl" alt="" />
                <img
                    class="small"
                    v-if="item.avatarDetail"
                    v-lazy="item.avatarDetail.identityIconUrl"
                    alt=""
                />
            </div>
            <p>{{ item.nickname }}</p>
            <span>{{ item.signature }}</span>
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
                type: 1002,
                limit: 100,
            },
        };
    },
    mounted() {
        this.params.keywords = this.name;
        this.getSearchUser(this.params);
    },
    watch: {
        name() {
            this.params.keywords = this.name;
            this.getSearchUser(this.params);
        },
    },
    computed: {
        ...mapState(["searchUser"]),
    },
    methods: {
        ...mapActions(["getSearchUser"]),
        details(id) {
            // this.$router.push("/home/playListDetails/" + id);
        },
    },
};
</script>

<style lang="scss">
.searchUser {
    width: 100%;
    .su-content {
        width: 100%;
        display: flex;
        margin-top: 20px;
        .sc-left {
            width: 10%;
            position: relative;
            img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
            .small {
                position: absolute;
                bottom: 7px;
                right: 0;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                z-index: 99;
            }
        }
        p {
            width: 80%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-left: 20px;
            font-size: 14px;
        }
        span {
            display: inline-block;
            line-height: 84px;
            text-align: left;
            width: 10%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #ccc;
            font-size: 14px;
        }
    }
}
</style>