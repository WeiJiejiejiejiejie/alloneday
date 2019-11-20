<template>
    <div>
        <chengQtuijianmax></chengQtuijianmax>
        <chengQtuijianmin></chengQtuijianmin>
    </div>
</template>

<script>
    import chengQtuijianmax from "./chengQ-tuijian/chengQ-tuijian-max";
    import chengQtuijianmin from "./chengQ-tuijian/chengQ-tuijian-min";
    export default {
        name: "chengquan-tuijian-all",
        components:{
            chengQtuijianmax,
            chengQtuijianmin
        }
    }
</script>

<style scoped>

</style>