<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail 주소를 입력해주세요."
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[(v) => !!v || 'Item is required']"
      label="질문 관련 항목을 선택해주세요."
      required
    ></v-select>

    <v-text-field
      v-model="question"
      :counter="100"
      :rules="questionRules"
      label="질문 내용을 입력해주세요."
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      label="메일주소 및 관련 내용을 Github 리포지토리상 공개함에 동의합니다."
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
    items: ['사이트 사용상 문제', '비지니스 상담'],
    checkbox: false,
  }),

  methods: {
    _summit() {
      this.$refs.form.validate()
      if (this.valid) {
        this._post()
        alert(
          '「' +
            this.select +
            ' / ' +
            this.email +
            '」를 이슈로 등록하였습니다.'
        )
      }
    },

    _labelsMap() {
      switch (this.select) {
        case '사이트 사용상 문제':
          return ['Domain:UX', 'Task:Bug', 'Communication:VoiceOfCustomer']
        case '비지니스 상담':
          return [
            'Domain:Business',
            'Task:Enhancement',
            'Communication:VoiceOfCustomer',
          ]
        default:
          return ['Communication:VoiceOfCustomer']
      }
    },

    _post() {
      try {
        const auth = this.$axios.$get(
          'https://github.com/login/oauth/authorize', 
          {
            client_id: 'Iv1.e0e64991a1594894',
          },
        )
        const authToken = this.$axios.$post(
          'https://github.com/login/oauth/access_token',
          {
            client_id: 'Iv1.e0e64991a1594894',
            client_secret: '7eaa628b940094955669c5f5200f4502c3f5af51',
            code: auth.code,
          },
        )
        this.$axios.$post(
          'https://api.github.com/repos/tooget/tooget.github.io/issues',
          {
            title: this.select + ' / ' + this.email,
            labels: this._labelsMap(),
            body:
              '| Email | 항목 | 질문 |\n| -- | -- | -- |\n' +
              '|' +
              this.email +
              '|' +
              this.select +
              '|' +
              this.question +
              '|',
          },
          {
            headers: {
              'Content-Type': 'application/vnd.github.v3+json',
              Authorization:
                authToken.token_type + ' ' + authToken.access_token,
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
