<template>
    <div>
        <v-row justify="center">
            <v-col md="4">
                <v-card class="pa-4">
                    <v-card-text>
                        <v-form ref="loginForm" v-model="valid" lazy-validation>
                            <v-row justify="center">
                                <v-col cols="12">
                                    <v-text-field v-model="login.email" :class="errors && errors.email ? 'is-danger' : ''" :rules="emailRules" label="E-mail" required></v-text-field>
                                    <p class="help is-danger" v-if="errors && errors.email">{{ errors.email[0] }}</p>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="login.password" :append-icon="showPassword?'mdi-eye':'mdi-eye-off'" :class="errors && errors.password ? 'is-danger' : ''" :rules="passwordRules" :type="showPassword ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="showPassword = !showPassword"></v-text-field>
                                    <p class="help is-danger" v-if="errors && errors.password">{{ errors.password[0] }}</p>
                                </v-col>
                                <v-col class="d-flex" cols="12" sm="3">
                                    <v-btn x-large block :disabled="!valid" color="success" @click="userLogin"> Login </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    middleware: 'guest',
  data() {
    return {
        showPassword: false,
        valid: true,
        login: {
            email: '',
            password: ''
        },
        errors: null,
        emailRules: [
            v => !!v || "Required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],

        passwordRules: [
            v => !!v || "Required.",
            v => (v && v.length >= 8) || "Min 8 characters"
        ]
    }
  },
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('laravelJWT', { data: this.login })
        this.$router.push('/')
      } catch (err) {
        this.valid = false
        this.errors = err.response.data
      }
    },
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
}
</script>
