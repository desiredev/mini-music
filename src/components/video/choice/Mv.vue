<template>
    <div id="MV">
        <div class="newMv distance">
            <div class="nm-hd">
                <div class="nm-left">
                    <span>最新MV</span>&nbsp
                    <i class="el-icon-arrow-right"></i>
                </div>
                <div class="nm-right">
                    <div>
                        <el-radio-group
                            v-model="rr"
                            size="mini"
                            @change="choice"
                        >
                            <el-radio-button label="内地"></el-radio-button>
                            <el-radio-button label="港台"></el-radio-button>
                            <el-radio-button label="欧美"></el-radio-button>
                            <el-radio-button label="日本"></el-radio-button>
                            <el-radio-button label="韩国"></el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
            </div>
            <div class="nm-content">
                <div
                    class="nc"
                    v-for="item in newMv"
                    :key="item.cover"
                    @dblclick="details(item.id)"
                >
                    <div class="nc-img">
                        <img v-lazy="item.cover" alt="" />
                    </div>
                    <p>{{ item.name }}</p>
                    <span>{{ item.artistName }}</span>
                </div>
            </div>
        </div>
        <div class="hotMv distance">
            <div class="nm-nc">
                <span>热播MV</span>&nbsp
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="nm-content">
                <div
                    class="nc"
                    v-for="item in hotMv"
                    @dblclick="details(item.id)"
                >
                    <div class="nc-img">
                        <img v-lazy="item.cover" alt="" />
                    </div>
                    <p>{{ item.name }}</p>
                    <span>{{ item.artistName }}</span>
                </div>
            </div>
        </div>
        <div class="wangyiMv distance">
            <div class="nm-nc">
                <span>网易出品</span>&nbsp
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="nm-content">
                <div
                    class="nc"
                    v-for="item in wangYi"
                    @dblclick="details(item.id)"
                >
                    <div class="nc-img">
                        <img v-lazy="item.cover" alt="" />
                    </div>
                    <p>{{ item.name }}</p>
                </div>
            </div>
        </div>
        <div class="mvRank distance">
            <div class="nm-hd">
                <div class="nm-left">
                    <span>MV排行榜</span>&nbsp
                    <i class="el-icon-arrow-right"></i>
                </div>
                <div class="nm-right">
                    <div>
                        <el-radio-group
                            v-model="rc"
                            size="mini"
                            @change="choice1"
                        >
                            <el-radio-button label="内地"></el-radio-button>
                            <el-radio-button label="港台"></el-radio-button>
                            <el-radio-button label="欧美"></el-radio-button>
                            <el-radio-button label="日本"></el-radio-button>
                            <el-radio-button label="韩国"></el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
            </div>
            <div class="nm-ct">
                <div
                    class="nc-content"
                    v-for="(item, index) in mvRank"
                    :key="item.cover"
                    @dblclick="details(item.id)"
                >
                    <div class="ncc-left">{{ rank(index) }}</div>
                    <div class="ncc-right">
                        <div class="nr-img">
                            <img v-lazy="item.cover" alt="" />
                        </div>
                        <div class="words">
                            <p>{{ item.name }}</p>
                            <span>{{
                                item.artists.map((item) => item.name).join("/")
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("mv");

export default {
    data() {
        return {
            rr: "",
            rc: "",
        };
    },
    mounted() {
        this.getNewMv();
        this.getHotMv();
        this.getWangYi();
        this.getMvRank();
    },
    computed: {
        ...mapState(["newMv", "hotMv", "wangYi", "mvRank"]),
    },
    methods: {
        ...mapActions(["getNewMv", "getHotMv", "getWangYi", "getMvRank"]),
        choice() {
            this.getNewMv(this.rr);
        },
        choice1() {
            this.getMvRank(this.rc);
        },
        rank(index) {
            let currentIndex = 0;
            currentIndex = index < 9 ? "0" + (index + 1) : index + 1;
            return currentIndex;
        },
        details(id) {
            this.$router.push("/home/mvPlay/" + id);
        },
    },
};
</script>

<style lang="scss">
.distance {
    margin: 28px 0;
}
.nm-hd {
    width: 100%;
    text-align: left;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
}
.nm-nc {
    width: 100%;
    text-align: left;
    margin-top: 15px;
    font-weight: 600;
}
.nm-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.nc {
    width: 30%;
    margin-top: 20px;
    img {
        width: 100%;
        height: 126px;
        border-radius: 15px;
    }
    p,
    span {
        display: block;
        width: 100%;
        text-align: left;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    span {
        color: #ccc;
        margin-top: 5px;
    }
}
.nm-ct {
    display: flex;
    flex-wrap: wrap;
}
.nc-content {
    width: 50%;
    display: flex;
    border-bottom: 0.5px solid #ccc;
    margin-top: 20px;
    padding-bottom: 20px;
    .ncc-left {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
    }
    .ncc-right {
        width: 90%;
        display: flex;
        align-items: center;
        img {
            border-radius: 15px;
            width: 100%;
        }
        .nr-img {
            width: 50%;
        }
        .words {
            width: 50%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            height: 50%;
            p,
            span {
                width: 100%;
                text-align: left;
                padding-left: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 13px;
            }
            p {
                text-indent: 0;
            }
            span {
                color: #ccc;
            }
        }
    }
}
</style>