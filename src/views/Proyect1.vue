<template>
    <div class="proyect1">
        <section class="section__index">
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source :src="VIDEO1" type="video/mp4">
            </video>
        </section>

        <section class="proyect1__proyect1 container pt-5">
            <div class="row">
                <div class="col-12 mb-5 mb-lg-5">
                    <span class="bb--title">
                        CIRCO DRAGÓN
                    </span>
                </div>
            </div>
        </section>

        <section class="proyect1__content">
            <div class="container-fluid">
                <div class="row pb-5 pb-md-0">
                    <div class="col-12 p-0">
                        <img :src="PIC1" class="proyect1__content--pic" />
                    </div>
                </div>

                <div class="row py-5 py-md-0">
                    <div class="col-12 col-md-7 p-0">
                        <img :src="PIC2" class="proyect1__content--pic pb-4 pb-md-0" />
                    </div>
                    <div class="col-12 col-md-5 d-flex justify-content-center align-items-center p-0">
                        <div style="max-width: 400px;" class="px-3">
                            <p class="bb--card-content-description">
                                En Circo Dragón logramos promover la transformación de marca de una compañía con más de 17 años de experiencia en el Teatro Circense.
                            </p>    
                        </div>
                    </div>
                </div>

                <div class="row py-5 py-md-0">
                    <div class="col-12 col-md-5 d-flex justify-content-center align-items-center order-1 order-md-0 p-0">
                        <div style="max-width: 400px;" class="px-3">
                            <p class="bb--card-content-description">
                                Enfocamos nuestros esfuerzos en la evolución de la marca rediseñando sus estilos y redefiniendo su identidad como compañía. 
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-7 order-0 order-md-1 p-0">
                        <img :src="PIC3" class="proyect1__content--pic pb-4 pb-md-0" />
                    </div>
                </div>

                <div class="row py-5 py-md-0">
                    <div class="col-12 p-0">
                        <img :src="PIC4" class="proyect1__content--pic" />
                    </div>
                </div>
            </div>
        </section>

        <section class="proyect1__proyect1 pt-5">
            <div class="container">
                <div class="row mt-5 mb-0 mb-md-5">
                    <div class="col-12">
                        <span class="bb--title">
                            WORKFLOW
                        </span>
                    </div>
                </div>
                <div class="row d-flex justify-content-start justify-content-sm-center align-items-center pt-5">
                    <div class="col-6 col-sm-4 col-lg-4 mb-5 d-flex justify-content-center align-items-center">
                        <img :src="BR" alt="branding" class="branding__index--image img-fluid mx-md-4">
                    </div>
                    <div class="col-6 col-sm-4 col-lg-4 mb-5 d-flex justify-content-center align-items-center">
                        <img :src="AU" alt="audiovisual" class="branding__index--image img-fluid mx-md-4">
                    </div>
                    <div class="col-6 col-sm-4 col-lg-4 mb-5 d-flex justify-content-center align-items-center">
                        <img :src="BR" alt="branding" class="branding__index--image img-fluid mx-md-4">
                    </div>
                </div>
            </div>
        </section>

        <section class="proyect1__content">
            <div class="container-fluid">
                <div class="row pb-5">
                    <div class="col-12 mt-5 p-0">
                        <img :src="PIC5" class="proyect1__content--pic" />
                    </div>
                </div>
            </div>
        </section>

        <section class="proyect1__proyect1 pb-0">
            <div class="container">
                <div class="row mb-5 px-3">
                    <div class="col-12 col-md-5 pb-5 pb-md-0 d-flex justify-content-center align-items-center p-0">
                        <div style="max-width: 400px;">
                            <p class="bb--description">
                                Servicios ofrecidos: <br><br>
 
                                Consultoría <br>
                                Branding <br>
                                Web <br>
                                Diseño Integral <br>
                                Foto y Video <br>
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-7 p-0">
                        <p class="bb--description">
                            Creamos una infinidad de materiales audiovisuales, tanto fotográficos como de video bajo un estricto criterio de calidad en su conceptualización como en su montaje creativo para cada uno de sus usos publicitarios. 
                            <br><br>
                            Amplificamos la experiencia de usuario previo a cualquiera de sus espectáculos, gracias a que enfocamos nuestros esfuerzos en generar expectativa, misterio y fantasía en cada uno de los recursos publicitarios. 
                            <br><br>
                            Una compañía que nos ha permitido soñar despiertos gracias a su increíble talento circense.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="proyect1__content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mt-5 p-0">
                        <img :src="PIC6" class="proyect1__content--pic" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    // workflow gifs
    import BR from 'ASSETS/gif/general/workflow/branding'
    import AU from 'ASSETS/gif/general/workflow/audiovisual'

    import VIDEO1 from 'ASSETS/video/photo/video_main'
    import PIC1 from 'ASSETS/images/proyect1/fotografia-1'
    import PIC2 from 'ASSETS/images/proyect1/video-1'
    import PIC3 from 'ASSETS/images/proyect1/fotografia-2'
    import PIC4 from 'ASSETS/images/proyect1/fotografia-3'
    import PIC5 from 'ASSETS/images/proyect1/fotografia-4'
    import PIC6 from 'ASSETS/images/proyect1/fotografia-5'

    export default {
        setup() {
            return {
                BR, 
                AU, 
                VIDEO1, 
                PIC1, 
                PIC2, 
                PIC3, 
                PIC4, 
                PIC5, 
                PIC6 
            }
        }
    }
</script>

<style scoped lang="scss">
    .proyect1 {
        background: #000;

        &__proyect1 {
            padding-bottom: 100px;
        }

        &__content {

            &--pic {
                display: block;
                width: 100%;
                height: auto;
                min-height: 100px;
                background-size: 100% 100%;
            }
        }

    }
</style>