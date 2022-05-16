<template>
    <div class="portafolio">
       <section class="container portafolio__index">
            <div class="row d-flex justify-content-end align-items-end">
                <div class="col-12 text-end py-4 px-4 px-sm-2">
                    <p class="bb--title">
                        PORTAFOLIO
                    </p>
                </div>
                <div class="col-10 col-sm-7 px-4 px-sm-2">
                    <img :src="gif_materialized" class="img-fluid">
                </div>
            </div>
       </section>

       <section class="portafolio__product">
            <div class="portafolio__product--rheel">
                <div class="row">
                    <div @click="redirect('proyect1')" class="portafolio__product--rheel-video col-12 col-md-4 p-0">
                        <video autoplay muted loop class="portafolio__product--video">
                            <source :src="video1" type="video/mp4"/>
                        </video>

                        <div class="d-flex justify-content-center w-100 py-3">
                            <button @click="redirect('proyect1')" type="button" class="btn btn-outline-light portafolio__product--button">
                                Conoce más
                            </button>
                        </div>
                    </div>

                    <div @click="redirect('proyect3')" class="portafolio__product--rheel-video col-12 col-md-4 p-0">
                        <video autoplay muted loop class="portafolio__product--video">
                            <source :src="video2" type="video/mp4"/>
                        </video>

                        <div class="d-flex justify-content-center w-100 py-3">
                            <button @click="redirect('proyect3')" type="button" class="btn btn-outline-light portafolio__product--button">
                                Conoce más
                            </button>
                        </div>
                    </div>

                    <div @click="redirect('proyect2')" class="portafolio__product--rheel-video col-12 col-md-4 p-0">
                        <video autoplay muted loop class="portafolio__product--video">
                            <source :src="video3" type="video/mp4"/>
                        </video>

                        <div class="d-flex justify-content-center w-100 py-3">
                            <button @click="redirect('proyect2')" type="button" class="btn btn-outline-light portafolio__product--button">
                                Conoce más
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-12 text-center">
                        <button type="button" class="btn btn-outline-light portafolio__product--button">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
       </section>

       <contact />
    </div>
</template>

<script>
    import video1 from 'ASSETS/video/portafolio/circo_dragon'
    import video2 from 'ASSETS/video/portafolio/sgn'
    import video3 from 'ASSETS/video/portafolio/remax'
    import gif_materialized from 'ASSETS/gif/general/materialized-blueberry-xl'

    import contact from 'COMPONENTS/contact'

    export default {
        components: {
            'contact': contact
        },
        setup() {
            return {
                video1,
                video2,
                video3,
                gif_materialized
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

<style scoped lang="scss">
    .portafolio {
        background: #000000;

        &__index {
            padding-top: 200px;
            padding-bottom: 200px;

            &--title {
                font-family: 'Prompt';
                font-style: normal;
                font-weight: bold;
                font-size: 120px;
                line-height: 100%;
                color: #FFFFFF;
            }
        }

        &__product {
            padding-bottom: 150px;

            &--rheel {
                max-width: 100%;
                min-width: 100%;

                &-video {
                    cursor: pointer;

                    video {
                        -webkit-filter: brightness(45%);
                        -webkit-transition: all 1s ease;
                        -moz-transition: all 1s ease;
                        -o-transition: all 1s ease;
                        -ms-transition: all 1s ease;
                        transition: all 1s ease;
                    }

                    video:hover {
                        -webkit-filter: brightness(100%);
                    }
                }

                &-video:hover .portafolio__product--button {
                    display: block;
                }
            }

            &--video {
                max-width: 100%; 
                min-width: 100%;
            }

            &--button {
                display: none;
            }
        }
    }
</style>