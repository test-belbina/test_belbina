<?php

$json = file_get_contents('php://input');
$data = json_decode($json);

//echo "{'json': $json, 'data': $data}";

function sender($name, $email){
    $subject = 'Чек-лист "Тест Белбина"';

    $msg = '
        <html>
            <head>
                <title>Чек-лист "Тест Белбина"</title>
            </head>
            <body>
                <p>Привет</p>
                <p>
                    Последний раз мы виделись с тобой, когда ты проходил тест Белбина. Я обещал тебе отправить полезный чек-лист, в котором подробно рассказано о каждой роли: от формирователя до коллективиста.
                    Лови свою дозу пользы и концентрированной информации:
                    <a href="http://incube.world/test-belbina/belbina.pdf">Чек-лист теста Белина</a>
                </p><p>
                    Мы с командой уверены, ты сможешь быстро внедрить в работу полученные знания и стать лучшим спецом для своего проекта!
                    Делись своими инсайтами в инстаграм и отмечай меня @yanpalm
                </p>
            </body>
        </html>
    ';


    // Для отправки HTML-письма должен быть установлен заголовок Content-type
    $headers[]  = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';

    // Дополнительные заголовки
    $headers[] = "To: ".$name." <".$email.">";
    $headers[] = 'From: info@incube.word';
    $headers[] = "Reply-To: no-replay";

    // Отправляем
    mail($email, $subject, $msg, implode("\r\n", $headers));
}
$action = $data -> {'action'};
switch ($action) {
    case 'mail':
        $name = $data -> {'name'};
        $email = $data -> {'email'};

        sender($name, $email);
        echo '{"result": "ok"}';
        break;
    case 'sheet':
        echo '{"result": "ok"}';
        break;
    default:
        echo '{"error": "Bad request"}';
}