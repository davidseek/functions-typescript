import { firebaseFunctions } from './imports/functions'
import { PostLoader } from './classes/post-loader'

exports.getUserPosts = firebaseFunctions.https.onCall(async (data, context) => {

    const userID = context.auth.uid

    const postLoader = new PostLoader()
    const posts = await postLoader.getPosts(userID)

    return posts
})