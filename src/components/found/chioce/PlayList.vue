<template>
    <div id="p">
        <div class="pl-head">
            <el-cascader
                :options="options"
                :show-all-levels="false"
                @change="changecat"
                v-model="cat"
            ></el-cascader>
        </div>
        <div class="pl-content">
            <!-- 通过调用 slice 方法改变显示数据 -->
            <div
                class="pl-list"
                v-for="item in playList.slice((offset - 1) * 20, offset * 20)"
                :key="item.coverImgUrl"
                @click="details(item.id)"
            >
                <div class="img1">
                    <img v-lazy="item.coverImgUrl" alt="" />
                </div>
                <span>{{ item.name }}</span>
                <span>by {{ item.creator.nickname }}</span>
            </div>
        </div>
        <div class="pl-bottom">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="50"
                @current-change="handleCurrentChange"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
    "playList"
);

export default {
    mounted() {
        this.getPlayList();
    },
    watch: {},
    computed: {
        ...mapState(["playList", "offset"]),
    },
    methods: {
        ...mapActions(["getPlayList"]),
        ...mapMutations(["changeOffset", "changeCat"]),
        handleCurrentChange(val) {
            // 调用页数，返回当前页码给仓库
            this.changeOffset(val);
            // 获取页面数据
            this.getPlayList();
        },
        changecat() {
            // 调用下拉款选择类型,将选择的类型传递会仓库
            this.changeCat(this.cat[1]);
            this.getPlayList();
        },
        // 点击到详情页
        details(name) {
            this.$router.push("/home/playListDetails/" + name);
        },
    },
    data() {
        return {
            // 保存下拉框选中的数据
            cat: "全部",
            // 下拉框的数据
            options: [
                {
                    value: "语种",
                    label: "语种",
                    children: [
                        {
                            value: "华语",
                            label: "华语",
                        },
                        {
                            value: "欧美",
                            label: "欧美",
                        },
                        {
                            value: "日语",
                            label: "日语",
                        },
                        {
                            value: "韩语",
                            label: "韩语",
                        },
                        {
                            value: "粤语",
                            label: "粤语",
                        },
                    ],
                },
                {
                    value: "风格",
                    label: "风格",
                    children: [
                        {
                            value: "流行",
                            label: "流行",
                        },
                        {
                            value: "摇滚",
                            label: "摇滚",
                        },
                        {
                            value: "民谣",
                            label: "民谣",
                        },
                        {
                            value: "电子",
                            label: "电子",
                        },
                        {
                            value: "舞曲",
                            label: "舞曲",
                        },
                        {
                            value: "说唱",
                            label: "说唱",
                        },
                        {
                            value: "说唱",
                            label: "说唱",
                        },
                        {
                            value: "轻音乐",
                            label: "轻音乐",
                        },
                        {
                            value: "爵士",
                            label: "爵士",
                        },
                        {
                            value: "乡村",
                            label: "乡村",
                        },
                        {
                            value: "R&B/Soul",
                            label: "R&B/Soul",
                        },
                        {
                            value: "古典",
                            label: "古典",
                        },
                        {
                            value: "民族",
                            label: "民族",
                        },
                        {
                            value: "英伦",
                            label: "英伦",
                        },
                        {
                            value: "金属",
                            label: "金属",
                        },
                        {
                            value: "朋克",
                            label: "朋克",
                        },
                        {
                            value: "蓝调",
                            label: "蓝调",
                        },
                        {
                            value: "雷鬼",
                            label: "雷鬼",
                        },
                        {
                            value: "世界音乐",
                            label: "世界音乐",
                        },
                        {
                            value: "拉丁",
                            label: "拉丁",
                        },
                        {
                            value: "New Age",
                            label: "New Age",
                        },
                        {
                            value: "古风",
                            label: "古风",
                        },
                        {
                            value: "后摇",
                            label: "后摇",
                        },
                        {
                            value: "Bossa Nova",
                            label: "Bossa Nova",
                        },
                    ],
                },
                {
                    value: "changjing",
                    label: "场景",
                    children: [
                        {
                            value: "清晨",
                            label: "清晨",
                        },
                        {
                            value: "夜晚",
                            label: "夜晚",
                        },
                        {
                            value: "学习",
                            label: "学习",
                        },
                        {
                            value: "工作",
                            label: "工作",
                        },
                        {
                            value: "午休",
                            label: "午休",
                        },
                        {
                            value: "下午茶",
                            label: "下午茶",
                        },
                        {
                            value: "地铁",
                            label: "地铁",
                        },
                        {
                            value: "驾车",
                            label: "驾车",
                        },
                        {
                            value: "运动",
                            label: "运动",
                        },
                        {
                            value: "旅行",
                            label: "旅行",
                        },
                        {
                            value: "散步",
                            label: "散步",
                        },
                        {
                            value: "酒吧",
                            label: "酒吧",
                        },
                    ],
                },
                {
                    value: "qinggan",
                    label: "情感",
                    children: [
                        {
                            value: "怀旧",
                            label: "怀旧",
                        },
                        {
                            value: "清新",
                            label: "清新",
                        },
                        {
                            value: "浪漫",
                            label: "浪漫",
                        },
                        {
                            value: "伤感",
                            label: "伤感",
                        },
                        {
                            value: "治愈",
                            label: "治愈",
                        },
                        {
                            value: "放送",
                            label: "放送",
                        },
                        {
                            value: "孤独",
                            label: "孤独",
                        },
                        {
                            value: "感动",
                            label: "感动",
                        },
                        {
                            value: "兴奋",
                            label: "兴奋",
                        },
                        {
                            value: "快乐",
                            label: "快乐",
                        },
                        {
                            value: "安静",
                            label: "安静",
                        },
                        {
                            value: "思念",
                            label: "思念",
                        },
                    ],
                },
                {
                    value: "zhuti",
                    label: "主题",
                    children: [
                        {
                            value: "综艺",
                            label: "综艺",
                        },
                        {
                            value: "影视原声",
                            label: "影视原声",
                        },
                        {
                            value: "ACG",
                            label: "ACG",
                        },
                        {
                            value: "儿童",
                            label: "儿童",
                        },
                        {
                            value: "校园",
                            label: "校园",
                        },
                        {
                            value: "游戏",
                            label: "游戏",
                        },
                        {
                            value: "70后",
                            label: "70后",
                        },
                        {
                            value: "80后",
                            label: "80后",
                        },
                        {
                            value: "90后",
                            label: "90后",
                        },
                        {
                            value: "网络歌曲",
                            label: "网络歌曲",
                        },
                        {
                            value: "KTV",
                            label: "KTV",
                        },
                        {
                            value: "经典",
                            label: "经典",
                        },
                        {
                            value: "翻唱",
                            label: "翻唱",
                        },
                        {
                            value: "吉他",
                            label: "吉他",
                        },
                        {
                            value: "钢琴",
                            label: "钢琴",
                        },
                        {
                            value: "器乐",
                            label: "器乐",
                        },
                        {
                            value: "榜单",
                            label: "榜单",
                        },
                        {
                            value: "00后",
                            label: "00后",
                        },
                    ],
                },
            ],
        };
    },
};
</script>

<style lang="scss">
#p {
    padding: 40px;
}
.pl-head {
    text-align: right;
}
el-cascader {
    border-radius: 10px;
}
.pl-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.pl-list {
    width: 18%;
    margin-top: 15px;
    img {
        width: 100%;
    }
    span {
        font-size: 13px;
        display: block;
        width: 100%;
        text-align: left;
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
.pl-bottom {
    margin-top: 40px;
}
</style>