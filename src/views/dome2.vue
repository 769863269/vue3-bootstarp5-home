<script setup></script>

<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div class="container">
            <router-link
                class="navbar-brand"
                to="/"
                >空洞在线玩編程</router-link
            >
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navmenu"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="collapse navbar-collapse"
                id="navmenu"
            >
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            to=""
                            >前端知识</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            to=""
                            >后端知识</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            to=""
                            >数据库知识</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <section class="bg-dark text-light text-center text-md-start w-100 vh-100">
        <div class="container">
            <div class="w-100 vh-100 d-flex justify-content-center align-items-center">
                <div class="p-5">
                    <h1>
                        成为一个
                        <span class="text-warning">前端工程师</span>
                    </h1>
                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae?</p>
                    <p class="my-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque corporis quo, similique perferendis distinctio non eius consequuntur error obcaecati
                        quaerat iusto quos fugiat rerum, unde omnis blanditiis ducimus asperiores quibusdam? Maiores nam deserunt earum exercitationem eligendi,
                    </p>
                    <button class="btn btn-primary btn-lg">开始编程之旅</button>
                </div>
                <img
                    src="../assets/image/undraw_website_u6x8.svg"
                    class="w-50 d-none d-md-block"
                />
            </div>
        </div>
    </section>

    <section class="bg-primary text-light">
        <div class="container">
            <div class="p-5">
                <h3 class="mb-3 text-center">现在注册账号开始编程之旅</h3>
                <div class="input-group">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="请输入你的邮箱"
                    />
                    <button class="btn btn-dark btn-lg">注册</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    li {
        cursor: pointer;
        margin: 0 5px;
    }
</style>
