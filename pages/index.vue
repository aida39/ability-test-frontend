<template>
  <div class="contact-form__content">
    <div class="contact-form__heading">
      <h1>Contact</h1>
    </div>
    <form class="form" action="/confirm" method="post">
      <div class="form__group">
        <div class="form__group-title">
          <span class="form__label--item">お名前</span>
          <span class="form__label--required">※</span>
        </div>
        <div class="form__group-content">
          <div class="form__input--name">
            <input type="text" name="last_name" placeholder="例: 山田" />
            <input type="text" name="first_name" placeholder="例: 太郎" />
          </div>
        </div>
      </div>
      <div class="error-message">
      </div>
      <div class="form__group">
        <div class="form__group-title">
          <span class="form__label--item">性別</span>
          <span class="form__label--required">※</span>
        </div>
        <div class="form__group-content">
          <div class="form__input--radio">
            <input type="radio" id="male" name="gender" value="1" checked />
            <label for="male">男性</label>
          </div>
          <div class="form__input--radio">
            <input type="radio" id="female" name="gender" value="2" />
            <label for="female">女性</label>
          </div>
          <div class="form__input--radio">
            <input type="radio" id="others" name="gender" value="3" />
            <label for="others">その他</label>
          </div>
        </div>
      </div>
      <div class="error-message">
      </div>
      <div class="form__group">
        <div class="form__group-title">
          <span class="form__label--item">メールアドレス</span>
          <span class="form__label--required">※</span>
        </div>
        <div class="form__group-content">
          <div class="form__input--text">
            <input type="email" name="email" placeholder="例: test@example.com" />
          </div>
        </div>
      </div>
      <div class="error-message">
      </div>
      <div class="form__group">
        <div class="form__group-title">
          <span class="form__label--item">電話番号</span>
          <span class="form__label--required">※</span>
        </div>
        <div class="form__group-content">
          <div class="form__input--tel">
            <input type="tel" name="tell-first" placeholder="080" />
            <span>-</span>
            <input type="tel" name="tell-second" placeholder="1234" />
            <span>-</span>
            <input type="tel" name="tell-third" placeholder="5678" />
          </div>
        </div>
      </div>
      <div class="error-message">
      </div>
      <div class="form__group">
        <div class="form__group-title">
          <span class="form__label--item">住所</span>
          <span class="form__label--required">※</span>
        </div>
        <div class="form__group-content">
          <div class="form__input--text">
            <input type="text" name="address" placeholder="例: 東京都渋谷区千駄ヶ谷1-2-3"  />
          </div>
        </div>
      </div>
      <div class="error-message">
      </div>
      <div class="form__group">
        <div class="form__group-title">
          <span class="form__label--item">建物名</span>
        </div>
        <div class="form__group-content">
          <div class="form__input--text">
            <input type="text" name="building" placeholder="例: 千駄ヶ谷マンション101"  />
          </div>
        </div>
      </div>
      <div class="form__group">
        <div class="form__group-title">
          <span class="form__label--item">お問い合わせの種類</span>
          <span class="form__label--required">※</span>
        </div>
        <div class="form__group-content">
          <div class="form__input--text">
            <select name="category_id">
              <option value="">選択してください</option>
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>
      <div class="error-message">
      </div>
      <div class="form__group form__group--textarea">
        <div class="form__group-title">
          <span class="form__label--item">お問い合わせ内容</span>
          <span class="form__label--required">※</span>
        </div>
        <div class="form__group-content">
          <div class="form__input--text">
            <textarea class="form__input--textarea" name="detail"
              placeholder="お問い合わせ内容をご記載ください"></textarea>
          </div>
        </div>
      </div>
      <div class="error-message">
      </div>
      <div class="button__area">
        <button class="common-button" type="submit">確認画面</button>
      </div>
    </form>
  </div>
</template>

<style>
.contact-form__heading {
  text-align: center;
}

.form {
  width: 70%;
  margin: 0 auto;
}

.form__group {
  display: flex;
  margin: 20px 0;
}

.form__group-title {
  width: 30%;
}

.form__label--required {
  color: #ff9494;
}

.form__group-content {
  display: flex;
  width: 1000px;
  height: 35px;
}

.form__input--name {
  width: 100%;
}

.form__input--name input {
  width: 45%;
  height: 35px;
}

.form__input--radio {
  margin-right: 30px;
}

.form__input--text {
  width: 100%;
}

.form__input--text input {
  width: 90.5%;
  height: 35px;
}

.form__input--text select {
  width: 40%;
  height: 35px;
}

.form__input--tel {
  width: 100%;
}

.form__input--tel input {
  width: 28%;
  height: 35px;
}

.form__input--tel span {
  margin: 0 4px;
}

.form__group--textarea {
  height: 250px;
}

.form__input--textarea {
  height: 200px;
  width: 90.5%;
}
</style>