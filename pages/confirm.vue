<script setup>
const formData = useState('formData')

const getGenderText = (value) => {
    switch (value) {
        case "1":
            return "男性";
        case "2":
            return "女性";
        case "3":
            return "その他";
        default:
            return "未選択";
    }
}

const submitForm = async () => {
    const { data, error } = await useFetch('http://127.0.0.1:80/api/contact', {
        method: 'POST',
        body: {
            first_name: formData.value.firstName,
            last_name: formData.value.lastName,
            gender: formData.value.gender,
            email: formData.value.email,
            tell: `${formData.value.tellFirst}${formData.value.tellSecond}${formData.value.tellThird}`,
            address: formData.value.address,
            building: formData.value.building,
            category_id: formData.value.category.id,
            detail: formData.value.detail
        }
    });

    if (error.value) {
        console.error('Error submitting form:', error.value);
    } else {
        return navigateTo('/thanks');
    }
}

</script>

<template>
    <div class="confirm__content">
        <div class="confirm__heading">
            <h1>Confirm</h1>
        </div>
        <form class="form" @submit.prevent="submitForm">
            <div class="confirm-table">
                <table class="confirm-table__inner">
                    <tr class="confirm-table__row">
                        <th class="confirm-table__header">お名前</th>
                        <td class="confirm-table__text">
                            {{ formData.lastName }}
                            {{ formData.firstName }}
                        </td>
                    </tr>
                    <tr class="confirm-table__row">
                        <th class="confirm-table__header">性別</th>
                        <td class="confirm-table__text">
                            {{ getGenderText(formData.gender) }}
                        </td>
                    </tr>
                    <tr class="confirm-table__row">
                        <th class="confirm-table__header">メールアドレス</th>
                        <td class="confirm-table__text">
                            {{ formData.email }}
                        </td>
                    </tr>
                    <tr class="confirm-table__row">
                        <th class="confirm-table__header">電話番号</th>
                        <td class="confirm-table__text">
                            {{ formData.tellFirst }}
                            {{ formData.tellSecond }}
                            {{ formData.tellThird }}
                        </td>
                    </tr>
                    <tr class="confirm-table__row">
                        <th class="confirm-table__header">住所</th>
                        <td class="confirm-table__text">
                            {{ formData.address }}
                        </td>
                    </tr>
                    <tr class="confirm-table__row">
                        <th class="confirm-table__header">建物名</th>
                        <td class="confirm-table__text">
                            {{ formData.building }}
                        </td>
                    </tr>
                    <tr class="confirm-table__row">
                        <th class="confirm-table__header">お問い合わせの種類</th>
                        <td class="confirm-table__text">
                            {{ formData.category.content }}
                        </td>
                    </tr>
                    <tr class="confirm-table__row">
                        <th class="confirm-table__header">お問い合わせ内容</th>
                        <td class="confirm-table__text">
                            {{ formData.detail }}
                        </td>
                    </tr>
                </table>
            </div>
            <div class=" button__area">
                <button class="common-button" type="submit">送信</button>
                <NuxtLink class="confirm-button" to="/">修正</NuxtLink>
            </div>

        </form>
    </div>
</template>

<style>
.confirm__heading {
    text-align: center;
}

.confirm-table__inner {
    width: 70%;
    margin: 30px auto;
    border: solid 1px #E0DFDE;
}

.confirm-table__header {
    width: 25%;
    line-height: 50px;
    color: #fff;
    font-weight: 100;
    background-color: #BAA899;
    border: solid 1px #E0DFDE;
}

.confirm-table__text {
    width: 100%;
    border: solid 1px #E0DFDE;
    padding: 15px 25px;
}

.confirm-button {
    font-size: 18px;
    margin-left: 20px;
    color: #8B7969;
    background-color: #fff;
    border: none;
    text-decoration: underline;
}
</style>