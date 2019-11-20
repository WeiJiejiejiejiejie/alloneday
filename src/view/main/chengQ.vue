<template>
    <div>
        <chengQbanner></chengQbanner>
    </div>
</template>

<script>
    /*
    推荐
     */
    import chengQbanner from "../../components/chengQ/chengQ-content-banner";

    export default {
        name: "chengQ",
        components:{
            chengQbanner
        },
        // data(){
        //     return {
        //         homeInfo : []
        //     }
        // },
        // methods: {
        //     _initIndexInfo() {
        //         homeInfo.getData(data => {
        //             this.homeInfo = data;
        //             console.log(data)
        //         })
        //     },
        // },
        // created() {
        //     this._initIndexInfo();
        // }
    }
</script>

<style scoped>

</style>