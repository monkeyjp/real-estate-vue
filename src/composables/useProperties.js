import { computed, ref } from "vue"
import { collection } from "firebase/firestore"
import { useFirestore, useCollection } from "vuefire"

export default function useProperties() {

    const pool = ref(false)

    const db = useFirestore()
    const propertiesCollection = useCollection(collection(db, "properties"))

    const filteredProperties = computed(() => {
        return pool.value ?
            propertiesCollection.value.filter(property => property.pool) :
            propertiesCollection.value
    })

    return {
        propertiesCollection, filteredProperties, pool
    }
}