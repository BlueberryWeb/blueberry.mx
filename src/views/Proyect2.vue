<template>
    <div class="proyect2">
        <section class="section__index">
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source :src="VIDEO1" type="video/mp4">
            </video>
        </section>

        <section class="proyect2__proyect2 container pt-5">
            <div class="row">
                <div class="col-12 mb-5 mb-lg-5">
                    <span class="bb--title">
                        REMAX <br> NEW BEGINNING 
                    </span>
                </div>
            </div>
        </section>

        <section class="proyect2__content pb-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 pb-5 pb-md-0 p-0">
                        <img :src="PIC1" class="proyect2__content--pic" />
                    </div>

                    <div class="row py-5 py-md-0 p-0 m-0">
                        <div class="col-12 col-md-7 p-0">
                            <img :src="PIC2" class="proyect2__content--pic pb-4 pb-md-0" />
                        </div>
                        <div class="col-12 col-md-5 d-flex justify-content-center align-items-center p-0">
                            <div style="max-width: 500px;" class="px-3">
                                <p class="bb--card-content-description">
                                    Una compañía enfocada en encontrar el lugar perfecto para vivir, Los Cabos México. 
                                    <br><br>
                                    Bajo una extraordinaria experiencia logramos capturar momentos y espacios únicos dentro de México. 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="row py-5 py-md-0 p-0 m-0">
                        <div class="col-12 col-md-5 d-flex justify-content-center align-items-center order-1 order-md-0 p-0">
                            <div style="max-width: 450px;" class="px-3">
                                <p class="bb--card-content-description">
                                    Cada lugar, cada rincón de Baja California Sur encapsulados en armonía a través de videos y fotografías que te invitan a desear estar en este gran lugar.
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-md-7 order-0 order-md-1 p-0">
                            <img :src="PIC3" class="proyect2__content--pic  pb-4 pb-md-0" />
                        </div>
                    </div>


                    

                    <div class="col-12 p-0">
                        <img :src="PIC4" class="proyect2__content--pic" />
                    </div>
                </div>
            </div>
        </section>

        <section class="proyect2__proyect2">
            <div class="container">
                <div class="row mt-5 mb-0 mb-md-5">
                    <div class="col-12">
                        <span class="bb--title">
                            WORKFLOW
                        </span>
                    </div>
                </div>
                <div class="row d-flex justify-content-center align-items-center pt-5">
                    <div class="col-6 col-sm-6 col-lg-3 mb-5 d-flex justify-content-center align-items-center">
                        <img :src="DW" alt="branding" class="branding__index--image img-fluid mx-md-4">
                    </div>
                    <div class="col-6 col-sm-6 col-lg-3 mb-5 d-flex justify-content-center align-items-center">
                        <img :src="DI" alt="branding" class="branding__index--image img-fluid mx-md-4">
                    </div>
                    <div class="col-6 col-sm-6 col-lg-3 mb-5 d-flex justify-content-center align-items-center">
                        <img :src="AU" alt="branding" class="branding__index--image img-fluid mx-md-4">
                    </div>
                    <div class="col-6 col-sm-6 col-lg-3 mb-5 d-flex justify-content-center align-items-center">
                        <img :src="BR" alt="branding" class="branding__index--image img-fluid mx-md-4">
                    </div>
                </div>
            </div>
        </section>

        <section class="proyect2__proyect2">
            <div class="container">
                <div class="row px-4 mb-0 mb-md-5">
                    <div class="col-12 col-md-5 d-flex justify-content-center align-items-center p-0">
                        <div style="max-width: 400px;">
                            <p class="bb--description">
                                Servicios ofrecidos: <br><br>

                                Consultoría, Web, <br>
                                Diseño Integral <br>
                                Foto, Video <br>
                                Desarrollo de Sistema CRM personalizado. <br>
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-7 p-0">
                        <img :src="PIC5" class="proyect2__content--pic" />
                    </div>
                </div>
                <div class="row px-4 mb-5">
                    <div class="col-12 mt-5 pt-0 pt-md-5 p-0">
                        <p class="bb--description">
                            Hemos consolidado un sistema de gestión de clientes a través de un CRM personalizado que le ha permitido llevar una gestión dinámica, organizada y sistematizada con el que se ha logrado el aumento de ventas gracias al extraordinario manejo digital de seguimiento de clientes. 
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="proyect2__content pb-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mt-5 p-0">
                        <img :src="PIC6" class="proyect2__content--pic" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    // workflow gifs
    import BR from 'ASSETS/gif/general/workflow/branding'
    import DI from 'ASSETS/gif/general/workflow/diseño'
    import AU from 'ASSETS/gif/general/workflow/audiovisual'
    import DW from 'ASSETS/gif/general/workflow/desarrollo'

    import VIDEO1 from 'ASSETS/video/photo/video_main'
    import PIC1 from 'ASSETS/images/proyect2/imagen1'
    import PIC2 from 'ASSETS/images/proyect2/imagen2'
    import PIC3 from 'ASSETS/images/proyect2/imagen3'
    import PIC4 from 'ASSETS/images/proyect2/imagen4'
    import PIC5 from 'ASSETS/images/proyect2/imagen5'
    import PIC6 from 'ASSETS/images/proyect2/imagen6'

    export default {
        setup() {
            return {
                BR, 
                DI, 
                AU, 
                DW, 
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
    .proyect2 {
        background: #000;

        &__proyect2 {
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