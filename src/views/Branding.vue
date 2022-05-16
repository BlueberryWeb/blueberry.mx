<template>
    <div class="branding">

        <section class="branding__index">
            <header>
                <div class="overlay"></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" class="video-fluid">
                    <source :src="video_main" type="video/mp4">
                </video>
            </header>
        </section>

        <section class="branding__weare">
            <div class="container">
                <div class="row">
                    <div class="col-12 mtb-5">
                        <span class="bb--title">
                            BRANDING
                        </span>
                    </div>
                    <div class="col-12 mt-5">
                        <span class="bb--description">
                            En <b>Blueberry</b>. somos capaces de entender la visión que tienes sobre tu marca, además de tener la habilidad de crear la estructura y personalidad que logre transmitir el propósito y valores que quieres comunicar.
                        </span>
                    </div>
                    <div class="col-12 text-center">
                        <img :src="BBGIF" alt="BB" class="branding__weare--bb">
                    </div>
                </div>
            </div>
        </section>

        <section class="branding__tech px-3 px-sm-0">
            <div class="container h-100">
                <div class="row branding__tech--row h-100 px-4 px-sm-5">
                    <div class="col-12 col-md-6 pt-5">
                        <p class="bb--card-content-title pb-md-3 pb-lg-5">
                            ASPECTOS TÉCNICOS Y CREATIVOS PARA EL DESARROLLO DE TU MARCA:
                        </p>

                        <p class="bb--card-content-description pt-md-3 pt-lg-5">
                            En Blueberry. somos capaces de entender la visión que tienes sobre tu marca, además de tener la habilidad de crear la estructura y personalidad que logre transmitir el propósito y valores que quieres comunicar.
                        </p>
                    </div>
                    <div class="col-12 col-md-6 text-center">
                        <div class="row branding__tech--tree">
                            <div class="col-6 text-center">
                                <img :src="PIC1" class="branding__tech--pic img-fluid">
                                <p class="bb--card-content-description">
                                    ESENCIA
                                </p>
                            </div>
                            <div class="col-6 text-center">
                                <img :src="PIC2" class="img-fluid" alt="">
                                <p class="bb--card-content-description">
                                    ATRIBUTOS CLAVE
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 text-center">
                                <img :src="PIC3" class="img-fluid" alt="">
                                <p class="bb--card-content-description">
                                    COMUNICACIÓN ESTRATÉGICA 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="branding__brand px-4 px-sm-0">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="branding__brand--box-left pt-5">
                            <div class="text-lef">
                                <span class="bb--card-content-title px-4 px-md-3 px-lg-5">
                                    BRAND STATEMENT
                                </span>
                            </div>
                            <div class="text-end branding__brand--box-image">
                                <img :src="PIC4" alt="materialized" class="">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="branding__brand--box-right">
                            <div class=" branding__brand--box-label pt-5">
                                <span class="bb--card-content-title px-4 px-md-3 px-lg-5">
                                    PERSONALIDAD DE MARCA
                                </span>    
                            </div>
                            <div class="branding__brand--video-container">
                                <video autoplay muted loop class="branding__brand--video-row">
                                    <source :src="VIDEO1" type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="branding__creation px-4 px-sm-0">
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-4">
                        <div class="branding__creation--box-title">
                            <span class="bb--card-content-title">
                                CREACIÓN Y DESARROLLO DE TU GUÍA DE IDENTIDAD:
                            </span>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 px-2 px-lg-3 mb-5 mb-lg-0">
                        <div class="px-1 px-sm-0">
                            <div class="row branding__creation--box-left pt-4 pb-5 px-3 px-lg-5">
                                <div class="col-12 text-left">
                                    <span class="bb--card-content-title pb-4">
                                        IDENTIFICADORES
                                    </span>
                                </div>
                                <div class="col-12 d-flex justify-content-center align-items-center py-5">
                                    <div class="row">
                                        <div class="col-12 d-flex justify-content-center align-items-center">
                                            <img :src="PIC6" alt="materialized" class="branding__creation--box-left-img img-fluid">
                                        </div>
                                        <div class="col-12 d-flex justify-content-center align-items-center">
                                            <img :src="PIC5" alt="materialized" class="branding__creation--box-left-img1 img-fluid">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 text-start pb-2">
                                    <span class="branding__creation--box-left-description">
                                        Desarrollamos un identificador (Logotipo)  y sus versiones necesarias para el funcionamiento visual de tu marca.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 px-0 px-lg-3">
                        <div class="branding__creation--box-right pt-4 pb-5 px-5" :style="{ backgroundImage: 'url(' + PIC4_1 + ')' }">
                            <span class="branding__creation--box-right-label">
                                MOODBOARD
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="branding__size px-4 px-sm-0">
            <div class="container ">
                <div class="row branding__size--box p-5">
                    <div class="col-12 col-md-6">
                        <div class="branding__size--box-left">
                            <span class="bb--card-content-title">  
                                TAMAÑO MÍNIMO · ZONAS DE <br>
                                PROTECCIÓN · USOS INCORRECTOS
                            </span>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 d-flex justify-content-end p-5">
                        <div class="branding__size--box-right p-5">
                            <img :src="PIC7" alt="materialized">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="branding__color">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 p-4">
                        <div class="row branding__color--box py-5 px-5">
                            <div class="col-12">
                                <span class="bb--card-content-title">
                                    PALETA DE COLOR
                                </span>
                            </div>
                            <div class="col-12 d-flex justify-content-center align-items-center py-1">
                                <video autoplay muted loop style="max-width: 80%; max-height: 80%">
                                    <source :src="VIDEO2" type="video/mp4"/>
                                </video>
                            </div>
                            <div class="col-12 bb--card-content-description">
                                <span>
                                    <!-- Desarrollamos un identificador (Logotipo)  y sus versiones necesarias para el funcionamiento visual de tu marca. N/A-->
                                    Definimos la paleta de colores enfocada en una identidad correcta, para transmitir los ejes rectores de la marca.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 p-4">
                        <div class="row branding__color--box py-5 px-5">
                            <div class="col-12">
                                <span class="bb--card-content-title">
                                    TIPOGRAFÍA
                                </span>
                            </div>
                            <div class="col-12 d-flex justify-content-center align-items-center py-2 py-lg-1 pt-xl-5 pb-xl-4">
                                <div class="py-1 py-xl-5">
                                    <video autoplay muted loop style="max-width: 100%; max-height: 100%" class="py-2">
                                        <source :src="VIDEO3" type="video/mp4"/>
                                    </video>    
                                </div>
                            </div>
                            <div class="col-12 bb--card-content-description">
                                <span>
                                    <!-- Desarrollamos un identificador (Logotipo)  y sus versiones necesarias para el funcionamiento visual de tu marca. N/A-->
                                    Valoramos la importancia del uso correcto de tipografías que permitan la fácil reproducción, lectura y comprensión de los contenidos de tu marca.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <contact></contact>
    </div>
</template>

<script>

    import video_main from 'ASSETS/video/branding/video_main'
    import BR from 'ASSETS/gif/general/workflow/branding'

    import BBGIF from 'ASSETS/gif/branding/bb_gif'
    import PIC1 from 'ASSETS/gif/branding/essence'
    import PIC2 from 'ASSETS/gif/branding/key_attributes'
    import PIC3 from 'ASSETS/gif/branding/strategy'

    import PIC4 from 'ASSETS/gif/branding/materialized'
    import PIC4_1 from 'ASSETS/images/branding/moodboard'
    import VIDEO1 from 'ASSETS/video/branding/personalidad'

    import PIC5 from 'ASSETS/gif/branding/bb1'
    import PIC6 from 'ASSETS/gif/branding/bb2'

    import PIC7 from 'ASSETS/gif/branding/bb_rotate'

    import VIDEO2 from 'ASSETS/video/branding/paleta_color'
    import VIDEO3 from 'ASSETS/video/branding/tipografia'

    import contact from 'COMPONENTS/contact'

    export default {
        components: {
            'contact': contact
        },
        setup() {
            return {
                video_main,
                BR,
                BBGIF,
                PIC1,
                PIC2,
                PIC3,
                PIC4,
                PIC4_1, 
                VIDEO1,
                PIC5,
                PIC6,
                PIC7,
                VIDEO2,
                VIDEO3
            }
        }
    }
</script>

<style scoped lang="scss">
    .branding {

        background: #000;

        &__index {
            padding-top: 93px;
            padding-bottom: 100px;

            &--image {
                position: relative;
                max-width: 15%;
                min-width: 15%;
            }

            &--title {
                font-family: 'Prompt';
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                line-height: 67px;
                display: flex;
                align-items: center;
                text-align: center;

                color: rgba(255, 255, 255, 0.4);
            }
        }

        &__weare {
            padding-bottom: 80px;

            &--title {
                font-family: 'Prompt';
                font-style: normal;
                font-weight: bold;
                font-size: 100px;
                line-height: 38px;
                display: flex;
                align-items: center;
                color: #FFFFFF;
            }

            &--description {
                font-family: 'Fira Sans';
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 26px;
                color: #FFFFFF;
                height: 20vh;
            }

            &--bb {
                max-width: 50%;
                min-width: 50%
            }
        }

        &__tech {
            padding-bottom: 100px;
            
            &--row {
                border-radius: 10px;
                background: rgb(129,12,206);
                background: linear-gradient(90deg, rgba(129,12,206,1) 0%, rgba(238,23,150,1) 100%);
                padding-bottom: 50px;
            }

            &--title {
                padding-top: 60px;
                padding-bottom: 30px;
                font-family: 'Prompt';
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 38px;
                display: flex;
                align-items: center;
                color: #FFFFFF;
            }

            &--description {
                padding-top: 30px;
                font-family: 'Fira Sans';
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 26px;
                color: #FFFFFF;
            }

            &--tree {
                padding-top: 20%;
                padding-bottom: 10%;
            }
        }

        &__brand {
            padding-bottom: 100px;

            &--box-left {
                position: relative;
                top: 40px;
                background: rgba(130, 130, 130, 0.3);
                height: 65vh;
                
                border-radius: 19px;

                img {
                    
                    max-width: 60%;
                    min-width: 60%;
                }
            }

            &--box-image {
                position: relative;
                top: 35%;
                right: 10%;
                height: 54vh;
            }

            &--box-right {
                position: relative;
                top: 40px;
                
            }

            &--video-container {
                position: relative;
                left: 5%;
                height: 65vh;
                border-radius: 20px;
                overflow: hidden;
                
            }

            &--video-row {
                position: relative;
                height: 100%;
                max-width: 100%;
                min-width: 100%;
                border-radius: 19px;
            }

            &--box-label {
                position: absolute;
                z-index: 2;
            }
        }

        &__creation {
            padding-bottom: 50px;
            
            &--box-label {
                font-family: 'Prompt';
                top: 10%;
                left: 10%;
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 38px;
                display: flex;
                align-items: center;
                color: #FFFFFF;
                z-index: 2;
            }

            &--box-title {
                position: relative;
                top: 40%;
                padding-bottom: 12%;
            }

            &--title {
                font-family: 'Prompt';
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 38px;
                color: #FFFFFF;
            }

            &--box-left {
                // position: relative;
                
                background: linear-gradient(233.74deg, #FDCF07 0.81%, #EE1796 100%);
                border-radius: 19px;
                // height: 65vh;
                // width: 70vh;

                &-img1 {
                    // position: relative;
                    padding-bottom: 10px;
                    // left: 10%;
                    max-width: 20%;
                    min-width: 20%;
                }

                &-img2 {
                    // position: relative;
                    padding-bottom: 30px;
                    // left: 10%;
                    max-width: 30%;
                    min-width: 30%;
                }

                &-description {
                    // position: relative;
                    // left: 5%;
                    font-family: 'Fira Sans';
                    font-style: normal;
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 26px;
                    color: #FFFFFF;
                }
            }

            &--box-right {
                border-radius: 19px;
                height: 424px;

                &-label {
                    font-family: 'Prompt';
                    top: 10%;
                    left: 10%;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 38px;
                    display: flex;
                    align-items: center;
                    color: #FFFFFF;
                }

                &-img {
                    border-radius: 19px;
                }
            }

            &--box-image {
                position: relative;
                top: 35%;
                right: 10%;
                height: 50vh;
            }

            @media (max-width: 1400px) {
                &--box-right {
                    height: 442px;
                }
            }

            @media (max-width: 1185px) {
                &--box-right {
                    height: 448px;
                }
            }
        }

        &__size {
            padding-bottom: 50px;

            &--box {
                position: relative;
                top: 20px;
                background: linear-gradient(79.33deg, #1B9235 -1.56%, #F0E712 101.4%);
                border-radius: 19px;
                padding-bottom: 50px;
            }

            &--box-left {
            
                &-title {
                    font-family: Prompt;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 38px;
                    color: #FFFFFF;

                }
            }

            &--box-right {
            
                img {
                    max-width: 120%;
                    min-width: 120%;
                }
            }
            
        }

        &__color {
            padding-bottom: 100px;  


            &--box {
                background: rgba(130, 130, 130, 0.3);
                border-radius: 19px;

                &-video-container {

                    video {
                        max-width: 40%;
                        min-width: 40%;
                        z-index: 0;
                    }
                }

                &-label {

                    span {
                        font-family: Fira Sans;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 20px;
                        line-height: 26px;
                        color: #FFFFFF;
                    }
                }

            }

            &--label {
                font-family: 'Prompt';
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 38px;
                color: #FFFFFF;
            }
            
        }
    }
</style>