<template>
    <div id="videoList">
        <div class="vl-head">
            <el-popover
                placement="right"
                width="500"
                trigger="hover"
                offset="1"
            >
                <div class="tag-group">
                    <el-tag
                        class="tag"
                        v-for="item in videoTagList"
                        :key="item.id"
                        type="item.info"
                        size="small"
                        width="100"
                        @click="int(item.name, item.id)"
                    >
                        {{ item.name }}
                    </el-tag>
                </div>
                <el-button id="buttom" slot="reference">现场</el-button>
            </el-popover>
        </div>
        <div class="vl-content">
            <div
                class="vlo-ct"
                v-for="item in videoList"
                :key="item.data.coverUrl"
                @dblclick="details(item.data.vid)"
            >
                <div class="vc-img">
                    <img
                        v-lazy="item.data.coverUrl"
                        @mouseenter="enter($event, item.data.previewUrl)"
                        @mouseleave="leave($event, item.data.coverUrl)"
                        alt=""
                    />
                </div>
                <p>{{ item.data.title }}</p>
                <span v-if="item.data"
                    >by-{{ item.data.creator.nickname }}</span
                >
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("video");

export default {
    mounted() {
        this.getVideoTag();
        this.getVideoList(58100);
    },
    computed: {
        ...mapState(["videoTagList", "videoList"]),
    },
    methods: {
        ...mapActions(["getVideoTag", "getVideoList"]),
        // 点击标签筛选
        int(name, id) {
            document.getElementById("buttom").innerText = name;
            this.getVideoList(id);
        },
        // 鼠标进入动态效果
        enter(e, name) {
            if (name) {
                e.target.setAttribute("src", name);
            }
        },
        // 鼠标移出恢复效果
        leave(e, name) {
            e.target.setAttribute("src", name);
        },
        details(id) {
            // console.log(id);
            this.$router.push("/home/videoPlay/" + id);
        },
    },
};
</script>

<style lang="scss">
#videoList {
    height: 100%;
    margin-top: 20px;
}
.vl-head {
    width: 100%;
    text-align: left;
}
.vl-content {
    height: 370px;
    display: flex;
    cursor: pointer;
    flex-wrap: wrap;
    .vlo-ct {
        width: 30%;
        margin: 10px;
        .vc-img {
            width: 100%;
            height: 130px;
            box-sizing: border-box;
        }
        img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
        p,
        span {
            display: block;
            width: 100%;
            text-align: left;
            font-size: 14px;
        }
        p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        span {
            color: #ccc;
            margin-top: 5px;
        }
    }
}
.el-tabs__content {
    height: 100%;
    padding-top: 60px;
}
#tan {
    left: 673px;
}
.tag-group {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 200px;
}
.tag {
    cursor: pointer;
    margin: 10px;
}
#buttom {
    border-radius: 15px;
    width: 114px;
}
.el-tabs__header {
    position: fixed;
    width: 40%;
    z-index: 99;
}
</style>