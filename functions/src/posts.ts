import { PostLoader } from './classes/post-loader'
import { firebaseFunctions } from './imports/functions'

exports.getUserPosts = firebaseFunctions.https.onCall(async (data, context) => {

    const userID = context.auth.uid

    const postLoader = new PostLoader()
    const posts = await postLoader.getPosts(userID)

    return posts
})