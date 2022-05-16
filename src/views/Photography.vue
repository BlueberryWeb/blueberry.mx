<template>
    <div class="photo">
        <section class="section__index">
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source :src="video_main" type="video/mp4">
            </video>
        </section>

        <section class="photo__photo">
            <div class="container">
                <div class="row h-100">
                    <div class="col-12 h-100 pt-4">
                        <div class="bb--title text-end h-100 pt-5">
                            <span>
                                FOTOGRAFÍA
                            </span>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 order-1 order-md-0">
                        <div class="photo__photo--video-container">
                            <video autoplay muted loop >
                                <source :src="VIDEO2" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 order-0 order-md-1 text-end pt-3 pt-lg-5">
                        <div class="bb--description pt-3 pt-lg-5">
                            <div class="pt-3 pt-lg-5">
                                <span>
                                    En Blueberry. no nos enfocamos solo a que se vea “bonito” sino a ayudarte a crear un sistema eficiente que a su vez logre materializar tus ideas por medio de la asesoría profesional brindada por nuestra empresa. 
                                </span>    
                            </div>
                        </div>
                        <div class="photo__photo--button">
                            <button @click="redirect('portafolio')" type="button" class="btn btn-outline-light">
                                VER MÁS DEL PORTAFOLIO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="photo__high">
            <div class="container">
                <div class="row h-100">
                    <div class="col-12">
                        <div class="bb--card-content-title pb-3 pb-lg-5">
                            <span>
                                ALTA DEFINICIÓN, GRAN DETALLE, EXPERIENCIA VÍVIDA
                            </span>
                        </div>
                    </div>
                    <div class="col-12 pt-3 pt-lg-5">
                        <div class="bb--card-content-description">
                            <span>
                                La fotografía es considerada arte, y para el arte contemporáneo la idea que transmite la imagen es mucho más trascendental que la propia obra.
                            </span>
                            <br/>
                            <br/>
                            <span>
                                Ya que como dicen, una foto dice más que mil palabras.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section__index photo__hd">
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source :src="VIDEO3" type="video/mp4">
            </video>
        </section>

        <contact></contact>
    </div>
</template>

<script>
    import video_main from 'ASSETS/video/photo/video_main'
    import VIDEO2 from 'ASSETS/video/photo/presentation'
    import VIDEO3 from 'ASSETS/video/photo/hd'

    import contact from 'COMPONENTS/contact'

    export default {
        components: {
            'contact': contact
        },
        setup() {
            return {
                video_main,
                VIDEO2,
                VIDEO3
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
    .photo {
        background: #000;

        &__photo {
            padding-bottom: 100px;

            &--title {
                position: relative;
                position: relative;
                padding-top: 10%;

                span {
                    font-family: 'Prompt';
                    font-style: normal;
                    font-weight: bold;
                    font-size: 120px;
                    line-height: 38px;
                    color: #FFFFFF;

                }
            }

            &--description {    
                padding-top: 190px;

                // span {
                //     font-family: Fira Sans;
                //     font-style: normal;
                //     font-weight: normal;
                //     font-size: 15px;
                //     line-height: 26px;
                //     color: #FFFFFF;
                // }
            }

            &--button {

                padding-top: 50px;

                button {
                    padding: 10px 30px;
                }
            }

            &--video-container {
                
                padding-top: 0px;
                border-radius: 20px;
                overflow: hidden;

                video {
                    position: relative;
                    height: 100%;
                    max-width: 100%;
                    min-width: 100%;
                    border-radius: 19px;
                }
            }
        }

        &__high {

            &--title {
                span {
                    font-family: 'Prompt';
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 38px;
                    color: #FFFFFF;

                }
            }

            &--description {
                padding-top: 2em;

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

        &__hd {
            padding-bottom: 120px;
        }
    }
</style>