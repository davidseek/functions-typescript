import * as test from 'firebase-functions-test';
import * as chai from 'chai'
import {} from 'mocha'
import {getUserPostsPrivate} from '../src/posts'

describe('Testing Posts', () => {
    
    it('Should return posts', async () => {
        
        const userID: string = ''
        const result = await getUserPostsPrivate(userID)
    })
})