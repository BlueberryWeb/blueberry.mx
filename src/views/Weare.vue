<template>
    <div class="weare">
        <section class="row section__index">
            <div class="col-12 section__index__div">
                <span class="bb--title">
                    SOMOS
                </span>    
            </div>
            <div class="col-12 section__index__video">
                <video autoplay muted loop>
                    <source :src="weare" type="video/mp4"/>
                </video>
            </div>
        </section>

        <section class="pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex justify-content-end text-end">
                        <span class="bb--description">
                            Somos un grupo de personas ligadas por
                            <br>
                            nuestra pasión por materializar ideas de negocios.
                            <br />
                            <br />
                            Somos expertos en el desarrollo de sistemas de comunicación
                            <br>
                            adaptados a los mercados internacionales.
                        </span>
                    </div>  
                </div>
            </div>
        </section>

        <section class="weare__make">
            <div class="container">
                <div class="row mb-5">
                    
                    <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 px-4 px-md-5 py-3">
                        <img :src="gif1" class="weare__make--gif">
                        <hr>
                        <span class="bb--description">
                            Tenemos las herramientas necesarias para que tu idea de negocio, producto o servicio sea potencializada.
                        </span>
                    </div>
                    <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 px-4 px-md-5 py-3">
                        <img :src="gif2" class="weare__make--gif">
                        <hr>
                         <span class="bb--description">
                            Te llevamos de la mano en este proceso de crecimiento.
                        </span>
                    </div>
                    <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 px-4 px-md-5 py-3">
                         <img :src="gif3" class="weare__make--gif">
                        <hr>
                         <span class="bb--description">
                            Nos comprometemos a ser tus mejores aliados para que cumplas tus objetivos empresariales.
                        </span>
                    </div>
                    <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 px-4 px-md-5 py-3">
                        <img :src="gif4" class="weare__make--gif">
                        <hr>
                         <span class="bb--description">
                            Desarrollamos recursos publicitarios que crean relaciones fuertes, duraderas entre las empresas y sus clientes.
                        </span>
                    </div>
                    <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 px-4 px-md-5 py-3">
                        <img :src="gif5" class="weare__make--gif">
                        <hr>
                         <span class="bb--description">
                            A través de un equipo multidisciplinario.
                        </span>
                    </div>

                </div>
            </div>
        </section>

        <section  class="weare__intermediate">
            <div class="row weare__intermediate--box">
                <div class="col-12 col-sm-5 text-end align-self-center my-4 my-sm-0">
                    <div class="py-1 py-sm-5 px-4">
                        <span class="weare__intermediate--label1 mb-3">
                            ASESORAMOS A
                        </span><br>
                        <span class="weare__intermediate--label2 mb-3">
                            + 1256
                        </span><br>
                        <span class="weare__intermediate--label3 mb-3">
                            Portafolio de clientes de diferentes industrias
                        </span>
                    </div>
                </div>
                <div class="col-12 col-sm-7 align-self-center px-5 py-4 py-sm-0">
                    <span class="bb--description" style="color: black;">
                        Nuestas estrategias combinan conceptos creativos, conocimiento íntimo de los medios de comunicación y una compresión profunda de la industria para lograr resultados cualitativos y cuantitativos.
                    </span>
                </div>
            </div>
        </section>

        <section class="weare__loop">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <video autoplay muted loop class="weare__loop--video">
                            <source :src="weare" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </section>

        <contact />
    </div>
</template>

<script>
    import weare from 'ASSETS/video/weare/weare'

    import gif1 from 'ASSETS/gif/weare/tools'
    import gif2 from 'ASSETS/gif/weare/hands'
    import gif3 from 'ASSETS/gif/weare/objectives'
    import gif4 from 'ASSETS/gif/weare/relations'
    import gif5 from 'ASSETS/gif/weare/team'

    import contact from 'COMPONENTS/contact'

    export default {
        components: {
            'contact': contact
        },
        setup() {
            return {
                weare,
                gif1,
                gif2,
                gif3,
                gif4,
                gif5
            }
        },
    }
</script>

<style lang="scss">

    .weare {
        background: #000;
    
        &__index {
            // height: 100vh;

            &--container {
                position: relative;
                top: 27%;
                left: 5.5%;
                height: 80vh;
                width: 90%;
                overflow: hidden;

                &-title {
                    position: absolute;
                    top: 20%;
                    z-index: 100;
                }
            }

            &--description {
                font-family: "Fira Sans";
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 26px;
                text-align: right;
                color: #FFFFFF;
                padding-right: 4.5%;
            }

            &--video {
                position: absolute;
                z-index: 1;
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

        &__make {
            padding-top: 100px;
            padding-bottom: 100px;

            &--gif {
                width: 105px;
            }

            hr {
                margin-top: 44px;
                margin-bottom: 40px;
                width: 96.31px;
                height: 0px;
                border: 2px solid #FFFFFF;
            }

            // span {
            //     font-family: 'Fira Sans';
            //     font-style: normal;
            //     font-weight: normal;
            //     font-size: 16px;
            //     line-height: 26px;
            //     display: flex;
            //     align-items: center;
            //     color: #FFFFFF;
            // }
        }

        &__intermediate {
            background: #fff;

            &--box {
                min-height: 30vh;
            }

            &--label1 {
                font-family: "Fira Sans";
                font-style: normal;
                font-weight: 700;
                font-size: 22px;
                line-height: 30px;
                color: #000000;
            }

            &--label2 {
                font-family: "Fira Sans";
                font-style: normal;
                font-weight: 700;
                font-size: 50px;
                line-height: 30px;
                color: #000000;
            }

            &--label3 {
                font-family: "Fira Sans";
                font-style: normal;
                font-size: 16px;
                line-height: 30px;
                color: #000000;
            }

             &--label4 {
                padding-right: 12%;
                font-family: "Fira Sans";
                font-style: normal;
                font-size: 14px;
                line-height: 30px;
                color: #000000;
            }

            &--space {
                height: 4vh;
            }
        }

        &__loop {
            padding-top: 100px;
            padding-bottom: 100px;

            &--video {
                max-width: 100%;
                min-width: 100%
            }
        }
        
    }

</style>
