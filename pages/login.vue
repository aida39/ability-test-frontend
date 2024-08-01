<script setup>
definePageMeta({
    layout: 'auth',
});
</script>

<template>
    <div class="auth__content">
        <div class="auth__heading">
            <h1>Login</h1>
        </div>
        <div class="auth__form">
            <form class="form" action="/login" method="post">
                <label for="">メールアドレス</label>
                <div class="auth__form__group">
                    <input type="email" class="auth__form__input" name="email" placeholder="例:test@example.com" />
                    <div class="error-message">
                    </div>
                </div>
                <label for="">パスワード</label>
                <div class="auth__form__group">
                    <input type="password" class="auth__form__input" name="password" placeholder="例:coachtech1106" />
                    <div class="error-message">
                    </div>
                </div>
                <div class="button__area">
                    <button class="common-button" type="submit">ログイン</button>
                </div>
            </form>
        </div>
    </div>
</template>