import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useFirebaseAuth } from "vuefire";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore('auth', () => {

    const auth = useFirebaseAuth();
    const authUser = ref({})

    const errorMsg = ref('')

    const errorCodes = {
        "auth/invalid-credential": "Invalid email or password. Please try again."
    }

    const login = ({ email, password }) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential.error) {
                    throw new Error(userCredential.error.message);
                }
                const user = userCredential.user
                authUser.value = user
                console.log(authUser.value);

            })
            .catch((error) => {
                console.log(error.code);

                errorMsg.value = errorCodes[error.code]
            });
    }

    const hasError = computed(() => {
        return errorMsg.value
    })

    return {
        login, hasError, errorMsg
    }
})