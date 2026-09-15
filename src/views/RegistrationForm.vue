<script setup>
import { ref, watch } from 'vue'

const fullName = ref('')
const email = ref('')
const phone = ref('')

// Get saved data from localStorage
fullName.value = localStorage.getItem('fullName') || ''
email.value = localStorage.getItem('email') || ''
phone.value = localStorage.getItem('phone') || ''

// Save changes to localStorage
watch(fullName, (newValue) => {
    localStorage.setItem('fullName', newValue)
})

watch(email, (newValue) => {
    localStorage.setItem('email', newValue)
})

watch(phone, (newValue) => {
    localStorage.setItem('phone', newValue)
})

function register() {
    alert(`Registration successful\nWelcome, ${fullName.value}`)
}

function clearForm() {
    fullName.value = ''
    email.value = ''
    phone.value = ''

    localStorage.removeItem('fullName')
    localStorage.removeItem('email')
    localStorage.removeItem('phone')
}
</script>

<template>
    <div class="container py-5">
        <div class="text-center mb-5">
            <h1>Registration Form</h1>
        </div>

        <div class="col-lg-7">
            <div class="card shadow-sm border-0">
                <div class="card-body p-4">
                    <h3 class="fw-bold mb-4">
                        Create an Account
                    </h3>

                    <form @submit.prevent="register">
                        <div class="mb-3">
                            <label class="form-label fw-semibold">
                                Full Name
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="fullName"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                v-model="email"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">
                                Phone
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="phone"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div class="d-flex gap-2">
                            <button
                                type="submit"
                                class="btn btn-primary"
                            >
                                Register
                            </button>

                            <button
                                type="button"
                                class="btn btn-secondary"
                                @click="clearForm"
                            >
                                Clear Form Data
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>