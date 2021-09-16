import firebase  from 'firebase';

const db = firebase.firestore();

const noticesRef = db.collection("/notices")



export const addNotice = async (notice, file) => {
    notice.nid = ""
    const ref = await noticesRef.add(notice)
    notice.nid = ref.id

    if (file) {
        const refer = firebase.storage().ref("/"+notice.nid)
        const res = await refer.put(file)
        if (!res) return false
        notice.photoURL = await refer.getDownloadURL()
    }
    await updateNotice(notice)

    return true
}
export const addComment = async (comment) => {
    comment.nid = ""
    const ref = await noticesRef.add(comment)
    comment.nid = ref.id
}

export const deleteNotice = async (notice) => {
    return await noticesRef.doc(`/${notice.nid}`).delete()
}

export const updateNotice = async (notice) => {
    return await noticesRef.doc(`/${notice.nid}`).update({
        title: notice.title,
        details: notice.details,
        category: notice.category,
        nid: notice.nid,
        date: notice.date,
        photoURL: notice.photoURL,
        
    })
}

export const getByCategory = async (category) => {
    const results = await getNotices()
    const res = results.filter((el) => {
        return el.data().category === category
    })
    console.warn(res)
    return res
}

export const getNotices = async () => {
    const snapshot = await noticesRef.get()
    return snapshot.docs
}
