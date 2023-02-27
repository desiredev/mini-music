import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
    // 重写了原型上的push方法，统一的处理了错误信息
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [{
    // 登录
    path: '/login',
    name: 'Login',
    component: () =>
        import ('../views/login/Login.vue')
}, {
    // 注册
    path: '/register',
    name: 'Register',
    component: () =>
        import ('../views/register/Register.vue')
}, {
    // 首页
    path: '/home',
    name: 'Home',
    component: () =>
        import ('../views/home/Home.vue'),
    children: [{
        // 歌单详情页
        path: 'playListDetails/:name',
        name: 'PlayListDetails',
        props: true,
        component: () =>
            import ('../components/details/PlayListDetails.vue')
    }, {
        // 音乐播放页面
        path: 'play/:id',
        name: 'Play',
        props: true,
        component: () =>
            import ('../components/play/Play.vue')
    }, {
        // 视频播放页面
        path: 'videoPlay/:id',
        name: 'VideoPlay',
        props: true,
        component: () =>
            import ('../components/play/VideoPlay.vue')
    }, {
        // MV播放页面
        path: 'mvPlay/:id',
        name: 'MvPlay',
        props: true,
        component: () =>
            import ('../components/play/MvPlay.vue')
    }, {
        // 发现音乐
        path: 'foundMusic',
        name: 'FoundMusic',
        component: () =>
            import ('../components/found/FoundMusic.vue'),
        children: [{
            // 个性推荐
            path: 'recommend',
            name: 'Recommend',
            component: () =>
                import ('../components/found/chioce/Recommend.vue')
        }, {
            // 歌单
            path: 'playList',
            name: 'PlayList',
            component: () =>
                import ('../components/found/chioce/PlayList.vue')
        }, {
            // 主播电台
            path: 'radio',
            name: 'Radio',
            component: () =>
                import ('../components/found/chioce/Radio.vue')
        }, {
            // 排行榜
            path: 'rankList',
            name: 'RankList',
            component: () =>
                import ('../components/found/chioce/RankList.vue')
        }, {
            // 歌手
            path: 'singer',
            name: 'Singer',
            component: () =>
                import ('../components/found/chioce/Singer.vue')
        }, {
            // 最新音乐
            path: 'newMusic',
            name: 'NewMusic',
            component: () =>
                import ('../components/found/chioce/NewMusic.vue'),
            children: [{
                // 新歌速递
                path: 'newSong',
                name: 'NewSong',
                component: () =>
                    import ('../components/found/chioce/NewSong.vue')
            }, {
                // 新碟上架
                path: 'newDisc',
                name: 'NewDisc',
                component: () =>
                    import ('../components/found/chioce/NewDisc.vue')
            }]
        }, ]
    }, {
        // 视频
        path: 'video',
        name: 'Video',
        component: () =>
            import ('../components/video/VideoAside.vue')
    }, {
        // 个人中心
        path: 'selfCenter',
        name: 'SelfCenter',
        component: () =>
            import ('../components/selfCenter/SelfCenter.vue')
    }, {
        path: 'sole',
        name: 'Sole',
        component: () =>
            import ('../components/found/chioce/Sole.vue')
    }, {
        path: 'singerHomePage/:id',
        name: 'SingerHomePage',
        props: true,
        component: () =>
            import ('../components/singer/SingerHomePage.vue')
    }, {
        path: 'search/:name',
        name: 'Search',
        props: true,
        component: () =>
            import ('../components/search/Search.vue')
    }]
}]

const router = new VueRouter({
    routes
})

export default router