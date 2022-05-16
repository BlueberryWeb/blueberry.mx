<template>
    <div>
        <section class="section__index">
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source :src="index" type="video/mp4">
            </video>
        </section>
        
        <section class="weare px-3 px-sm-0">
            <div class="container">
                <div class="row">
                    <div class="col-6 weare__position-left">
                        <p class="bb--title">
                            SOMOSS
                        </p>
                    </div>
                    <div class="col-12 d-flex justify-content-end">
                        <div class="weare__box-video">
                            <video autoplay muted loop>
                                <source :src="weare" type="video/mp4"/>
                            </video>
                        </div>  
                    </div>
                    <div class="col-12 col-sm-6 order-1 order-sm-0 d-flex justify-content-end align-items-end">
                        
                        <button @click="redirect('weare')" type="button" class="btn btn-outline-light weare__button mt-4 mt-sm-0 p-2 px-3">
                            <b>Conoce más</b>
                        </button>
                        
                    </div>
                    <div class="col-12 col-sm-6 order-0 order-sm-1 d-flex text-end">
                        
                        <span class="font-fira weare__description">
                            <b>Blueberry</b>. es una compañía de consultoría multidisciplinaria dedicada a materializar negocios inteligentes.
                            <br>
                            <br>
                            Tenemos las herramientas necesarias para que tu idea de negocio, producto o servicio sea potencializada. Te acompañamos en este proceso de crecimiento y nos comprometemos a ser los mejores aliados para que cumplas tus objetivos empresariales.
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <section class="branding py-5">
            <section class="container py-5">
                <div class="row">

                    <div class="col-12 col-lg-6">
                        <div class="row">
                            <div class="col-12">
                                <img :src="BR" alt="BR" class="branding__BR">
                                <hr class="branding__hr">
                            </div>
                            <div class="col-12 py-3 py-lg-5">
                                <p class="bb--card-content-title"> BRANDING </p>
                            </div>
                            <div class="col-12 font-fira branding__div mb-0 mb-lg-5">
                                <span class="font-fira branding__div--description">
                                    Branding es el trabajo de gestión de marca con el 
                                    objetivo de hacerla deseada y positiva en la mente y el
                                    corazón de los consumidores.
                                </span>
                            </div>
                            <div class="col-12 font-fira branding__div py-5">
                                <button @click="redirect('branding')" type="button" class="btn btn-outline-light branding__button-BR">
                                    VER MÁS
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 d-flex pt-5 pt-lg-0">
                        <video autoplay muted loop class="branding__video">
                            <source :src="BRA" type="video/mp4">
                        </video>
                    </div>
                </div>
            </section>

            <section class="container py-5">
                <div class="row">

                    <div class="col-12 col-lg-6">
                        <div class="row">
                            <div class="col-12">
                                <img :src="DI" alt="BR" class="branding__BR">
                                <hr class="branding__hr">
                            </div>
                            <div class="col-12 py-3 py-lg-5">
                                <p class="bb--card-content-title"> DISEÑO INTEGRAL </p>
                            </div>
                            <div class="col-12 font-fira branding__div mb-0 mb-lg-5">
                                <span class="font-fira branding__div--description">
                                    En Blueberry. nos enfocamos en crear un sistema 
                                    eficiente que logre materializar tus ideas por 
                                    medio de la asesoría profesional.
                                </span>
                            </div>
                            <div class="col-12 font-fira branding__div py-5">
                                <button @click="redirect('design')" type="button" class="btn btn-outline-light branding__button-BR">
                                    VER MÁS
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 d-flex pt-5 pt-lg-0">
                        <video autoplay muted loop class="branding__video">
                            <source :src="DIV" type="video/mp4">
                        </video>
                    </div>
                </div>
            </section>

            <section class="container py-5">
                <div class="row">

                    <div class="col-12 col-lg-6">
                        <div class="row">
                            <div class="col-12">
                                <img :src="AU" alt="BR" class="branding__BR">
                                <hr class="branding__hr">
                            </div>
                            <div class="col-12 py-3 py-lg-5">
                                <p class="bb--card-content-title"> FOTOGRAFÍA </p>
                            </div>
                            <div class="col-12 font-fira branding__div mb-0 mb-lg-5">
                                <span class="font-fira branding__div--description">
                                    En Blueberry. no tomamos fotos, capturamos momentos, 
                                    espacios, productos, personas que trascienden y 
                                    comunican el mensaje de manera precisa.
                                </span>
                            </div>
                            <div class="col-12 font-fira branding__div py-5">
                                <button @click="redirect('photo')" type="button" class="btn btn-outline-light branding__button-BR">
                                    VER MÁS
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 d-flex pt-5 pt-lg-0">
                        <video autoplay muted loop class="branding__video">
                            <source :src="PHO" type="video/mp4">
                        </video>
                    </div>
                </div>
            </section>

            <section class="container py-5">
                <div class="row">

                    <div class="col-12 col-lg-6">
                        <div class="row">
                            <div class="col-12">
                                <img :src="AU" alt="BR" class="branding__BR">
                                <hr class="branding__hr">
                            </div>
                            <div class="col-12 py-3 py-lg-5">
                                <p class="bb--card-content-title"> AUDIOVISUAL </p>
                            </div>
                            <div class="col-12 font-fira branding__div mb-0 mb-lg-5">
                                <span class="font-fira branding__div--description">
                                    Creamos contenido audiovisual personalizado que 
                                    logre capturar la esencia y las cualidades únicas 
                                    de tu marca.
                                </span>
                            </div>
                            <div class="col-12 font-fira branding__div py-5">
                                <button @click="redirect('audiovisual')" type="button" class="btn btn-outline-light branding__button-BR">
                                    VER MÁS
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 d-flex pt-5 pt-lg-0">
                        <video autoplay muted loop class="branding__video">
                            <source :src="AUV" type="video/mp4">
                        </video>
                    </div>
                </div>
            </section>

            <section class="container py-5">
                <div class="row">

                    <div class="col-12 col-lg-6">
                        <div class="row">
                            <div class="col-12">
                                <img :src="DW" alt="BR" class="branding__BR">
                                <hr class="branding__hr">
                            </div>
                            <div class="col-12 py-3 py-lg-5">
                                <p class="bb--card-content-title"> DESARROLLO WEB </p>
                            </div>
                            <div class="col-12 font-fira branding__div mb-0 mb-lg-5">
                                <span class="font-fira branding__div--description">
                                    Somos especialistas en la creación de páginas web 
                                    orientadas a crear experiencias únicas.
                                </span>
                            </div>
                            <div class="col-12 font-fira branding__div py-5">
                                <button @click="redirect('web_development')" type="button" class="btn btn-outline-light branding__button-BR">
                                    VER MÁS
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 d-flex pt-5 pt-lg-0">
                        <video autoplay muted loop class="branding__video">
                            <source :src="DIS" type="video/mp4">
                        </video>
                    </div>
                </div>
            </section>
        </section>

        <section class="customer pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 colxl-12">
                        <span class="bb--title-lg">
                            CLIENTES
                        </span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center customer-section_logos">
                    <div class="col-7 col-sm-6 col-md-6 col-lg-4 col-xl-4 align-self-center">
                        <img :src="movalia" class="img-fluid rounded mx-auto d-block" alt="movalia">
                    </div>
                    <div class="col-7 col-sm-6 col-md-6 col-lg-4 col-xl-4 align-self-center">
                        <img :src="circo_dragon" class="img-fluid rounded mx-auto d-block" alt="circo_dragon">
                    </div>
                    <div class="col-7 col-sm-6 col-md-6 col-lg-4 col-xl-4 align-self-center">
                        <img :src="parvati" class="img-fluid rounded mx-auto d-block" alt="parvati">
                    </div>

                    <div class="col-7 col-sm-6 col-md-6 col-lg-4 col-xl-4 align-self-center">
                        <img :src="kdl" class="img-fluid rounded mx-auto d-block" alt="kdl">
                    </div>
                    <div class="col-7 col-sm-6 col-md-6 col-lg-4 col-xl-4 align-self-center">
                        <img :src="premier" class="img-fluid rounded mx-auto d-block" alt="premier">
                    </div>
                    <div class="col-7 col-sm-6 col-md-6 col-lg-4 col-xl-4 align-self-center">
                        <img :src="mercado" class="img-fluid rounded mx-auto d-block" alt="mercado" style="width: 70%;">
                    </div>

                    <div class="col-7 col-sm-6 col-md-6 col-lg-4 col-xl-4 align-self-center">
                        <img :src="beirat" class="img-fluid rounded mx-auto d-block" alt="kdl">
                    </div>
                    <div class="col-7 col-sm-6 col-md-6 col-lg-4 col-xl-4 align-self-center">
                        <img :src="integra" class="img-fluid rounded mx-auto d-block" alt="premier">
                    </div>
                    <div class="col-7 col-sm-6 col-md-6 col-lg-4 col-xl-4 align-self-center">
                        <img :src="great" class="img-fluid rounded mx-auto d-block" alt="great">
                    </div>

                </div>
            </div>
        </section>

        <contact></contact>
    </div>
</template>

<script>
    // Videos
    import index from 'ASSETS/video/home/index'
    import weare from 'ASSETS/video/weare/weare'
    import BRA from 'ASSETS/video/home/branding'
    import DIV from 'ASSETS/video/home/diseño_integral'
    import PHO from 'ASSETS/video/home/fotografia'
    import AUV from 'ASSETS/video/home/audiovisual'
    import DIS from 'ASSETS/video/home/desarrollo_web'

    // Workflow
    import BR from 'ASSETS/gif/general/workflow/branding'
    import DI from 'ASSETS/gif/general/workflow/diseño'
    import AU from 'ASSETS/gif/general/workflow/audiovisual'
    import DW from 'ASSETS/gif/general/workflow/desarrollo'

    // Customers
    import movalia from 'ASSETS/images/home/customer/movalia'
    import circo_dragon from 'ASSETS/images/home/customer/circo_dragon'
    import parvati from 'ASSETS/images/home/customer/parvati'
    import kdl from 'ASSETS/images/home/customer/kdl'
    import premier from 'ASSETS/images/home/customer/premier'
    import mercado from 'ASSETS/images/home/customer/mercado'
    import beirat from 'ASSETS/images/home/customer/beirat'
    import integra from 'ASSETS/images/home/customer/integra'
    import great from 'ASSETS/images/home/customer/great'

    import contact from 'COMPONENTS/contact'

    export default {
        components: {
            'contact': contact
        },
        setup() {
            return {
                index,
                weare,
                BRA,
                DIV,
                PHO,
                AUV,
                DIS,

                BR,
                DI,
                AU,
                DW,
                
                movalia,
                circo_dragon,
                parvati,
                kdl,
                premier,
                mercado,
                beirat,
                integra,
                great
            }   
        },
        methods: {
            redirect(name) {
                window.scrollTo( 0, 0 )

                this.$router.push({
                    name: name
                })
            }
        }
    }
</script>

<style lang="scss">

    .weare {
        position: relative;
        padding-bottom: 150px;
        background: #000;

        &__position-left {
            position: absolute;
            z-index: 1;
            padding-top: 84px;
            padding-left: 150px;
        }

        &__box-video {

            width: 75%;
            overflow: hidden;
            position: relative;
            padding-top: 340px;

            video {
                position: relative;
                top: 10%;
                left: 50%;
                min-width: 100%;
                min-height: 100%;
                width: 60%;
                height: auto;
                z-index: 0;
                -ms-transform: translateX(-50%) translateY(-50%);
                -moz-transform: translateX(-50%) translateY(-50%);
                -webkit-transform: translateX(-50%) translateY(-50%);
                transform: translateX(-50%) translateY(-50%);
            }
        }

        // Extra Small devices (landscape phones, 200px and up)
        @media (min-width: 200px) {
            &__box-video {
                padding-top: 200px;
            }
        }
        // Extra Small devices (landscape phones, 200px and up)
        @media (min-width: 976px) {
            &__box-video {
                padding-top: 340px;
            }
        }

        &__description {
            color: #fff;
            padding-top: 30px;
            font-size: 18px;
            font-weight: 400;
            font-style: normal;
            text-align: right;
        }

        &__button {
            //
        }
    }

    .branding {
        background: #000;

        &__video {
            max-width: 100%;
            min-width: 100%;
        }

        &__row {
            padding-bottom: 130px;
        }

        &__BR {
            max-width: 30%;
            min-width: 30%;
        } 

        &__hr {
            width: 165px;
            height: 0px;
            left: 200px;
            top: 1940px;

            border: 3px solid #FFFFFF;
        }

        &__title-BR {
            padding-top: 50px;
            padding-bottom: 50px;
            font-family: "Prompt";
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            color: #FFFFFF;
        }
        &__div {
            max-width: 400px;

            &--description {
                font-family: "Fira Sans";
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                color: #F0F0F0;    
            }
        }
        &__title-BR {
            // position: absolute;
            font-family: "Fira Sans";
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            color: #F0F0F0;
            // width: 400px;
        }

        &__button-BR {
            width: 200px;
        }
    }

    .customer {
        position: relative;
        // height: 85vh;
        padding-bottom: 150px;
        background: #000;

        &__title {

            font-family: "Prompt";
            font-style: normal;
            font-weight: bold;
            font-size: 100px;
            line-height: 57%;
            display: flex;
            align-items: center;

            color: #FFFFFF;
        }

        &-section_logos {
            padding-top: 121px;
        }

        .img-fluid {
            padding-bottom: 59px;
        }
    }
</style>