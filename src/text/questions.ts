const questions = [
    // первая часть
    {
        title: 'КАКОЙ ВКЛАД Я МОГУ ВНЕСТИ В РАБОТУ КОМАНДЫ?',
        questions: [
            'Я думаю, что могу быстро замечать и использовать новые возможности.',

            'Я легко кооперируюсь с людьми разных типов',

            'Генерация идей — моё врожденное достоинство',

            'Моим достоинством является умение находить людей, способных принести пользу команде.',

            'Мои личные способности – эффективно доводить дело до самого конца',

            'Я готов перенести временную непопулярность, если вижу, что мои действия принесут полезные результаты.',

            'Я быстро выясняю, что сработает в данной ситуации, если в подобную ситуацию я уже попадал.',

            'Личные заблуждения и предубеждения не мешают мне находить и доказывать преимущества альтернативных действий.'
        ]
    },
    // вторая часть
    {
        title: 'МОИ НЕДОСТАТКИ, КОТОРЫЕ МОГУТ ПРОЯВИТЬСЯ В КОМАНДНОЙ РАБОТЕ:',
        questions: [
            'Я чувствую себя неуверенно на совещании, если отсутствуют четкая повестка дня и контроль за её соблюдением.',

            'Я склонен быть слишком великодушным к людям, имеющим правильную точку зрения, но не высказывающим её открыто.',

            'Когда группа обсуждает новые идеи, я склонен слишком много говорить',

            'Вследствие моей осмотрительности я не склонен быстро и с энтузиазмом присоединяться к мнению коллег.',

            'Когда надо сделать какое-либо дело, некоторые люди считают, что я действую  агрессивно',

            'Мне трудно повести людей за собой, поскольку я слишком подвержен влиянию атмосферы, царящей в группе.',

            'Я слишком захвачен идеями, которые мне приходят в голову, и забываю о том, что происходит вокруг',

            'Мои коллеги находят, что я слишком много внимания уделяю деталям и чрезмерно беспокоюсь о том, что дела идут неправильно.'
        ]
    },
    // третья часть
    {
        title: 'КОГДА Я РАБОТАЮ С ДРУГИМИ НАД ПРОЕКТОМ:',
        questions: [
            'Я умею влиять на людей, не оказывая на них давления.',

            'Врожденная осмотрительность предохраняет меня от ошибок, возникающих из-за невнимательности.',

            'Я готов оказать давление, чтобы совещание не превращалось в пустую трату времени и не терялась из виду основная цель обсуждения.',

            'От меня всегда можно ожидать оригинальные идеи.',

            'Я всегда готов поддержать хорошее предложение, которое принесет выгоду всем',

            'Я постоянно ищу среди новых идей и разработок свежайшие.',

            'Я считаю, что моя способность выносить беспристрастные суждения, могут внести вклад в принятие правильных решений.',

            'На меня всегда можно возложить обязанности следить за тем, чтобы работа была организована должным образом.'
        ]
    },
    // четвертая часть
    {
        title: 'МОЕ ОТНОШЕНИЕ И ИНТЕРЕС К ГРУППОВОЙ РАБОТЕ:',
        questions: [
            'Я постоянно стараюсь лучше узнать своих коллег.',

            'Я не боюсь ни оспаривать точку зрения другого человека, ни остаться в  меньшинстве',

            'Я обычно нахожу вескую аргументацию против плохих предложений.',

            'Я полагаю, что обладаю талантом быстро организовать исполнение одобренных планов.',

            'Я обладаю способностью избегать очевидных решений и умею находить неожиданные',

            'Я стремлюсь добиться совершенства при исполнении любой роли в командной работе.',

            'Я умею устанавливать контакты с внешним окружением команды.',

            'Я способен воспринимать любые высказываемые мнения, но без колебаний подчиняюсь мнению большинства после принятия решения.'
        ]
    },
    // пятая часть
    {
        title: 'Я чувствую удовлетворение от работы, потому что:',
        questions: [
            'Мне нравится проводить анализ ситуаций и взвешивать все шансы',

            'Мне интересно находить практические пути решения проблемы',

            'Мне приятно осознавать, что я создаю хорошие рабочие взаимоотношения.',

            'Я способен оказывать сильное влияние на принятие решений.',

            'Я имею открытые, дружеские отношения с людьми, которые могут предложить  что-то новенькое',

            'Я могу убеждать людей в необходимости данного курса действий.',

            'Я чувствую себя в своей стихии, когда могу уделить задаче все мое внимание.',

            'Я люблю работать с чем-то, что стимулирует мое воображение'
        ]
    },
    // шестая часть
    {
        title: 'Когда задание трудное и незнакомое:',
        questions: [
            'Я обычно сперва обдумываю пути выхода из тупика, прежде чем начать действовать.',

            'Я был бы готов работать с человеком, указавшим наиболее позитивный подход, каковы бы ни были связанные с этим трудности.',

            'Я бы попытался найти способ разбиения задачи на части в соответствии с тем, что лучше всего умеют делать отдельные члены команды',

            'Присущая мне обязательность помогла бы нам не отстать от графика.',

            'Я надеюсь, мне бы удалось сохранить хладнокровие и способность логически мыслить.',

            'Я был бы готов действовать силой положительного примера при появлении признаков отсутствия прогресса в командной работе.',

            'Я готов взять лидерские обязанности на себя, если чувствую, что группа не  прогрессирует',

            'Я бы начал дискуссию с целью стимулировать появление новых мыслей,  способствующих решению проблемы'
        ]
    },
    // седьмая часть
    {
        title: 'ПРОБЛЕМЫ, С КОТОРЫМИ Я СТАЛКИВАЮСЬ, РАБОТАЯ В КОМАНДЕ:',
        questions: [
            'Я склонен выражать свое нетерпение по отношению к людям, которые стоят на  пути развития прогресса (мешают)',

            'Окружающие иногда критикуют меня за чрезмерный рационализм и неспособность к интуитивным решениям.',

            'Мое желание убедиться в том, что работа выполняется с высоким качеством,  может иногда привести к задержке',

            'Я слишком быстро утрачиваю энтузиазм и стараюсь почерпнуть его у наиболее активных членов группы',

            'Мне трудно приступить к решению задачи, не имея четкой цели',

            'Мне иногда бывает очень трудно разобраться во встретившихся мне сложностях.',

            'Я стесняюсь обратиться за помощью к другим, когда не могу что-либо сделать сам.',
            
            'Я испытываю затруднения при обосновании своей точки зрения, когда сталкиваюсь с серьезными возражениями.'
        ]
    },
];

const questionLength = questions.length;

export { questions, questionLength };