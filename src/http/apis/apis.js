// 侧边栏-发现
import recommend from './modules/found/recommend'
import playList from './modules/found/PlayList'
import radio from './modules/found/radio'
import rank from './modules/found/rankList'
import singer from './modules/found/singer'
import newMusic from './modules/found/newMusic'
import details from './modules/found/PlayListDetails'
import personal from './modules/found/sole'

// 侧边栏-视频
import video from './modules/video/video'
import mv from './modules/video/mv'

// 登录
import login from './modules/login'

// 个人中心
import mySelf from './modules/selfCenter/selfCenter'

// 播放
import play from './modules/play/play'
import videoPlay from './modules/play/videoPlay'
import mvPlay from './modules/play/mvPlay'

// 歌手详情
import singerHomePage from './modules/singer/singerHomePage'

// 搜索
import search from './modules/search/search'

const apis = {
    // 侧边栏-发现
    recommend,
    playList,
    radio,
    rank,
    singer,
    newMusic,
    details,
    personal,
    // 侧边栏-视频
    video,
    mv,
    // 登录
    login,
    // 个人中心
    mySelf,
    // 播放
    play,
    videoPlay,
    mvPlay,
    // 歌手详情
    singerHomePage,
    // 搜索
    search
}

export default apis