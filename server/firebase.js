// server/firebase.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");  // <-- path to your JSON file

// Initialize Firebase Admin SDK with the service account key
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});

const db = admin.firestore();

const uploadUsers = async () => {
    dataToUpload = {
        key1: "test",
        key2: 123,
        key3: new Date(),
    }
    try {
       const userRef = db.doc("users/iLKkYaL5pziNKGSRf6Tf");
       await userRef.set(dataToUpload);
    } catch(error) {
        console.log(error);
    }

}

uploadUsers();
module.exports = { db };
