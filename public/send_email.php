<?php
ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require './PHPMailer/vendor/autoload.php';

$data = json_decode(file_get_contents('php://input'), true);

$name = $data["name"];
$email = $data["email"];
$phone = $data["phone"];
$message = $data["message"];

$body = "<div style='text-align: center;'> <hr><br><br> <div style='font-size: 20px;'>  <h1 style='font-size: 50px; background: -webkit-linear-gradient(79.33deg, #810CCE 19.6%, #EE1796 80.4%); -webkit-text-fill-color: transparent; -webkit-background-clip: text; font-weight: bold;'> NUEVO CONTACTO </h1>" . "Nombre: " . $name . "<br/>Correo: " . $email . "<br/>Telefono: " . $phone . "<br/><br/><br/>Mensaje: " . $message . "</div> <br><br><br><br>
        <img src='https://blueberry.mx/fb.png' style='padding: 0px 10px;' />
        <img src='https://blueberry.mx/ins.png' style='padding: 0px 10px;' />
        <img src='https://blueberry.mx/yt.png' style='padding: 0px 10px;' />
        <img src='https://blueberry.mx/lin.png' style='padding: 0px 10px;' />
        <img src='https://blueberry.mx/v.png' style='padding: 0px 10px;' />
        <hr> <span style='color: #808080;'>Av. Rubén Darío #586 Col. Prados Providencia <br> CP. 44670, Guadalajara Jalisco, México </span> </div>";

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    
    $mail->Host       = 'mail.blueberry.mx';                    //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'no-reply@blueberry.mx';                //SMTP username
    $mail->Password   = '123456';                               //SMTP password
    $mail->SMTPSecure = 'ssl';                                  //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('no-reply@blueberry.mx', 'Blueberry - No Reply');

    $mail->addAddress('hello@blueberry.mx');
    $mail->addAddress('fidelberry1@gmail.com');
    $mail->addAddress('ventas@blueberry.mx');
    //$mail->addAddress('ruletaeriz@gmail.com');

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'New lead';
    //$mail->set('Body', $Body);
    $mail->Body    = $body;
    //$mail->AltBody = $body2;

    $mail->send();
    echo 'Message has been sent';
}
catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
