<template>
    <div class="design">

        <section class="section__index">
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source :src="VIDEO0" type="video/mp4">
            </video>
        </section>

        <section class="design__design pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-4">
                        <span class="bb--title">
                            DISEÑO INTEGRAL
                        </span>
                    </div>
                    <div class="col-12 mt-3 mt-lg-5">
                        <span class="bb--description">
                            En <b>Blueberry</b>. no nos enfocamos solo a que se vea “bonito” sino a ayudarte a crear un sistema eficiente que a su vez logre materializar tus ideas por medio de la asesoría profesional brindada por nuestra empresa. 
                        </span>
                    </div>
                    <div class="col-12 mt-5">
                        <button @click="redirect('portafolio')" type="button" class="btn btn-outline-light p-2">
                            <b>VER MÁS DEL PORTAFOLIO</b>
                        </button>
                    </div>
                    <div class="col-12 design__design--pic mt-5">
                        <img :src="DI" class="design__design--pic-pic">
                    </div>
                </div>
            </div>
        </section>

        <section class="design__pictures">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-6 p-0">
                        <img :src="PIC1" class="design__pictures--pic" />
                    </div>
                    <div class="col-12 col-md-6 p-0">
                        <div class="row">
                            <div class="col-12">
                                 <img :src="PIC2" class="design__pictures--pic" />
                            </div>
                            <div class="col-12">
                                <img :src="PIC3" class="design__pictures--pic" />
                            </div>
                        </div>
                    </div>

                    <div class="col-12 p-0">
                        <img :src="PIC4" class="design__pictures--pic" />
                    </div>


                    <div class="col-12 col-md-6 p-0">
                        <div class="row">
                            <div class="col-12">
                                <img :src="PIC5" class="design__pictures--pic" />
                            </div>
                            <div class="col-12">
                                <img :src="PIC6" class="design__pictures--pic" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 p-0">
                        <img :src="PIC7" class="design__pictures--pic" />
                    </div>

                    <div class="col-12 p-0">
                        <img :src="PIC8" class="design__pictures--pic" />
                    </div>

                    <div class="col-12 col-md-6">
                        <img :src="PIC9" class="design__pictures--pic" />
                    </div>
                    <div class="col-12 col-md-6 p-0">
                        <div class="row">
                            <div class="col-12 p-0">
                                <img :src="PIC10" class="design__pictures--pic" />
                            </div>
                            <div class="col-12 p-0">
                                <img :src="PIC11" class="design__pictures--pic" />
                            </div>
                        </div>
                    </div>

                    <div class="col-12 p-0">
                        <img :src="PIC12" class="design__pictures--pic" />
                    </div>
                </div>
            </div>
        </section>

        <contact></contact>
    </div>
</template>

<script>
    // Workflow
    import DI from 'ASSETS/gif/general/workflow/diseño'

    import VIDEO0 from 'ASSETS/video/design/video_main'

    import PIC1 from 'ASSETS/images/design/project-1.png'
    import PIC2 from 'ASSETS/images/design/project-2.png'
    import PIC3 from 'ASSETS/images/design/project-3.png'
    import PIC4 from 'ASSETS/images/design/project-4.png'
    import PIC5 from 'ASSETS/images/design/project-5.png'
    import PIC6 from 'ASSETS/images/design/project-6.png'
    import PIC7 from 'ASSETS/images/design/project-7.png'
    import PIC8 from 'ASSETS/images/design/project-8.png'
    import PIC9 from 'ASSETS/images/design/project-9.png'
    import PIC10 from 'ASSETS/images/design/project-10.png'
    import PIC11 from 'ASSETS/images/design/project-11.png'
    import PIC12 from 'ASSETS/images/design/project-12.png'

    import contact from 'COMPONENTS/contact'

    export default {
        components: {
            'contact': contact
        },
        setup() {
            return {
                DI,
                VIDEO0,
                PIC1,
                PIC2,
                PIC3,
                PIC4,
                PIC5,
                PIC6,
                PIC7,
                PIC8,
                PIC9,
                PIC10,
                PIC11,
                PIC12
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
    .design {

        background: #000;

        &__index {
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

        &__design {
            padding-bottom: 100px;

            &--title {
                font-family: 'Prompt';
                font-style: normal;
                font-weight: bold;
                font-size: 100px;
                line-height: 100%;
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

            &--pic {
                display: flex;
                justify-content: end;
                
                &--pic {
                    
                }
            }
        }

        &__pictures {
            padding-bottom: 100px;

            &--pic {
                display: block;
                width: 100%;
                height: auto;
                min-height: 100px;
                background-size: 100% 100%;
                //border: 1px solid red;
            }

            // &--pic {
            //     background-size: 100% 100% 
            // }
        }
    }
</style>