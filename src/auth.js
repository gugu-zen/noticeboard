import firebase from './firebaseConfig'
const socialMediaAuth = (provider, redirect = true) => {
    return new Promise((resolve, reject) => {
        const auth = firebase.auth()

        auth.onAuthStateChanged((user) => {
            console.log("Auth State Changed")
            console.log(user)
            if (user) {
                resolve(user)
            } else {
                if (redirect) {
                    auth.signInWithRedirect(provider)
                    .then((res) =>{
                        resolve(res.user)
                    })
                    .catch((er) =>{
                        reject(er)
                    });
                } else {
                    reject(user)
                } 
            }
        })
    })
};
export default socialMediaAuth;