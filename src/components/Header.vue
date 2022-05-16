<template>

    <nav class="navbar fixed-top navbar-expand navbar-light navbar__BB">
        <div class="container-fluid">
            <router-link :to="{ name: 'home' }" custom v-slot="{ href }">
                <a class="navbar-brand" :href="href">
                    <video autoplay muted loop class="navbar__logo">
                        <source :src="logo" type="video/mp4" />
                    </video>
                </a>
            </router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarText">
                <span class="navbar-text">
                    <button @click="redirect('contact')" type="button" class="btn btn-outline-light navbar__work">
                        Work together
                    </button>
                    <div class="button_container" @click="open">
                        <span class="top"></span>
                        <span class="middle"></span>
                        <span class="bottom"></span>
                    </div>
                    <p class="navbar__language">
                        ESP
                    </p>
                    <div class="overlay" id="overlay">
                        <div class="button_container" @click="open">
                            <img :src="close" alt="close" style="max-width: 90%;">
                        </div>
                        <nav class="overlay-menu">

                            <div class="row navbar__row">
                                <div class="col-12 col-md-5 order-1 order-md-0 align-self-end navbar__menu-left--row text-start left px-0 px-md-5">
                                    <ul>
                                        
                                        <li>
                                            <router-link :to="{ name: 'home' }" custom v-slot="{ href }">
                                                <a :href="href" class="text-white navbar__menu-left px-5">
                                                    <span @click="open" @keypress.enter="navigate" role="link">
                                                        INICIO
                                                    </span>
                                                </a>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'weare' }" custom v-slot="{ href }">
                                                <a :href="href" class="text-white navbar__menu-left px-5">
                                                    <span @click="open" role="link">
                                                        SOMOS
                                                    </span>
                                                </a>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'portafolio' }" custom v-slot="{ href }">
                                                <a :href="href" class="text-white navbar__menu-left px-5">
                                                    <span @click="open" role="link">
                                                        PORTAFOLIO
                                                    </span>
                                                </a>
                                            </router-link>
                                        </li>
                                        <li>
                                            <div class="navbar__menu-left px-5">
                                                <a href="https://www.facebook.com/blueberrymx/" target="_blank" class="d-inline">
                                                    <img :src="fb" alt="facebook" class="footer__social--image mx-2">
                                                </a>
                                                <a href="https://www.instagram.com/blueberrymx_/" target="_blank" class="d-inline">
                                                    <img :src="ins" alt="instagram" class="footer__social--image mx-2">
                                                </a>

                                                <a href="https://www.linkedin.com/company/blueberrymx" target="_blank" class="d-inline">
                                                    <img :src="lin" alt="linkedin" class="footer__social--image mx-2">
                                                </a>
                                                <a href="https://vimeo.com/blueberrymx" target="_blank" class="d-inline">
                                                    <img :src="v" alt="vimeo" class="footer__social--image mx-2">
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-12 col-md-7 order-0 order-md-1 align-self-center text-end right pb-0 px-0 px-md-5">
                                    <ul>
                                        <li>
                                            <router-link :to="{ name: 'branding' }" custom v-slot="{ href }">
                                                <a :href="href" class="text-white navbar__menu-right px-5 bb--title">
                                                    <span @click="open" @keypress.enter="navigate" role="link">
                                                        BRANDING
                                                    </span>
                                                </a>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'design' }" custom v-slot="{ href }">
                                                <a :href="href" class="text-white navbar__menu-right px-5 bb--title">
                                                    <span @click="open" @keypress.enter="navigate" role="link">
                                                        DISEÑO INTEGRAL
                                                    </span>
                                                </a>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'audiovisual' }" custom v-slot="{ href }">
                                                <a :href="href" class="text-white navbar__menu-right px-5 bb--title">
                                                    <span @click="open" @keypress.enter="navigate" role="link">
                                                        AUDIOVISUAL
                                                    </span>
                                                </a>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'photo' }" custom v-slot="{ href }">
                                                <a :href="href" class="text-white navbar__menu-right px-5 bb--title">
                                                    <span @click="open" @keypress.enter="navigate" role="link">
                                                        FOTOGRAFÍA
                                                    </span>
                                                </a>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'web_development' }" custom v-slot="{ href }">
                                                <a :href="href" class="text-white navbar__menu-right px-5 bb--title">
                                                    <span @click="open" @keypress.enter="navigate" role="link">
                                                        DESARROLLO WEB
                                                    </span>
                                                </a>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'contact' }" custom v-slot="{ href }">
                                                <a :href="href" class="text-white navbar__menu-right px-5 bb--title">
                                                    <span @click="open" @keypress.enter="navigate" role="link">
                                                        CONTACTO
                                                    </span>
                                                </a>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           
                        </nav>
                    </div>
                </span>
            </div>
        </div>
    </nav>

</template>

<script>

import $ from 'jquery'
import logo from 'ASSETS/video/logo'
import close from 'ASSETS/close'

import fb from 'ASSETS/images/fb'
import lin from 'ASSETS/images/in'
import ins from 'ASSETS/images/ins'
import v from 'ASSETS/images/v'
import yt from 'ASSETS/images/yt'

import { onMounted } from 'vue'

export default {

    setup() {

        const open = () => {
            console.log('here')
            $(this).toggleClass('active');
            $('#overlay').toggleClass('open');
        }

        // onMounted(() => {
        //     $('#toggle').click(function() {
        //         $(this).toggleClass('active');
        //         $('#overlay').toggleClass('open');
        //     });
        // })

        return {
            logo,
            open,
            close,

            fb,
            lin,
            ins,
            v,
            yt
        }
    },
    methods: {
        redirect(name) {
            this.$router.push({
                name: name
            })
        }
    }
}
</script>

<style scoped lang="scss">

    .navbar {
        padding-bottom: 1.5rem;

        &__row {
            height: 80vh;
        }

        &__menu-left--row {
            padding-bottom: 300px;
        }

        &__menu-left--right {
            padding-bottom: 200px;
        }

        &__menu-left {
            font-family: 'Prompt';
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            text-align: left;
            color: #F0F0F0;
            line-height: 180%;
        }

        &__menu-right {
            font-family: "Prompt";
            font-style: normal;
            font-weight: bold;
            //color: #FFFFFF;
            line-height: 120%;
        }

        // Extra Small devices (landscape phones, 200px and up)
        @media (min-width: 200px) {
            &__menu-left {
                font-size: 18px;
            }
            &__menu-right {
                // color: red !important;
                font-size: 30px;
            }
            &__work, &__language {
                display: none;
            }
            &__logo {
                left: 20px;
            }
        }

        // Extra Small devices (landscape phones, 200px and up)
        @media (min-width: 630px) {
            &__menu-left {
                font-size: 20px;
            }
            &__menu-right {
                // color: yellow !important;
                font-size: 50px;
            }
            &__logo {
                left: 150px;
            }
        }

        // Small devices (landscape phones, 576px and up)
        @media (min-width: 920px) {
            &__menu-left {
                font-size: 22px;
            }
            &__menu-right {
                // color: blue !important;
                font-size: 60px;
            }
            &__work, &__language {
                display: block;
            }
        }

        // Large devices (desktops, 992px and up)
        @media (min-width: 1080px) {
            &__menu-left {
                font-size: 24px;
            }
            &__menu-right {
                // color: red !important;
                font-size: 72px;
            }
        }

        // Extra large devices (large desktops, 1200px and up)
        @media (min-width: 1520px) {
            &__menu-right {
                // color: green !important;
                font-size: 80px;
            }
        }

        // Extra Extra large devices (large desktops, 1200px and up)
        @media (min-width: 1720px) {
            &__menu-right {
                // color: red !important;
                font-size: 90px;
            }
        }

        &__logo {
            position: relative;
            width: 16%;
            top: 10px;
            left: 20px;
            bottom: 15px;
        }

        &__BB {
            background: #000;
        }

        &__work {
            position: absolute;
            top: 26px;
            right: 200px;
            width: 180px;
        }

        &__language {
            position: absolute;
            right: 30px;
            top: 35px;
            color: #fff;
        }
    }

    $color-background: #F5F5F5;
    $color-main: #000;
    $color-active: #FFF;
    $color-link: #FFF;
    $button-height: 27px;
    $button-width: 35px;



    .container {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        top: 40%;
        left: 0;
        margin:  0 auto;
        font-family: 'Varela Round', sans-serif;

        p {
            font-size: 20px;
        }
        
        a {
            display: inline-block;
            position: relative;
            text-align: center;
            color: $color-main;
            text-decoration: none;
            font-size: 20px;
            overflow: hidden;
            top: 5px;
            
            &:after {
                content: '';
                position: absolute;
                background: $color-main;
                height: 2px;
                width: 0%;
                transform: translateX(-50%);
                left: 50%;
                bottom: 0;
                transition: .35s ease;
            }
            &:hover:after,
            &:focus:after,
            &:active:after {
                width: 100%;
            }
        }
    }

    h1 {
        position: relative;
        text-align: center;
    }

    .button_container {
        position: fixed;
        top: 4%;
        right: 7%;
        height: $button-height;
        width: $button-width;
        cursor: pointer;
        z-index: 1;
        transition: opacity .25s ease;
        
        &:hover {
            opacity: .7;
        }
        
        &.active {
            .top {
                transform: translateY(11px) translateX(0) rotate(45deg);
                background: #fff
            }
            .middle {
                opacity: 0;
                background: #fff
            }
            .bottom {
                transform: translateY(-11px) translateX(0) rotate(-45deg);
                background: #fff
            }
        }
        
        span {
            background: #fff ;
            border: none;
            height: 5px;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            transition:  all .35s ease;
            cursor: pointer;
            
            &:nth-of-type(2) {
                top: 11px;
            }
            
            &:nth-of-type(3) {
                top: 22px;
            }
        }
    }

    // Extra Small devices (landscape phones, 200px and up)
    @media (min-width: 200px) {
        .button_container {
            right: 7%;
        }
    }
    // Extra Small devices (landscape phones, 200px and up)
    @media (min-width: 430px) {
        .button_container {
            right: 7%;
        }
    }

    .overlay {
        position: fixed;
        background: $color-main;
        top: 0;
        left: 0;
        width: 100vw;
        height: 0%;
        visibility: hidden;
        overflow: hidden;
        z-index: 1;
        
        &.open {
            visibility: visible;
            height: 100%;
            
            li {
                animation: fadeInRight .5s ease forwards;
                animation-delay: .35s;
                
                &:nth-of-type(2) {
                    animation-delay: .4s;
                }
                &:nth-of-type(3) {
                    animation-delay: .45s;
                }
                &:nth-of-type(4) {
                    animation-delay: .50s;
                }
            }
        }
        nav {
            position: relative;
            height: 70%;
            top: 50%;
            transform: translateY(-50%);
            font-size: 50px;
            font-weight: 400;
            text-align: center;
        }
        
        .left {
            ul {
                list-style: none;
                padding: 0;
                margin: 0 auto;
                display: inline-block;
                position: relative;
                height: 100%; 
                
                li {
                    display: block;
                    height: 25%;
                    height: calc(100% / 4);
                    // min-height: 50px;
                    position: relative;
                    opacity: 0;
                    
                    a {
                        display: block;
                        position: relative;
                        color: $color-link;
                        text-decoration: none;
                        overflow: hidden;
                        
                        &:hover:after,
                        &:focus:after,
                        &:active:after {
                            width: 60%;
                        }
                        
                        &:after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 44%;
                            width: 0%;
                            transform: translateX(-50%);
                            height: 3px;
                            background: $color-link;
                            transition: .35s;
                        }
                    }
                }
            }
        }

        .right {
            ul {
                list-style: none;
                padding: 0;
                margin: 0 auto;
                display: inline-block;
                position: relative;
                height: 100%; 
                
                li {
                    display: block;
                    height: 25%;
                    height: calc(100% / 4);
                    min-height: 50px;
                    position: relative;
                    opacity: 0;
                    
                    a {
                        display: block;
                        position: relative;
                        color: $color-link;
                        text-decoration: none;
                        overflow: hidden;
                        
                        &:hover:after,
                        &:focus:after,
                        &:active:after {
                            width: 90%;
                        }
                        
                        &:after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 50%;
                            width: 0%;
                            transform: translateX(-50%);
                            height: 3px;
                            background: $color-link;
                            transition: .35s;
                        }
                    }
                }
            }
        }
    }

    @keyframes fadeInRight {
        0% {
            opacity: 0;
            left: 20%;
        }
        100% {
            opacity: 1;
            left: 0;
        }
    }

    // .navbar {

    //     &__logo {
    //         position: absolute;
    //         width: 223.81px;
    //         height: 50px;
    //         left: 150px;
    //         top: 31px;
    //     }

    //     &__bg {
    //         background-color: #000 !important;
    //         height: 131px;
    //     }

    //     &__items {
    //         right: 30px;
    //         position: relative;

    //         &__button {
    //             position: relative;
    //             right: 100px;
    //         }

    //         &__burger {
    //             position: relative;
    //             right: 60px;
    //             max-width: 25px;
    //         }
    //     }
    // }

    // input {
    //    display: none;
    // }

    // .open {
    //     background-color: #fff;
    //     width: 24px;
    //     height: 4px;
    //     display: block;
    //     border-radius: 2px;
    //     cursor: pointer;
    //     position: relative;
    //     right: 60px;
    // }

    // .open:before {
    //     content: "";
    //     background-color: #fff;
    //     width: 24px;
    //     height: 4px;
    //     display: block;
    //     border-radius: 2px;
    //     position: relative;
    //     top: -8px;
    //     transform: rotate(0deg);
    //     transition: all 0.3s ease;
    // }

    // .open:after {
    //     content: "";
    //     background-color: #fff;
    //     width: 24px;
    //     height: 4px;
    //     display: block;
    //     border-radius: 2px;
    //     position: relative;
    //     top: 4px;
    //     transform: rotate(0deg);
    //     transition: all 0.3s ease;
    // }

    // .menuOpen {
    //     width: 24px;
    //     height: 20px;
    //     display: block;
    //     padding: 15px;
    //     cursor: pointer;
    //     float: right;
    // }

    // .menuOpen:hover .open:before {
    //     top: -9px;
    // }

    // .menuOpen:hover .open:after {
    //     top: 5px;
    // }

    // .menu {
    //     position: fixed;
    //     width: 100vw;
    //     height: 100vh;
    //     top: 0;
    //     left: 0;
    //     background: #000;
    // }


    // .menuEffects {
    //     opacity: 0;
    //     visibility: hidden;
    //     transition: opacity 0.5s, visibility 0.5s;
    // }

    // .menuEffects ul {
    //     transform: translateY(0%);
    //     transition: all 0.5s;
    // }

    // #menuToggle:checked ~ .menuEffects {
    //     opacity: 1;
    //     visibility: visible;
    //     transition: opacity 0.5s;
    // }

    // #menuToggle:checked ~ .menuEffects ul {
    //     opacity: 1;
    // }

    // #menuToggle:checked ~ .menuOpen .open {
    //     background-color: transparent;
    // }

    // #menuToggle:checked ~ .menuOpen .open:before {
    //     content: "";
    //     background-color: white;
    //     transform: rotate(45deg);
    //     position: absolute;
    //     top: 0;
    //     right: 0;
    //     z-index: 1;
    // }

    // #menuToggle:checked ~ .menuOpen .open:after {
    //     content: "";
    //     background-color: white;
    //     transform: rotate(-45deg);
    //     position: relative;
    //     top: 0;
    //     right: 0;
    //     z-index: 1;
    // }

    // #menuToggle:not(:checked) ~ .menuEffects ul {
    //     transform: translateY(-30%);
    // }

    // .container-content-left {
    //     position: relative;
    //     left: 150px;
    //     text-align: left;
    //     top: 80%;
    //     height: 60vh;

    //     &__font {
    //         font-size: 24px;
    //         font-stretch: normal;
    //         line-height: 40px;
    //         font-weight: 400;
    //     }
    // }

    // .container-content-right {
    //     position: relative;
    //     right: 150px;
    //     text-align: right;
    //     top: 30%;
    //     height: 60vh;

    //     &__font {
    //         font-size: 100px;
    //         font-weight: 700;
    //         line-height: 130px;
    //         font-style: normal;
    //     }
    // }

</style>