<template>
    <div class="privacy_notice">
        <section class="container privacy_notice__index">
            <span class="bb--title pb-5">
                Aviso de Privacidad
            </span>

            <span class="privacy_notice__index--description pb-5">
                El presente documento constituye el Aviso de Privacidad para efectos de lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (la “LFPDP”) y las disposiciones que emanan de ella o se relacionan con la misma. Este Aviso de Privacidad (en lo sucesivo referido como “Aviso”) aplica a la información personal recopilada sobre el Titular por <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> en su carácter de Responsable. El presente Aviso tiene por objeto la protección de tus datos personales, mediante su tratamiento legítimo, controlado e informado, a efecto de garantizar su privacidad, así como tu derecho a la autodeterminación informativa. Conforme al artículo 3, fracción V, de la Ley, se entiende por Datos Personales: Cualquier información concerniente a una persona física identificada o identificable de conformidad a lo dispuesto por la fracción I del artículo 16 de la Ley, será el Responsable de tu información personal (Datos Personales).
            </span>

            <span class="privacy_notice__index--description pb-4">
                ¿Qué información recopilamos?
            </span>

            <span class="privacy_notice__index--description pb-5">
                El Responsable recolecta información que puede identificarle de manera razonable, por ejemplo, a título enunciativo más no limitativo: su nombre y apellidos; fecha de nacimiento; dirección de correo electrónico, información general de su perfil.
            </span>

            <span class="privacy_notice__index--description pb-4">
                ¿Cómo usamos o compartimos la información que recopilamos?
            </span>

            <span class="privacy_notice__index--description pb-5">
                Al enviar vía correo electrónico tus datos personales a los diferentes representantes de <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> y/o completar la solicitud en línea que aparece en la página, aceptas y autorizas a <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> utilizar y tratar de forma automatizada tus datos personales e información suministrados, los cuales formarán parte de nuestra base de datos con la finalidad de usarlos en forma enunciativa, más no limitativa para: identificarte, comunicarte, contactarte, enviarte información, actualizar nuestra base de datos, y promocionar todo el contenido artístico generado por <span class="bold">ESTUDIO ADIUTARE SA DE CV</span>. <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> como responsable del tratamiento de tus datos personales, está obligado a cumplir con los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad tutelados en la Ley; por tal motivo con fundamento en los artículos 13 y 14 de la Ley <span class="bold">ESTUDIO ADIUTARE SA DE CV</span> se compromete a guardar estricta confidencialidad de tus datos personales, así como a mantener las medidas de seguridad administrativas, técnicas y físicas que permitan protegerlos contra cualquier daño, pérdida, alteración, acceso o tratamiento no autorizado.
            </span>
            

            <span class="privacy_notice__index--description pb-4">
                ¿Cómo contactar a nuestro Departamento de Datos Personales?
            </span>

            <span class="privacy_notice__index--description pb-5">
                Para cualquier comunicación acerca de nuestro Aviso de Privacidad, por favor contacte a nuestro Departamento de Datos Personales: <span class="bold">hello@blueberry.mx</span>
            </span>

            <span class="privacy_notice__index--description pb-4">
                ¿Cómo ejercer sus derechos ARCO?
            </span>

            <span class="privacy_notice__index--description pb-4">
                En términos de lo establecido por el artículo 22 de la Ley, tienes derecho en cualquier momento a ejercer tus derechos de acceso, rectificación, cancelación y oposición al tratamiento de tus datos personales, mediante la solicitud vía correo electrónico dirigido a <span class="bold">hello@blueberry.mx</span> para asuntos relacionados con la Base de datos. En cumplimiento al artículo 29 de la Ley, dicha solicitud deberá contener los siguientes datos: a) Tu nombre y domicilio u otro medio para comunicarte la respuesta a tu solicitud; b) Los documentos que acrediten tu identidad o, en su caso, la representación legal de la persona que realiza la solicitud a tu nombre; c) La descripción clara y precisa de los datos personales respecto de los que buscas ejercer alguno de los derechos mencionados en el párrafo anterior, y d) Cualquier otro elemento o documento que facilite la localización de tus datos personales. En caso de solicitar la rectificación de datos personales, adicionalmente deberás indicar las modificaciones a realizarse y aportar la documentación que sustente tu petición. La respuesta a tu solicitud se te comunicará en un plazo de veinte días hábiles, contados desde la fecha en que se recibió, pudiendo ampliarse a veinte días más en los casos que así lo establezcan la Ley; a efecto de que, de resultar procedente, se lleven a cabo las medidas adoptadas para cumplir con tu solicitud, mismas que se llevarán a cabo dentro de los quince días hábiles siguientes a la fecha en que se comunique la respuesta. Cambios al Aviso de Privacidad
            </span>

            <span class="privacy_notice__index--description pb-5">
                <span class="bold">hello@blueberry.mx</span> se reserva el derecho de actualizar periódicamente el presente Aviso para reflejar los cambios en nuestras prácticas de información. Es responsabilidad del Titular revisar periódicamente el contenido del Aviso en donde se publicarán los cambios realizados conjuntamente con la fecha de la última actualización.
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
    .privacy_notice {
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