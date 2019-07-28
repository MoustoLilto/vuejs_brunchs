<template>
    <div class="testBlock red"></div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    .testBlock {
        height: 100px;
        width: 100%;

        position-webkit: sticky;
        position: sticky;
        top: 0px;
    }

    .red {
        background-color: red;
    }
</style>