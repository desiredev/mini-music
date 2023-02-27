<template>
    <div class="singerDetails">
        <div class="sd" v-for="item in singerDisc" :key="item.ti">
            <h5>{{ item.ti }}</h5>
            <p>{{ item.txt }}</p>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("singerHomePage");

export default {
    computed: {
        ...mapState(["singerDisc"]),
    },
    methods: {},
};
</script>

<style>
.sd {
    margin-top: 20px;
}
h5,
p {
    width: 100%;
    text-align: left;
    white-space: pre-line;
    line-height: 30px;
    color: rgb(165, 158, 158);
}
h5 {
    color: rgb(56, 53, 53);
}
p {
    text-indent: 30px;
    font-size: 14px;
}
</style>