<template>
   <h1>Hello</h1>
</template>
<script>
export default {
    name: "Test",
    mounted() {
        axios
        .get(
          `http://127.0.0.1:8000/api/shop?` +
            new URLSearchParams(this.filter).toString()
        ).then(res=>{
            console.log(res)
        }).catch(err=>{

        })
    },
}
</script>
