<script setup>
const contactLists = ref([])
const categoryLists = ref([])

const fetchData = async () => {
    const { data } = await useFetch('http://127.0.0.1:80/api/admin')
    contactLists.value = data.value.data
    categoryLists.value = data.value.category
}

fetchData()

const getGenderText = (value) => {
    switch (value) {
        case 1:
            return "男性";
        case 2:
            return "女性";
        case 3:
            return "その他";
    }
}

const showContent = ref(false)
const selectedContact = ref(null)

const openModal = (contact) => {
    showContent.value = true
    selectedContact.value = contact
}

const closeModal = () => {
    showContent.value = false
    selectedContact.value = null
}

const confirmAction = (message) => {
    return confirm(message);
}

const deleteContact = async (id) => {
    if (confirmAction('削除してもよろしいですか？')) {
        await useFetch(`http://127.0.0.1:80/api/delete/${id}`, {
            method: 'DELETE'
        });
        closeModal();
        await fetchData();  // データを再取得して一覧を更新
    }
};
</script>

<template>
    <div class="admin__container">
        <div class="admin__heading">
            <h1>Admin</h1>
        </div>
        <div class="admin__content">
            <div class="admin__search">
                <form class="admin__form" action="/search" method="get">
                    <div class="admin__form__item">
                        <div class="admin__form__input-area">
                            <input class="admin__form__item-keyword" type="search" name="keyword"
                                placeholder="名前やメールアドレスを入力してください">
                            <button class="admin__form__button" type="submit">
                                <img src="@/assets/images/icon.png" alt="heart-icon">
                            </button>
                        </div>
                        <select class="admin__form__item-gender" name="gender">
                            <option value="">性別</option>
                            <option value="">全て</option>
                            <option value="1">男性</option>
                            <option value="2">女性</option>
                            <option value="3">その他</option>
                        </select>
                        <select class="admin__form__item-category" name="category_id">
                            <option value="">お問い合わせの種類</option>
                            <option v-for="category in categoryLists" :key="category.id" :value="category">{{
                                category.content }}
                            </option>
                        </select>
                        <input class="admin__form__item-date" type="date" name="created_at" />
                    </div>
                </form>
            </div>
            <div class="admin__function">
                <div class="admin__function-export">
                    <form action="/download" method="get">
                        <button class="download-button">エクスポート</button>
                    </form>
                </div>
                <div class="admin__function-pagination">
                    <!-- {{ $contacts -> appends(request() -> query()) -> links('vendor.pagination.pagination') }} -->
                </div>
            </div>
            <div class="admin__table">
                <table class="admin__table__inner">
                    <tr class="admin__table__row">
                        <th class="admin__table__header">お名前</th>
                        <th class="admin__table__header">性別</th>
                        <th class="admin__table__header">メールアドレス</th>
                        <th class="admin__table__header">お問い合わせの種類</th>
                        <th class="admin__table__header"></th>
                    </tr>

                    <tr v-for="contact in contactLists" :key="contact.id" class="admin__table__row">
                        <td class="admin__table__text">
                            {{ contact.last_name }}
                            {{ contact.first_name }}
                        </td>
                        <td class="admin__table__text">
                            {{ getGenderText(contact.gender) }}
                        </td>
                        <td class="admin__table__text admin__table__text-email">
                            {{ contact.email }}
                        </td>
                        <td class="admin__table__text">
                            {{ contact.category.content }}
                        </td>
                        <td class="admin__table__text">
                            <button @click="openModal(contact)" class="modal-button">
                                詳細
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    <form action="/admin" method="get">
        <div class="button__area">
            <button class="common-button">リセット</button>
        </div>
    </form>

    <div id="overlay" v-show="showContent" @click="closeModal">
        <div id="content" @click.stop v-if="selectedContact" class="delete__container">
            <div class="back-button">
                <span @click="closeModal">×</span>
            </div>
            <table class="delete__table">
                <tr class="delete__table__row">
                    <th class="delete__table__header">お名前</th>
                    <td>{{ selectedContact.last_name }} {{ selectedContact.first_name }}</td>
                </tr>
                <tr class="delete__table__row">
                    <th class="delete__table__header">性別</th>
                    <td>{{ getGenderText(selectedContact.gender) }}</td>
                </tr>
                <tr class="delete__table__row">
                    <th class="delete__table__header">メールアドレス</th>
                    <td> {{ selectedContact.email }}</td>
                </tr>
                <tr class="delete__table__row">
                    <th class="delete__table__header">電話番号</th>
                    <td>{{ selectedContact.tell }}</td>
                </tr>
                <tr class="delete__table__row">
                    <th class="delete__table__header">住所</th>
                    <td>{{ selectedContact.address }}</td>
                </tr>
                <tr class="delete__table__row">
                    <th class="delete__table__header">建物名</th>
                    <td> {{ selectedContact.building }}</td>
                </tr>
                <tr class="delete__table__row">
                    <th class="delete__table__header">お問い合わせの種類</th>
                    <td> {{ selectedContact.category.content }}</td>
                </tr>
                <tr class="delete__table__row">
                    <th class="delete__table__header">お問い合わせ内容</th>
                    <td>{{ selectedContact.detail }}</td>
                </tr>
            </table>
            <form @submit.prevent="submitForm">
                <div class="button__area">
                    <button @click="deleteContact(selectedContact.id)" class="delete-button" type="submit">削除</button>
                </div>
            </form>
        </div>
    </div>

</template>

<style>
body {
    color: #8B7969;
}

.admin__heading {
    text-align: center;
    padding-top: 10px;
}

.admin__content {
    width: 80%;
    margin: 10px auto;
    padding: 20px;
}

.admin__form__item {
    display: flex;
    justify-content: space-between;
}

.admin__form__input-area {
    position: relative;
    width: 35%;
}

.admin__form__item-keyword {
    width: 100%;
    height: 45px;
    border: 1px solid #E3DED9;
    color: #BEB1A6;
    background-color: #FBFBFB;
}

.admin__form__button {
    display: inline-block;
    position: absolute;
    top: 5px;
    right: 5px;
    border: none;
    background-color: #FBFBFB;
}

.admin__form__item-gender {
    width: 10%;
    height: 45px;
    border: 1px solid #E3DED9;
    color: #8b7969;
    background-color: #f4f4f4;
}

.admin__form__item-category {
    width: 20%;
    height: 45px;
    border: 1px solid #E3DED9;
    color: #8b7969;
    background-color: #f4f4f4;
}

.admin__form__item-date {
    width: 20%;
    height: 45px;
    border: 1px solid #E3DED9;
    color: #8b7969;
    background-color: #f4f4f4;
}

.admin__function {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
}

.download-button {
    color: #8b7969;
    background-color: #edeae6;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
}

.admin__table__inner {
    width: 100%;
    margin-top: 20px;
}

.admin__table__header {
    height: 55px;
    vertical-align: middle;
    background-color: #8B7969;
    color: #fff;
    text-align: start;
    padding-left: 50px;
}

.admin__table__row {
    border: 1px solid #E3DED9;
}

.admin__table__text {
    height: 80px;
    padding-left: 50px;
    vertical-align: middle;
}

.admin__table__text-email {
    font-family: serif;
}

.modal-button {
    padding: 5px 15px;
    font-size: 16px;
    border: 1px solid #E3DED9;
    background-color: #FBFBFB;
    color: #BEB1A6;
    cursor: pointer;
}

#overlay {
    /*　要素を重ねた時の順番　*/
    z-index: 1;

    /*　画面全体を覆う設定　*/
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    /* background-color: (0,0,0,0.5); */
    /*　画面の中央に要素を表示させる設定　*/
    display: flex;
    align-items: center;
    justify-content: center;
}

#content {
    z-index: 2;
    width: 50%;
    padding: 1em;
    border: 1px solid #8B7969;
    background: #fff;
}

.delete__container {
    width: 50%;
    margin: 0 auto;
}

.back-button {
    display: flex;
    justify-content: end;
    margin: 20px 50px 0 0;
}

.back-button span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 31px;
    border: 1px solid #8B7969;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
}

.delete__table {
    margin: 40px auto;

}

.delete__table__header {
    text-align: start;
    padding-right: 40px;
}

.delete__table__row {
    height: 65px;
}

.delete-button {
    padding: 10px 25px;
    border: none;
    background-color: #ba360e;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}
</style>