const admin = require("firebase-admin")
const serviceAccount = require('../../service_account.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-4567b.firebaseio.com"
})

export const store = admin.firestore()
export const auth = admin.auth()
export const storage = admin.storage()