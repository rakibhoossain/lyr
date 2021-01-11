<template>
    <Upload :dialog.sync="uploadDialog" :multiple="true" @filesUploaded="processUpload($event)"/>
</template>
<script>

export default {
    middleware: 'auth',
    data: () => ({
        uploadDialog: true,
    }),
    methods: {
    async processUpload(ev) {
      try {
        console.log(ev)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
