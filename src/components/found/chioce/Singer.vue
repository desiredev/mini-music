<template>
    <div id="sg">
        <div class="sg-head">
            <div>
                <div class="yz" style="margin-top: 20px">
                    <span class="tt">语种：</span>
                    <el-radio-group
                        v-model="pue.area1"
                        size="mini"
                        @change="pui"
                    >
                        <el-radio-button label="-1">全部</el-radio-button>
                        <el-radio-button label="7">华语</el-radio-button>
                        <el-radio-button label="96">欧美</el-radio-button>
                        <el-radio-button label="8">日本</el-radio-button>
                        <el-radio-button label="16">韩国</el-radio-button>
                        <el-radio-button label="0">其他</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="fl" style="margin-top: 20px">
                    <span class="tt">分类：</span>
                    <el-radio-group
                        v-model="pue.type1"
                        size="mini"
                        @change="pui"
                    >
                        <el-radio-button label="-1">全部</el-radio-button>
                        <el-radio-button label="1">男歌手</el-radio-button>
                        <el-radio-button label="2">女歌手</el-radio-button>
                        <el-radio-button label="3">乐队组合</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="sx" style="margin-top: 20px">
                    <span class="tt">筛选：</span>
                    <el-radio-group
                        v-model="pue.initial1"
                        size="mini"
                        @change="pui"
                    >
                        <el-radio-button label="0">热门</el-radio-button>
                        <el-radio-button label="a">A</el-radio-button>
                        <el-radio-button label="b">B</el-radio-button>
                        <el-radio-button label="c">C</el-radio-button>
                        <el-radio-button label="d">D</el-radio-button>
                        <el-radio-button label="e">E</el-radio-button>
                        <el-radio-button label="f">F</el-radio-button>
                        <el-radio-button label="g">G</el-radio-button>
                        <el-radio-button label="h">H</el-radio-button>
                        <el-radio-button label="i">I</el-radio-button>
                        <el-radio-button label="j">J</el-radio-button>
                        <el-radio-button label="k">K</el-radio-button>
                        <el-radio-button label="l">L</el-radio-button>
                        <el-radio-button label="m">M</el-radio-button>
                        <el-radio-button label="n">N</el-radio-button>
                        <el-radio-button label="o">O</el-radio-button>
                        <el-radio-button label="p">P</el-radio-button>
                        <el-radio-button label="q">Q</el-radio-button>
                        <el-radio-button label="r">R</el-radio-button>
                        <el-radio-button label="s">S</el-radio-button>
                        <el-radio-button label="t">T</el-radio-button>
                        <el-radio-button label="u">U</el-radio-button>
                        <el-radio-button label="v">V</el-radio-button>
                        <el-radio-button label="w">W</el-radio-button>
                        <el-radio-button label="x">X</el-radio-button>
                        <el-radio-button label="y">Y</el-radio-button>
                        <el-radio-button label="z">Z</el-radio-button>
                    </el-radio-group>
                </div>
            </div>
        </div>
        <div class="sg-content">
            <div
                class="sc-content"
                v-for="item in singerList.artists"
                :key="item.id"
                @dblclick="details(item.id)"
            >
                <div class="sc-img">
                    <img v-lazy="item.img1v1Url" alt="" />
                </div>
                <span>{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("singer");

export default {
    data() {
        return {
            pue: { type1: "-1", area1: "-1", initial1: "0" },
        };
    },
    mounted() {
        this.getSinger(this.pue);
    },
    computed: {
        ...mapState(["singerList"]),
    },
    methods: {
        ...mapActions(["getSinger"]),
        pui() {
            this.getSinger(this.pue);
        },
        details(id) {
            this.$router.push("/home/SingerHomePage/" + id);
        },
    },
};
</script>

<style lang="scss">
el-radio-group,
#sg {
    padding: 20px;
    padding-left: 40px;
}
.tt {
    vertical-align: middle;
    line-height: 9px;
    display: inline-block;
    height: 14px;
}
.yz,
.fl,
.sx {
    width: 100%;
    text-align: left;
}
.sg-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .sc-content {
        width: 18%;
        margin-top: 20px;
        img {
            width: 100%;
            border-radius: 15px;
        }
        span {
            width: 100%;
            display: block;
            text-align: left;
            font-size: 13px;
        }
    }
}
</style>