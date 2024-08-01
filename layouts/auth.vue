<template>
    <div>
        <header class="header">
            <div class="header__inner">
                <a class="header__logo" href="/">
                    FashionablyLate
                </a>
            </div>
            <div class="header__link">
                <NuxtLink :to="isLoginPage ? '/register' : '/login'" class="header__button">
                    {{ isLoginPage ? 'Register' : 'Login' }}
                </NuxtLink>
            </div>
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>

<script setup>
const route = useRoute()
const isLoginPage = computed(() => route.name === 'login')
</script>

<style>
.auth__content {
    background-color: #F1ECE7;
    height: 90vh;
}

.auth__heading {
    text-align: center;
    padding-top: 30px;
}

.auth__form {
    border: 1px solid #C5B9B0;
    border-radius: 4px;
    background-color: #fff;
    width: 50%;
    height: 75%;
    margin: 40px auto;
}

.form {
    display: flex;
    flex-direction: column;
    margin: 80px auto;
    width: 60%;
}

.auth__form__group {
    margin: 20px 0;
}

.auth__form__input {
    width: 100%;
    height: 45px;
}

</style>