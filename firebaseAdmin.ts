import admin from 'firebase-admin'

var serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const adminDb = admin.firestore()

export { adminDb }
