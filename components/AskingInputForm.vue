<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[(v) => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-text-field
      v-model="question"
      :counter="100"
      :rules="questionRules"
      label="Question"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      label="메일주소 및 관련 내용 Github 공개 동의"
      required
    ></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="_summit">
      Summit
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    question: '',
    questionRules: [
      (v) => !!v || 'Question is required',
      (v) =>
        (v && v.length <= 100) || 'Question must be less than 100 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,
  }),

  methods: {
    _summit() {
      this.$refs.form.validate()
      if (this.valid) {
        this._post()
        alert('「' + this.select + '」를 등록하였습니다.')
      }
    },
    _post() {
      try {
        const accessToken = this.$axios.$post(
          'https://github.com/login/oauth/access_token',
          {
            client_id: '!!!',
            client_secret: '!!!'
          }
        )
        console.log(accessToken)
        this.$axios.$post(
          'https://api.github.com/repos/tooget/tooget.github.io/issues',
          {
            title: this.select,
          },
          {
            headers: {
              'Content-Type': 'application/vnd.github.v3+json',
              'Authorization': 'bearer !!!'
            },
          }
        )
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
