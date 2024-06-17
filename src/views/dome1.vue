<script setup></script>

<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
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

    <section class="bg-dark text-light text-center text-md-start py-5">
        <div class="container">
            <div class="d-flex">
                <div>
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
                    class="w-25 d-none d-md-block"
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

    <section class="py-5">
        <div class="container">
            <!--gap 元素间隔-->
            <div class="row g-2">
                <div class="col-md">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="card-title fs-5">前端知识</div>
                            <div class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus voluptatibus consequuntur vitae quo quibusdam</div>
                            <button
                                type="button"
                                class="btn btn-secondary m-3"
                            >
                                学习前端
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="card-title fs-5">前端知识</div>
                            <div class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus voluptatibus consequuntur vitae quo quibusdam</div>
                            <button
                                type="button"
                                class="btn btn-secondary m-3"
                            >
                                学习前端
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="card-title fs-5">前端知识</div>
                            <div class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus voluptatibus consequuntur vitae quo quibusdam</div>
                            <button
                                type="button"
                                class="btn btn-secondary m-3"
                            >
                                学习前端
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md">
                    <img
                        src="../assets/image/undraw_search_app_oso2.svg"
                        class="img-fluid"
                    />
                </div>
                <div class="col-md p-5">
                    <h2>课程介绍</h2>
                    <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ea ratione corporis et provident. Quia!</p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nostrum, aperiam assumenda vitae, beatae at sint quaerat consequatur maxime, hic voluptatum
                        ex. Dolor minus perferendis magni autem exercitationem quis quos.
                    </p>
                    <button
                        type="button"
                        class="btn btn-secondary my-3"
                    >
                        查看更多
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5 bg-dark text-light">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md p-5">
                    <h2>课程介绍</h2>
                    <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ea ratione corporis et provident. Quia!</p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nostrum, aperiam assumenda vitae, beatae at sint quaerat consequatur maxime, hic voluptatum
                        ex. Dolor minus perferendis magni autem exercitationem quis quos.
                    </p>
                    <button
                        type="button"
                        class="btn btn-light my-3"
                    >
                        查看更多
                    </button>
                </div>
                <div class="col-md">
                    <img
                        src="../assets/image/undraw_educator_re_ju47.svg"
                        class="img-fluid"
                    />
                </div>
            </div>
        </div>
    </section>

    <section class="py-5">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md">
                    <img
                        src="../assets/image/undraw_online_test_re_kyfx.svg"
                        class="img-fluid"
                    />
                </div>
                <div class="col-md p-5">
                    <h2>课程介绍</h2>
                    <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ea ratione corporis et provident. Quia!</p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nostrum, aperiam assumenda vitae, beatae at sint quaerat consequatur maxime, hic voluptatum
                        ex. Dolor minus perferendis magni autem exercitationem quis quos.
                    </p>
                    <button
                        type="button"
                        class="btn btn-secondary my-3"
                    >
                        查看更多
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section class="p-5 bg-dark text-light">
        <h2 class="text-center">关于公告</h2>
        <p class="lead text-center text-light mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, unde?</p>
        <div
            class="alert alert-light"
            role="alert"
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur vero, id tempore culpa facere officia quisquam animi, impedit tempora iure aliquam fugiat
            praesentium hic eius dignissimos error. Magni, laudantium unde.
        </div>
        <div
            class="alert alert-light"
            role="alert"
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur vero, id tempore culpa facere officia quisquam animi, impedit tempora iure aliquam fugiat
            praesentium hic eius dignissimos error. Magni, laudantium unde.
        </div>
        <div
            class="alert alert-light"
            role="alert"
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur vero, id tempore culpa facere officia quisquam animi, impedit tempora iure aliquam fugiat
            praesentium hic eius dignissimos error. Magni, laudantium unde.
        </div>
    </section>

    <section class="p-5">
        <div class="container">
            <h2 class="text-center">常见问题</h2>
            <p class="lead text-center text-light mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, unde?</p>
            <div
                class="accordion accordion-flush"
                id="accordionFlushExample"
            >
                <div class="accordion-item">
                    <h2
                        class="accordion-header"
                        id="flush-headingOne"
                    >
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div class="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate the
                            <code>.accordion-flush</code> class. This is the first item's accordion body.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2
                        class="accordion-header"
                        id="flush-headingTwo"
                    >
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div class="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate the
                            <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2
                        class="accordion-header"
                        id="flush-headingThree"
                    >
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div class="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate the
                            <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling
                            up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="p-5 bg-info">
        <div class="container">
            <h2 class="text-center text-light">讲师介绍</h2>
            <p class="lead text-center text-white mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, unde?</p>
            <div class="row g-2">
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="../assets/image/user/01.svg" />
                            <h3 class="card-title py-2">汤阿柒</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ratione!</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="../assets/image/user/02.svg" />
                            <h3 class="card-title py-2">谭艳卉</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ratione!</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="../assets/image/user/03.svg" />
                            <h3 class="card-title py-2">邰婧雯</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ratione!</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="../assets/image/user/04.svg" />
                            <h3 class="card-title py-2">空诗云</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ratione!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="p-5">
        <div class="container">
            <h2 class="text-center">联系我们</h2>
            <p class="lead text-center pb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, culpa.</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">电话：0771-XXXXxXX</li>
                <li class="list-group-item">邮箱： kongdong@xxxx.com</li>
                <li class="list-group-item">地址：xx省xx市XXXX区xx号</li>
            </ul>
        </div>
    </section>

    <footer class="p-5 bg-dark text-light text-center">
        <div class="container">
            <p class="lead">Copyright &copy; 2024 <span class="text-warning">空洞在线工作室</span>玩編程</p>
        </div>
    </footer>
</template>

<style scoped>
    li {
        cursor: pointer;
        margin: 0 5px;
    }
</style>
