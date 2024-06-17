<script setup></script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <h1>home,我是大反派</h1>
        <div>
            <button
                @click="$router.push({ path: '/dome1' })"
                type="button"
                class="btn btn-primary"
            >
                Primary
            </button>
            <button
                @click="$router.push({ path: '/dome2' })"
                type="button"
                class="btn btn-secondary"
            >
                Secondary
            </button>
            <button
                type="button"
                class="btn btn-success"
            >
                Success
            </button>
            <button
                type="button"
                class="btn btn-danger"
            >
                Danger
            </button>
            <button
                type="button"
                class="btn btn-warning"
            >
                Warning
            </button>
            <button
                type="button"
                class="btn btn-info"
            >
                Info
            </button>
            <button
                type="button"
                class="btn btn-light"
            >
                Light
            </button>
            <button
                type="button"
                class="btn btn-dark"
            >
                Dark
            </button>
            <button
                type="button"
                class="btn btn-link"
            >
                Link
            </button>
        </div>
    </div>
</template>

<style scoped></style>
