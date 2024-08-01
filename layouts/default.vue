<template>
    <div>
        <header class="header">
            <div class="header__inner">
                <a class="header__logo" href="/">
                    FashionablyLate
                </a>
                <!-- v-ifの条件をログインしているかどうかに修正する -->
                <div v-if="isAdminPage">
                    <form action="/logout" method="post">
                        <button class="header__button">Logout</button>
                    </form>
                </div>
            </div>
        </header>
        <slot />
    </div>
</template>

<script setup>
const route = useRoute()
const isAdminPage = computed(() => route.name === 'admin')
</script>