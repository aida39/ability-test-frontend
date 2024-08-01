<template>
    <div>
        <header class="header">
            <div class="header__inner">
                <a class="header__logo" href="/">
                    FashionablyLate
                </a>
                <form action="/logout" method="post">
                    <button class="header__button">Logout</button>
                </form>
            </div>
        </header>
        <slot />
    </div>
</template>