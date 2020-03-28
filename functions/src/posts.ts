import { PostLoader } from './classes/post-loader'
import { UserLoader } from './classes/user-loader'
import { firebaseFunctions } from './imports/functions'

exports.getUserPosts = firebaseFunctions.https.onCall(async (data, context) => {

    const userID: string = context.auth.uid

    const userLoader = new UserLoader()
    const postLoader = new PostLoader()

    const user = await userLoader.getUser(userID)
})