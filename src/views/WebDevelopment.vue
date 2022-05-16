<template>
    <div class="development">
        <section class="section__index">
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source :src="video_main" type="video/mp4">
            </video>
        </section>

        <section class="development__development pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-4">
                        <span class="bb--title">
                            DESARROLLO WEB
                        </span>
                    </div>
                    <div class="col-12 mt-4 mt-sm-5">
                        <span class="bb--description">
                            Somos especialistas en la creación de páginas web orientadas a crear experiencias únicas. 
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <section class="development__features">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 px-5 mb-5 mb-md-0">
                        <span class="bb--card-content-title d-flex mb-4">
                            RECURSOS CREATIVOS
                        </span>

                        <img :src="PIC1" alt="materialized" width="112" class="mb-2">
                        <br><br>
                        <span class="bb--card-content-description">
                            Plasmamos la esencia, los ejes rectores y la filosofía de tu empresa a través de diferentes recursos creativos como materiales audiovisuales, fotografías y animación.
                        </span>
                    </div>

                    <div class="col-12 col-md-6 px-5">
                        <span class="bb--card-content-title d-flex mb-4">
                            VIDEO LOOPS
                        </span>

                        <img :src="PIC2" alt="materialized" width="112" class="mb-2">
                        <br><br>
                        <span class="bb--card-content-description pr-md-5">
                            Pequeños videos que incrustamos en la ficha del producto, ficha del perfil de un usuario o el index del sitio de forma automática en formato bucle, dando una experiencia más vívida y dinámica al usuario.     
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <section class="development__intelligently px-3 px-sm-0">
            <div class="container h-100">
                <div class="row development__intelligently--row h-100 px-4 px-sm-5">
                    <div class="col-12 col-md-6 pt-4">
                        <p class="bb--card-content-title pt-5 pb-md-3">
                            DESARROLLADOS DE MANERA INTELIGENTE
                        </p>

                        <p class="bb--card-content-description pt-md-3 pt-lg-5">
                            Todos los proyectos que realiza nuestro equipo multidisciplinario son desarrollados de manera inteligente, basados en el análisis integral de tu empresa, tus clientes potenciales y tu competencia, logrando así un proyecto innovador, estratégico y con una comunicación precisa.
                        </p>
                    </div>
                    <div class="col-12 col-md-6 text-center">
                        <div class="row development__intelligently--tree">
                            <div class="col-6 text-center">
                                <img :src="PIC3" alt="customizer" class="development__intelligently--pic img-fluid">
                                <p class="bb--card-content-description-sm">
                                    CLIENTES
                                </p>
                            </div>
                            <div class="col-6 text-center">
                                <img :src="PIC4" alt="customizer" class="development__intelligently--pic img-fluid">
                                <p class="bb--card-content-description-sm">
                                    COMPETENCIA
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 text-center">
                                <img :src="PIC5" alt="customizer" class="development__intelligently--pic img-fluid">
                                <p class="bb--card-content-description-sm">
                                    ESTRATÉGICA
                                </p>
                            </div>
                            <div class="col-6 text-center">
                                <img :src="PIC6" alt="customizer" class="development__intelligently--pic img-fluid">
                                <p class="bb--card-content-description-sm">
                                    INTERFAZ DE USUARIO
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="development__trends">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12">
                        <p class="bb--card-content-title">
                            TU PÁGINA WEB DEBE CONTAR CON UN DISEÑO, DESARROLLO, ESTRUCTURA, <br>
                            TECNOLOGÍA Y FUNCIONALIDAD ACORDE A LOS ESTÁNDARES Y TENDENCIAS ACTUALES.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center justify-content-lg-end align-items-start align-items-lg-center mb-5 mb-md-0 pt-0 pt-md-5">
                        <div class="px-5" style="max-width: 400px;">
                            <span class="bb--card-content-title d-flex mb-4">
                                HTML Y CSS
                            </span>

                            <img :src="PIC7" alt="materialized" width="112" class="development__trends--pic mb-2">
                            <br><br>
                            <span class="bb--card-content-description">
                                Desarrollaremos tu sitio en código abierto, a través de diversos lenguajes de programación.
                            </span>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center justify-content-lg-end align-items-start align-items-lg-center mb-5 mb-md-0 pt-0 pt-md-5">
                        <div class="px-5" style="max-width: 400px;">
                            <span class="bb--card-content-title d-flex mb-4">
                                JAVASCRIPT
                            </span>

                            <img :src="PIC8" alt="materialized" width="112" class="development__trends--pic mb-2">
                            <br><br>
                            <span class="bb--card-content-description">
                                Nuestra tecnología nos permite utilizar extensiones de gran soporte para complementos, lo que lo hace aún <b>más flexible</b>.
                            </span>
                        </div>
                    </div>

                    <div class="col-12 col-md-12 col-lg-4 d-flex justify-content-end align-items-center p-0">
                        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" class="video-fluid">
                            <source :src="VIDEO2" type="video/mp4">
                        </video>
                    </div>   
                </div>
            </div>
        </section>

        <section class="development__security px-3 px-sm-0">
            <div class="container h-100">
                <div class="row development__security--row h-100 px-4 px-sm-5">
                    <div class="col-12 col-md-6 pt-4">
                        <p class="bb--card-content-title pt-5 pb-md-3">
                            ESTÁNDARES DE ALTA SEGURIDAD: <br>
                            CERTIFICADO SSL
                        </p>

                        <p class="bb--card-content-description pt-md-3 pt-lg-5">
                            Es la tecnología para mantener segura una conexión, así cómo para proteger toda información confidencial e impedir que los ciberdelincuentes lean y modifiquen datos.
                            <br/> <br/> <br/>
                            Utilizamos algoritmos de cifrado para codificar los datos e impedir que los hackers los lean al enviarlos a través de la conexión. 
                        </p>
                    </div>
                    <div class="col-12 col-md-6 text-center">
                        <div class="row development__security--tree">
                            <div class="col-12 text-center pt-md-3">
                                <img :src="PIC9" alt="customizer" class="img-fluid">
                                <p class="bb--card-content-description-sm">
                                    NÚMEROS DE TARJETA, DATOS<br>
                                    BANCARIOS, NOMBRES, <br>
                                    DIRECCIONES Y MÁS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="development__personalized">
            <div class="container">
                <div class="row">

                    <div class="col-12 mb-5">
                        <p class="bb--card-content-title">
                            INTUITIVO, ESCALABLE Y PERSONALIZADO 
                        </p>
                    </div>

                    <div class="col-12 col-lg-6 d-flex justify-content-end align-items-center px-5">
                        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" class="video-fluid">
                            <source :src="VIDEO3" type="video/mp4">
                        </video>
                    </div>

                    <div class="col-12 col-lg-6 pt-5 px-4 px-sm-5">
                        <div class="px-0 px-sm-5">
                            <span class="bb--card-content-description">
                                Sabemos que la mejor manera de optimizar tu trabajo es  implementar procesos efectivos, por ello, desarrollamos sitios y herramientas con capacidad de escalar tecnológicamente a un sistema más robusto.
                            </span>
                            <br><br><br>
                            <div class="row mt-0 mt-sm-5">
                                <div class="col-6 d-flex justify-content-center align-items-center">
                                    <div style="max-width: 200px;" class="text-center">
                                        <img :src="PIC10" alt="customizer" class="development__personalized--pic">
                                        <br><br>
                                        <span class="bb--card-content-description">
                                            Desde cualquier dispositivo.
                                        </span>
                                    </div>
                                </div>
                                <div class="col-6 d-flex justify-content-center align-items-center">
                                    <div style="max-width: 150px;" class="text-center">
                                        <img :src="PIC11" alt="customizer" class="development__personalized--pic">
                                        <br><br>
                                        <span class="bb--card-content-description">
                                            24/7 los 365 días del año. 
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="development__performance">
            <div class="container">
                <div class="row">

                    <div class="col-12 mb-5">
                        <p class="bb--card-content-title">
                            HOSTING WEB DE ALTO RENDIMIENTO Y VELOCIDAD
                        </p>
                    </div>

                    <div class="col-12 col-lg-6 order-1 order-lg-0">
                        <div class="px-4 px-lg-5 pt-lg-4">
                            <div class="row pt-lg-5 mt-lg-5 px-md-2">
                                <div class="col-12 mb-5">
                                    <img :src="PIC12" alt="customizer" align="left" class="development__performance--pic mr-3">
                                    <span class="bb--card-content-description">
                                        Objetivo principal: mantener <b>la estabilidad de hospedaje</b>.
                                    </span>
                                </div>
                                <div class="col-12 mb-5">
                                    <img :src="PIC13" alt="customizer" align="left" class="development__performance--pic mr-3">
                                    <span class="bb--card-content-description">
                                        Nuestro equipo de sistemas <b>monitorea de manera permanente</b> los sitios web para detectar y prevenir problemas.
                                    </span>
                                </div>
                                <div class="col-12 mb-5">
                                    <img :src="PIC14" alt="customizer" align="left" class="development__performance--pic mr-3">
                                    <span class="bb--card-content-description">
                                        Con procesadores de más de <b>3 GHz</b> para un rendimiento de <b>alto desempeño</b>.
                                    </span>
                                </div>
                                <div class="col-12 mb-5">
                                    <img :src="PIC15" alt="customizer" align="left" class="development__performance--pic mr-3">
                                    <span class="bb--card-content-description">
                                        <b>Alta frecuencia</b> impulsado por la arquitectura más rápida en el mundo. 
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 order-0 order-lg-1">
                        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" class="video-fluid">
                            <source :src="VIDEO4" type="video/mp4">
                        </video>
                    </div>


                </div>
            </div>
        </section>

        <contact></contact>
    </div>
</template>

<script>
    import video_main from 'ASSETS/video/development/video_main'

    import PIC1 from 'ASSETS/gif/development/creative_resources'
    import PIC2 from 'ASSETS/gif/development/video_loops'

    import PIC3 from 'ASSETS/gif/development/customers'
    import PIC4 from 'ASSETS/gif/development/competence'
    import PIC5 from 'ASSETS/gif/development/strategic'
    import PIC6 from 'ASSETS/gif/development/user_interface'

    import PIC7 from 'ASSETS/gif/development/open_source'
    import PIC8 from 'ASSETS/gif/development/open_source'
    import VIDEO2 from 'ASSETS/video/development/desktop'

    import PIC9 from 'ASSETS/gif/development/security'

    import VIDEO3 from 'ASSETS/video/development/mobile'
    import PIC10 from 'ASSETS/gif/development/any_device'
    import PIC11 from 'ASSETS/gif/development/24_hours'

    import VIDEO4 from 'ASSETS/video/development/processing'
    import PIC12 from 'ASSETS/gif/development/hosting_stability'
    import PIC13 from 'ASSETS/gif/development/permanently_monitor'
    import PIC14 from 'ASSETS/gif/development/processors'
    import PIC15 from 'ASSETS/gif/development/high_frequency'

    import contact from 'COMPONENTS/contact'

    export default {
        components: {
            'contact': contact
        },
        setup() {
            return {
                video_main,
                PIC1,
                PIC2,
                PIC3,
                PIC4,
                PIC5,
                PIC6,
                PIC7,
                PIC8,
                VIDEO2,
                PIC9,
                VIDEO3,
                PIC10,
                PIC11,
                VIDEO4,
                PIC12,
                PIC13,
                PIC14,
                PIC15
            }
        }
    }
</script>

<style scoped lang="scss">
    .development {
        background: #000;

        &__development {

            padding-bottom: 100px;
        }

        &__features {

            margin-bottom: 150px;
        }

        &__intelligently {
            margin-bottom: 100px;

            &--row {
                border-radius: 19px;
                background: linear-gradient(79.33deg, #0775CC -1.56%, #02EBBB 101.4%);
                padding-bottom: 80px;
            }

            &--tree {
                padding-top: 20%;
                padding-bottom: 10%;
            }

            &--pic {
                height: 100px !important;
                width: 100px !important;
            }
        }

        &__trends {

            margin-bottom: 100px;
        }

        &__security {
            margin-bottom: 100px;

            &--row {
                border-radius: 19px;
                background: linear-gradient(79.33deg, #053D65 -1.56%, #39C2FC 101.4%);
                padding-bottom: 50px;
            }

            &--tree {
                padding-top: 20%;
                padding-bottom: 10%;
            }
        }

        &__personalized {

            margin-bottom: 150px;
        }

        &__performance {

            margin-bottom: 100px;
        }
    }
</style>