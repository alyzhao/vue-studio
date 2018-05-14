<template>
    <div class="message">
        <!--<div class="m">-->
            <!--<img class="max-bg" src="../assets/img/max-bg.png" alt="">-->
            <!--<img class="min-bg" src="../assets/img/min-bg.png" alt="">-->
            <div class="container">
                <div class="message-box">
                    <h1 class="message-box-t">{{content.title}}</h1>
                    <div class="message-para">
                        <p v-for="(item, index) in content.list" :key="index">{{item}}</p>
                    </div>
                    <div class="message-name">
                        <img src="../assets/img/doctor-name.png" alt="">
                        <span v-for="(item, index) in content.signatureList" :key="index">{{item}}</span>
                    </div>
                </div>
            </div>
        <!--</div>-->
    </div>
</template>
<script>
    import {contentZh, contentEn} from 'constants/letter.js';

    export default{
        name:"credit",
        computed: {
            isZh() {
                return this.$store.state.lang == 'zh';
            },
            content() {
                return this.isZh ? contentZh : contentEn;
            }
        },        
    }
</script>
<style lang="scss">
.message{
    width: 100%;
    padding: 170px 0;
    background: url("../assets/img/mid-bg.png");
    background-size: 100% 100%;
    .message-box-t{
        font-size: 48px;
    }
    .message-para p{
        margin-bottom: 2rem;
        font-size: 24px;
        line-height: 40px;
    }
    .container{
        background: #fff;
        box-shadow:0 0 65px 4px rgba(129,129,129,0.2);
        margin:0 9.8%;
    }
    .message-box{
        padding: 70px 144px 114px;
    }
    .message-box-t:after{
        content: "";
        display: block;
        width: 72px;
        height: 12px;
        background: #5235ad;
        margin-top: 50px;
        margin-bottom:80px;
    }
    .message-name{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-end;
    }
    .message-name img{
        width:inherit;
        height: auto;
        display: block;
    }
    .message-name span{
        font-size: 24px;
        &:nth-child(2){
            margin-top: 77px;
        }
    }
    .min-bg{
        display: none;
    }
    .max-bg {
        display: block;
    }
    @media  screen and (max-width: 1200px){
        .container{
            .message-box{
                padding: 62px 57px 56px;
            }
        }
        .message{
            padding: 88px 0;
            background: url("../assets/img/min-bg.png") no-repeat;
            background-size: 100% 100%;
        }
        .message-box-t:after{
            margin-top: 27px;
            margin-bottom: 40px;
        }
        .message-name span:nth-child(2) {
            margin-top: 2rem;
        }
    }
}
@media (max-width: 768px) {
    .message {
        padding: 2rem 1.5rem;
        .container {
            margin: 0;
        }
    }
    .message .container .message-box {
        padding: 2rem 1.5rem;
    }
    .message .message-box-t {
        font-size: 32px;
    }
    .message .message-para p {
        margin-bottom: 1rem;
        font-size: 18px;
        line-height: 30px;
    }
    .message .message-name {
        margin-top: 3rem;
    }
    .message .message-name img {
        width: 12rem;
    }
    .message .message-name span {
        font-size: 18px;
    }
}
</style>