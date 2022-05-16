 <template>
    <div class="proyect3">
        <section class="section__index">
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source :src="VIDEO1" type="video/mp4">
            </video>
        </section>

        <section class="proyect3__proyect3 container pt-5">
            <div class="row">
                <div class="col-12 mb-5 mb-lg-5">
                    <span class="bb--title">
                        SGN SPECIAL <br> NUTRITION GROUP
                    </span>
                </div>
                <div class="col-12 pt-3 pt-lg-5">
                    <span class="bb--description">
                        Compañía especializada en el desarrollo de multivitamínicos en gelatina blanda
                    </span>
                </div>
            </div>
        </section>

        <section class="proyect3__content pb-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-0">
                        <img :src="PIC1" class="proyect3__content--pic" />
                    </div>

                    <div class="col-12 p-0">
                        <img :src="PIC2" class="proyect3__content--pic" />
                    </div>
                </div>
            </div>
        </section>

        <section class="proyect3__proyect3">
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
                        <img :src="BR" alt="branding" class="branding__index--image img-fluid mx-md-4">
                    </div>
                    <div class="col-6 col-sm-6 col-lg-3 mb-5 d-flex justify-content-center align-items-center">
                        <img :src="DW" alt="branding" class="branding__index--image img-fluid mx-md-4">
                    </div>
                    <div class="col-6 col-sm-6 col-lg-3 mb-5 d-flex justify-content-center align-items-center">
                        <img :src="DI" alt="branding" class="branding__index--image img-fluid mx-md-4">
                    </div>
                    <div class="col-6 col-sm-6 col-lg-3 mb-5 d-flex justify-content-center align-items-center">
                        <img :src="AU" alt="branding" class="branding__index--image img-fluid mx-md-4">
                    </div>
                </div>
            </div>
        </section>

        <section class="proyect3__content pb-5">
            <div class="container-fluid">

                <div class="row py-5 py-md-0">
                    <div class="col-12 col-md-7 p-0">
                        <img :src="PIC3" class="proyect3__content--pic pb-4 pb-md-0" />
                    </div>
                    <div class="col-12 col-md-5 d-flex justify-content-center align-items-center p-0">
                        <div style="max-width: 500px;" class="px-3">
                            <p class="bb--card-content-description">
                                Servicios ofrecidos: <br><br>

                                Consultoría <br>
                                Branding <br>
                                Web <br>
                                Diseño Integral <br>
                                Foto y Video <br>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row py-5 py-md-0">
                    <div class="col-12 col-md-5 d-flex justify-content-center align-items-center order-1 order-md-0 p-0">
                        <div style="max-width: 450px;" class="px-3">
                            <p class="bb--card-content-description">
                                Logramos amplificar de manera atractiva cada uno de los productos que contienen increíbles beneficios para la salud y que permiten complementar nuestra alimentación a través de sus micronutrientes.
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-7 order-0 order-md-1 p-0">
                        <img :src="PIC4" class="proyect3__content--pic pb-4 pb-md-0" />
                    </div>
                </div>

                <div class="row py-5 py-md-0">
                    <div class="col-12 col-md-7 p-0">
                        <img :src="PIC5" class="proyect3__content--pic pb-4 pb-md-0" />
                    </div>
                    <div class="col-12 col-md-5  d-flex justify-content-center align-items-center p-0">
                        <div style="max-width: 500px;" class="px-3">
                            <p class="bb--card-content-description">
                                Creamos un sinfín de materiales audiovisuales y de diseño integral para la ejecución de sus estrategias publicitarias y comerciales a nivel nacional.
                            </p>
                        </div>
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
    import PIC1 from 'ASSETS/images/proyect3/imagen1'
    import PIC2 from 'ASSETS/images/proyect3/imagen2'
    import PIC3 from 'ASSETS/images/proyect3/imagen3'
    import PIC4 from 'ASSETS/images/proyect3/imagen4'
    import PIC5 from 'ASSETS/images/proyect3/imagen5'

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
                PIC5 
            }
        }
    }
</script>

<style scoped lang="scss">
    .proyect3 {
        background: #000;

        &__proyect3 {
            padding-bottom: 100px;
        }

        &__content {
            // padding-bottom: 200px;

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