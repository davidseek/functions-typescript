export class UserLoader {

    public getUser(userID: string): Promise < User > {

        return new Promise(resolve => {

            /**
             * Load user from database here.
             */
        })
    }
}

export class User {

    public userID: string 
    public isPremiumUser: boolean
}