<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container is-desktop">
          <div class="columns">
            <div class="column">
              <h1 class="title">
                Log in
              </h1>
              <h2 class="subtitle">
                Log in to your account!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section content">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-4">
            <form @submit.prevent="userLogin">

                <div v-if="errors && errors.message" class="notification is-danger">
                {{ errors.message }}
                </div>

                <div class="field">
                <div class="control">
                    <label class="label">Email</label>
                    <input type="email" placeholder="Your Email" class="input" :class="errors && errors.email ? 'is-danger' : ''" v-model="login.email" />
                    <p class="help is-danger" v-if="errors && errors.email">{{ errors.email[0] }}</p>
                </div>
                </div>

                <div class="field">
                <div class="control">
                    <label class="label">Password</label>
                    <input type="password" placeholder="Your Password" class="input" :class="errors && errors.password ? 'is-danger' : ''" v-model="login.password" />
                    <p class="help is-danger" v-if="errors && errors.password">{{ errors.password[0] }}</p>
                </div>
                </div>

                <div class="field is-marginless">
                <div class="control">
                    <button :disabled="isLoading" type="submit" class="button is-primary" :class="isLoading ? 'is-loading' : ''">Log in</button>
                </div>
                </div>

            </form>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
      isLoading: false,
      errors: null
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        this.$router.push('/video')
      } catch (err) {
        this.isLoading = false
        this.errors = err.response.data
      }
    }
  }
}
</script>
