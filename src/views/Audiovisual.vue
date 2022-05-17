    <template>
    <div class="audiovisual">

        <section class="audiovisual__index">
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-4">
                        <span class="bb--title">
                            AUDIOVISUALES
                        </span>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-9 mt-5">
                        <span class="bb--description">
                            Creamos contenido audiovisual, con videos personalizados que logren capturar el alma, esencia y las cualidades únicas de tu marca. 
                            
                        </span> <br>

                        <button @click="redirect('portafolio')" type="button" class="btn btn-outline-light my-5 p-2 px-3">
                            <b>VER MÁS DEL PORTAFOLIO</b>
                        </button>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-3 d-flex justify-content-center align-items-center">
                        <img :src="AU" alt="branding" class="branding__index--image img-fluid mx-md-4">
                    </div>
                </div>
            </div>
        </section>

        <section class="audiovisual__reel">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mt-5 p-0">
                        <img :src="PIC0_1" class="audiovisual__reel--pic" />

                        <div @click="onOpen('https://player.vimeo.com/video/613815894')" class="audiovisual__reel--overlay-image">
                            <img :src="play" alt="play" class="video-btn audiovisual__reel--overlay-image--play"> 
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="audiovisual__videos">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 audiovisual__videos__col pb-5">
                        <div class="audiovisual__videos__col_divimg">
                            <img :src="PIC1" class="audiovisual__videos__col--pic mb-5" />    
                        </div>

                        <div @click="onOpen('https://player.vimeo.com/video/637164874')" class="audiovisual__videos__col--overlay-image">
                            <img :src="play" alt="play" class="video-btn audiovisual__videos__col--overlay-image--play"> 
                        </div>

                        <p class="bb--video-title">
                            Great Experience Guaranteed
                        </p>
                    </div>

                    <div class="col-12 col-md-6 audiovisual__videos__col pb-5">
                        <div class="audiovisual__videos__col_divimg">
                            <img :src="PIC2" class="audiovisual__videos__col--pic mb-5" />    
                        </div>
                        

                        <div @click="onOpen('https://player.vimeo.com/video/637159104')" class="audiovisual__videos__col--overlay-image">
                            <img :src="play" alt="play" class="video-btn audiovisual__videos__col--overlay-image--play"> 
                        </div>

                        <p class="bb--video-title">
                            Mercado Premier
                        </p>

                        <!-- <p class="audiovisual__videos__col--description">
                            Título del video 
                        </p> -->
                    </div>

                    <div class="col-12 col-md-6 audiovisual__videos__col pb-5">
                        <div class="audiovisual__videos__col_divimg">
                            <img :src="PIC3" class="audiovisual__videos__col--pic mb-5" />    
                        </div>

                        <div @click="onOpen('https://player.vimeo.com/video/637231043')" class="audiovisual__videos__col--overlay-image">
                            <img :src="play" alt="play" class="video-btn audiovisual__videos__col--overlay-image--play"> 
                        </div>

                        <p class="bb--video-title">
                            Premier Nuts
                        </p>
                    </div>

                    <div class="col-12 col-md-6 audiovisual__videos__col pb-5">
                        <div class="audiovisual__videos__col_divimg">
                            <img :src="PIC4" class="audiovisual__videos__col--pic mb-5" />    
                        </div>

                        <div @click="onOpen('https://player.vimeo.com/video/613875548')" class="audiovisual__videos__col--overlay-image">
                            <img :src="play" alt="play" class="video-btn audiovisual__videos__col--overlay-image--play"> 
                        </div>

                        <p class="bb--video-title">
                            REMAX
                        </p>
                    </div>

                    <div class="col-12 col-md-6 audiovisual__videos__col pb-5">
                        <div class="audiovisual__videos__col_divimg">
                            <img :src="PIC5" class="audiovisual__videos__col--pic mb-5" />    
                        </div>

                        <div @click="onOpen('https://player.vimeo.com/video/613967712')" class="audiovisual__videos__col--overlay-image">
                            <img :src="play" alt="play" class="video-btn audiovisual__videos__col--overlay-image--play"> 
                        </div>

                        <p class="bb--video-title">
                            Baufaktory, Calidad Contract
                        </p>
                    </div>

                    <div class="col-12 col-md-6 audiovisual__videos__col pb-5">
                        <div class="audiovisual__videos__col_divimg">
                            <img :src="PIC6" class="audiovisual__videos__col--pic mb-5" />    
                        </div>

                        <div @click="onOpen('https://player.vimeo.com/video/613888973')" class="audiovisual__videos__col--overlay-image">
                            <img :src="play" alt="play" class="video-btn audiovisual__videos__col--overlay-image--play"> 
                        </div>

                        <p class="bb--video-title">
                            Hacienda Tequila El Patrón
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <contact></contact>

        <!-- Modal -->
        <GDialog v-model="value" max-width="850">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    <div class="modal-body">
                        <!-- 16:9 aspect ratio -->
                        <div class="ratio ratio-16x9">
                            
                            <iframe class="embed-responsive-item" 
                                :src="src_video" 
                                id="video" allowscriptaccess="always" allow="autoplay"
                                v-if="value">
                            </iframe>

                        </div>
                    </div>
                </div>
            </div>
        </GDialog>

    </div>
</template>

<script>
    import $ from 'jquery'

    // Workflow
    import AU from 'ASSETS/gif/general/workflow/audiovisual'

    import PIC0_1 from 'ASSETS/images/audiovisual/thumb_video_reel'

    import play from 'ASSETS/images/play-button'
    import PIC1 from 'ASSETS/images/audiovisual/01-geg'
    import PIC2 from 'ASSETS/images/audiovisual/02-mercado'
    import PIC3 from 'ASSETS/images/audiovisual/03-nuts'
    import PIC4 from 'ASSETS/images/audiovisual/04-remax'
    import PIC5 from 'ASSETS/images/audiovisual/05-baufaktory'
    import PIC6 from 'ASSETS/images/audiovisual/06-tequila-patron'

    import contact from 'COMPONENTS/contact'
    import "gitart-vue-dialog/dist/style.css";
    import { GDialog, plugin } from "gitart-vue-dialog";

    import { ref } from 'vue'
    import { onMounted } from 'vue'

    export default {
        components: {
            'contact': contact,
            GDialog
        },
        setup() {
            const value = ref(false)
            let src_video = ref('https://player.vimeo.com/video/589977244')
            
            const onOpen = (test) => {
                value.value = true
                src_video.value = test + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
            }

            return {
                AU,
                PIC0_1,
                play,
                PIC1,
                PIC2,
                PIC3,
                PIC4,
                PIC5,
                PIC6,
                value,
                src_video,
                onOpen
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
    .audiovisual {

        background: #000;

        &__index {
            padding-top: 200px;
            padding-bottom: 50px;

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
        }

        &__reel {
            
            padding-bottom: 100px;

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

            &--pic {
                display: block;
                width: 100%;
                height: auto;
                min-height: 100px;
                background-size: 100% 100%;
                // border: 1px solid red;
            }

            &--overlay-image {
                position: absolute;
                height: 100%;
                width: 100%;
                background-color: transparent;
                // border: 1px solid red;

                &--play {
                    color: black;
                    position: absolute;
                    cursor: pointer;
                    z-index: 2;
                }
            }

            // Extra Small devices (landscape phones, 200px and up)
            @media (min-width: 200px) {
                &--overlay-image {
                    &--play {
                        // border: 1px solid green;
                        width: 80px;
                        transform: translate(38vw, -13vh) !important;
                        -ms-transform: translate(38vw, -13vh) !important;
                    }
                }
            }

            // Extra Small devices (landscape phones, 200px and up)
            @media (min-width: 350px) {
                &--overlay-image {
                    &--play {
                        // border: 1px solid blue;
                        width: 100px;
                        transform: translate(40vw, -18vh) !important;
                        -ms-transform: translate(40vw, -18vh) !important;
                    }
                }
            }

            // Small devices (landscape phones, 576px and up)
            @media (min-width: 540px) {
                &--overlay-image {
                    &--play {
                        // border: 1px solid yellow;
                        width: 120px;
                        transform: translate(42vw, -24vh) !important;
                        -ms-transform: translate(42vw, -24vh) !important;
                    }
                }
            }

            // Medium devices (tablets, 768px and up)
            @media (min-width: 768px) {
                &--overlay-image {
                    &--play {
                        // border: 1px solid red;
                        width: 140px;
                        transform: translate(44vw, -32vh) !important;
                        -ms-transform: translate(44vw, -32vh) !important;
                    }
                }
            }

            // Large devices (desktops, 992px and up)
            @media (min-width: 992px) {
                &--overlay-image {
                    &--play {
                        // border: 1px solid blue;
                        width: 160px;
                        transform: translate(44vw, -40vh) !important;
                        -ms-transform: translate(44vw, -40vh) !important;
                    }
                }
            }

            // Extra large devices (large desktops, 1200px and up)
            @media (min-width: 1200px) {
                &--overlay-image {
                    &--play {
                        // border: 1px solid green;
                        transform: translate(45vw, -43vh) !important;
                        -ms-transform: translate(45vw, -43vh) !important;
                    }
                }
            }

            // Extra large devices (large desktops, 1200px and up)
            @media (min-width: 1400px) {
                &--overlay-image {
                    &--play {
                        // border: 1px solid yellow;
                        transform: translate(45vw, -290%) !important;
                        -ms-transform: translate(45vw, -290%) !important;
                    }
                }
            }
        }

        &__videos {
            padding-bottom: 100px;


            &__col {
                margin-bottom: 3.5rem !important;
                text-align: center;

                &_divimg {
                    display: flex;
                    justify-content: center;

                    img {
                        max-width: 320px;
                    }
                }

                &--overlay-image {
                    position: absolute;
                    height: 100%;
                    widows: 100%;
                    background-color: transparent;

                    &--play {
                        color: black;
                        position: absolute;
                        transform: translate(130%, -230%);
                        -ms-transform: translate(130%, -230%);
                        cursor: pointer;
                        z-index: 2;
                    }
                }

                // Extra Small devices (landscape phones, 200px and up)
                @media (min-width: 200px) {
                    &--overlay-image {
                        &--play {
                            width: 100px;
                            transform: translate(95%, -230%) !important;
                            -ms-transform: translate(95%, -230%) !important;
                        }
                    }
                }

                // Extra Small devices (landscape phones, 200px and up)
                @media (min-width: 350px) {
                    &--overlay-image {
                        &--play {
                            width: 120px;
                            transform: translate(33vw, -210%) !important;
                            -ms-transform: translate(33vw, -210%) !important;
                        }
                    }
                }

                // Small devices (landscape phones, 576px and up)
                @media (min-width: 540px) {
                    &--overlay-image {
                        &--play {
                            width: 140px;
                            transform: translate(135%, -200%) !important;
                            -ms-transform: translate(135%, -240%) !important;
                        }
                    }
                }

                // Medium devices (tablets, 768px and up)
                @media (min-width: 768px) {
                    &_divimg {
                        display: block;

                        img {
                            max-width: 100%;
                        }
                    }

                    &--overlay-image {
                        &--play {
                            width: 140px;
                            transform: translate(70%, -190%) !important;
                            -ms-transform: translate(70%, -190%) !important;
                        }
                    }
                }

                // Large devices (desktops, 992px and up)
                @media (min-width: 992px) {
                    &--overlay-image {
                        &--play {
                            width: 160px;
                            transform: translate(88%, -205%) !important;
                            -ms-transform: translate(88%, -205%) !important;
                        }
                    }
                }

                // Extra large devices (large desktops, 1200px and up)
                @media (min-width: 1200px) {
                    &--overlay-image {
                        &--play {
                            transform: translate(120%, -230%) !important;
                            -ms-transform: translate(120%, -230%) !important;
                        }
                    }
                }

                // Extra large devices (large desktops, 1200px and up)
                @media (min-width: 1400px) {
                    &--overlay-image {
                        &--play {
                            transform: translate(145%, -255%) !important;
                            -ms-transform: translate(130%, -230%) !important;
                        }
                    }
                }

                &--pic {
                    display: block;
                    width: 100%;
                    height: auto;
                    min-height: 100px;
                    background-size: 100% 100%;
                    // border: 1px solid red;
                }

                &--title {
                    font-family: 'Prompt';
                    font-style: normal;
                    font-weight: bold;
                    font-size: 34px;
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
                }

            }

            // Medium devices (tablets, 768px and up)
            @media (min-width: 768px) {
                &__col {
                    text-align: left !important;
                }
            }
        }
    }
</style>