import {App} from 'vue'
import CubeCommentDialog from './commentDialog/commentDialog.vue'
import CubeExpressDialog from './expressDialog/expressDialog.vue'
import CubeExpress from './express/express.vue'
import CubeComment from './comment/comment.vue'
import CubeEmoji from './emoji/emoji.vue'
import CubePopoverEmoji from './popoverEmoji/popoverEmoji.vue'
import CubeShare from './share/share.vue'
import CubeReply from './reply/reply.vue'
import CubeInput from './input/input.vue'
import CubeUserInfo from './userInfo/userInfo.vue'
import CubeTimeLine from './timeline/timeline.vue'
import CubeUserBlog from './userblog/userblog.vue'
import CubeBlogIntroduce from './blogIntroduce/blogIntroduce.vue'

export default {
    install(app: App) {
        app.component(CubeCommentDialog.name, CubeCommentDialog)
        app.component(CubeExpressDialog.name, CubeExpressDialog)
        app.component(CubeExpress.name, CubeExpress)
        app.component(CubeComment.name, CubeComment)
        app.component(CubeEmoji.name, CubeEmoji)
        app.component(CubePopoverEmoji.name, CubePopoverEmoji)
        app.component(CubeShare.name, CubeShare)
        app.component(CubeReply.name, CubeReply)
        app.component(CubeInput.name, CubeInput)
        app.component(CubeUserInfo.name, CubeUserInfo)
        app.component(CubeTimeLine.name, CubeTimeLine)
        app.component(CubeUserBlog.name, CubeUserBlog)
        app.component(CubeBlogIntroduce.name, CubeBlogIntroduce)
    }
}
