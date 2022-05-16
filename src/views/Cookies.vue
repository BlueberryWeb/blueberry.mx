<template>
    <div class="terms">
        <section class="container terms__index">
            <span class="bb--title pb-4">
                Políticas
            </span>

            <span class="terms__index--description pb-4">
                Fecha de entrada en vigor: 1 de enero de 2019.
            </span>

            <span class="terms__index--description pt-4 pb-3">
                En Blueberry. creemos que hay que ser claros sobre el modo en que recabamos y utilizamos tus datos. Para ofrecer un mayor nivel de transparencia, esta Política proporciona información detallada sobre cómo y cuándo utilizamos cookies.
            </span>

            <span class="terms__index--description pb-5">
                Esta Política de cookies se aplica a cualquier producto o servicio de <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> asociado a esta política o que la incorpore por referencia.
            </span>

            <span class="terms__index--description pt-4 pb-3">
                ¿Utiliza <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> cookies?
            </span>

            <span class="terms__index--description pb-5">
                Sí. Utilizamos cookies y otras tecnologías para garantizar que todos los usuarios de <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> tengan la mejor experiencia posible. Las cookies nos ayudan a mantener tu cuenta segura. Si sigues utilizando nuestros servicios, estarás dando tu consentimiento para el uso de las cookies y de otras tecnologías similares para los fines que se describen en esta Política.
            </span>
            

            <span class="terms__index--description pt-4 pb-3">
                ¿Qué es una cookie?
            </span>

            <span class="terms__index--description pb-5">
                Una cookie es un pequeño archivo colocado en tu dispositivo electrónico que habilita las funcionalidades de <span class="bold">ESTUDIO ADIUTARE SA DE CV</span>. Por ejemplo, las cookies nos permiten identificar tu dispositivo, ofrecerte acceso seguro a <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> y a nuestros sitios en general, e incluso nos ayudan a saber si alguien intenta acceder a tu cuenta desde otro dispositivo. Las cookies también te permiten compartir contenidos con facilidad en <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> y nos ayudan a mostrarte anuncios relevantes para ti.
            </span>

            <span class="terms__index--description pt-4 pb-3">
                ¿Cuándo utiliza <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> cookies?
            </span>

            <span class="terms__index--description pb-5">
                Utilizamos cookies en nuestros sitios web (<span class="bold">www.blueberry.mx</span>) y en las aplicaciones móviles. Cualquier navegador que visite estos sitios web recibirá cookies nuestras. También colocamos cookies en tu navegador cuando visitas sitios que no son de <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> pero que albergan nuestros complementos (por ejemplo, el botón «Compartir» <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> o etiquetas).
            </span>

            <span class="terms__index--description pt-4 pb-3">
                ¿Qué tipo de cookies utiliza <span class="bold">ESTUDIO ADIUTARE SA DE CV</span>?
            </span>

            <span class="terms__index--description pb-5">
                Utilizamos dos tipos de cookies: persistentes y de sesión. Una cookie persistente nos ayuda a reconocerte como usuario existente para que te resulte más sencillo volver a <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> o interactuar con nuestros servicios sin necesidad de iniciar sesión de nuevo. Una vez que hayas iniciado sesión, la cookie persistente permanecerá en tu navegador y <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> la leerá cuando regreses a alguno de nuestros sitios web o a sitios de socios que utilizan nuestros servicios (como, por ejemplo, los botones de compartir o de solicitar de empleo). Las cookies de sesión solo duran lo que se mantenga la sesión (normalmente, lo que dure la visita que estés realizando en ese momento a un sitio web o la sesión con el navegador).
            </span>

            <span class="terms__index--description pt-4 pb-3">
                ¿Para qué se usan las cookies?
            </span>

            <span class="terms__index--description pb-5">
                Las cookies pueden utilizarse para reconocerte cuando visitas <span class="bold">ESTUDIO ADIUTARE SA DE CV</span>, recordar tus preferencias y ofrecerte una experiencia personalizada basada en tu configuración. Las cookies también permiten que tus interacciones en <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> sean más rápidas y seguras. Además, las cookies nos permiten mostrarte publicidad dentro y fuera de los sitios web <span class="bold">ESTUDIO ADIUTARE SA DE CV</span>, y te ofrecen funcionalidades personalizadas a través de los complementos de <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> como nuestro botón «Compartir».
            </span>
            
        </section>
    </div>
</template>

<script>

    export default {
        setup() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">
    .terms {
        background: #000;
        padding-top: 150px;

        &__index {
            padding-bottom: 100px;

            &--description {
                font-family: 'Prompt';
                font-style: normal;
                font-weight: normal;
                font-size: 23px;
                line-height: 120%;
                display: flex;
                align-items: center;
                color: #FFFFFF;

                .bold {
                    font-weight: bold;
                    display: contents;
                }
            }

            // Extra Small devices (landscape phones, 200px and up)
            @media (min-width: 200px) {
                &--description {
                    font-size: 18px;
                }
            }

            // Small devices (landscape phones, 576px and up)
            @media (min-width: 576px) {
                &--description {
                    font-size: 20px;
                }
            }

            // Medium devices (tablets, 768px and up)
            @media (min-width: 768px) {
                &--description {
                    font-size: 21px;
                }
            }

            // Large devices (desktops, 992px and up)
            @media (min-width: 992px) {
                &--description {
                    font-size: 22px;
                }
            }

            // Extra large devices (large desktops, 1200px and up)
            @media (min-width: 1200px) {
                &--description {
                    font-size: 23px;
                }
            }
        }
    }
</style>