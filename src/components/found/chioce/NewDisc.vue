<template>
    <div id="nd">
        <div style="margin-top: 20px" class="menu">
            <el-radio-group
                v-model="type.area"
                size="mini"
                :border="true"
                @change="area"
            >
                <el-radio-button label="ALL">全部</el-radio-button>
                <el-radio-button label="ZH">华语</el-radio-button>
                <el-radio-button label="EA">欧美</el-radio-button>
                <el-radio-button label="JP">日本</el-radio-button>
                <el-radio-button label="KR">韩国</el-radio-button>
            </el-radio-group>
            <el-select
                v-model="type.type"
                clearable
                placeholder="请选择"
                @change="area"
            >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </div>
        <div class="nd-content">
            <div class="nc-p" v-for="item in newDisc">
                <img
                    @dblclick="details(item.id)"
                    v-lazy="item.blurPicUrl"
                    alt=""
                />
                <span>{{ item.name }}</span>
                <i>{{ item.artist.name }}</i>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("newMusic");

export default {
    data() {
        return {
            type: {
                area: "",
                type: "",
            },
            options: [
                {
                    value: "new",
                    label: "全部",
                },
                {
                    value: "hot",
                    label: "热门",
                },
            ],
            value: "",
        };
    },
    mounted() {
        this.getNewDisc(this.type);
    },
    computed: {
        ...mapState(["newDisc"]),
    },
    methods: {
        ...mapActions(["getNewDisc"]),
        area() {
            this.getNewDisc(this.type);
        },
        details(id) {
            this.$router.push("/home/play/" + id);
        },
    },
};
</script>

<style lang="scss">
.el-input__inner {
    width: 80px;
    font-size: 11px;
    /* height: 30px; */
}
.menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
}
.nd-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.nc-p {
    width: 21%;
    margin-top: 20px;
    margin-bottom: 68px;
    img {
        width: 100%;
        border-radius: 10px;
    }

    span,
    i {
        width: 100%;
        display: block;
        text-align: left;
        font-style: normal;
        font-size: 14px;
        margin-top: 8px;
    }
    i {
        color: #ccc;
    }
}
.el-input {
    width: 100%;
    height: 36px;
}
</style>