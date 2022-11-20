<template>
    <div class="footer">
        <h4>Made by | Julian Moreno</h4>
        <a  href="https://github.com/Juliancho2" target="_blank" class="icons"><font-awesome-icon icon="fa-brands fa-github" /></a>
        <small>2022</small>

    </div>
</template>
<script setup>

</script>

<style scoped>
    .footer{
        margin-top: 50px;
        width: 100%;
        border-top: 1px solid rgb(124, 111, 111);
        padding-top:20px;
        padding-bottom: 20px;
        }
    .footer h4{
        text-align: center;
        font-size: 1rem;
        color: rgb(211, 219, 226);
    }
    .footer small{
        display: block;
        text-align: center;
        color: rgb(211, 219, 226);
    }
    .icons{
        display: block;
        text-align: center;
        font-size: 1.5rem;
        color: antiquewhite;
    }

    @media (min-width:750px){
        .footer{
            width: 40rem;
        }
    }

</style>