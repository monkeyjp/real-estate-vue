import { computed, ref } from "vue"
import { collection, doc, deleteDoc } from "firebase/firestore"
import { ref as storageRef, deleteObject } from "firebase/storage"
import { useFirestore, useCollection, useFirebaseStorage } from "vuefire"

export default function useProperties() {

    const pool = ref(false)

    const storage = useFirebaseStorage()
    const db = useFirestore()
    const propertiesCollection = useCollection(collection(db, "properties"))

    async function deleteItem(id, urlPhoto) {
        if (confirm('Do you want to delete this property?')) {
            const docRef = doc(db, "properties", id)
            const photoRef = storageRef(storage, urlPhoto)
            await Promise.all([
                deleteDoc(docRef),
                deleteObject(photoRef)
            ])
        }

    }

    const filteredItems = computed(() => {
        return pool.value ?
            propertiesCollection.value.filter(property => property.pool) :
            propertiesCollection.value
    })

    return {
        propertiesCollection, filteredItems, pool, deleteItem
    }
}