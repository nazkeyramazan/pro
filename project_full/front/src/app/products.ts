import { CategoryComponent } from './category/category.component';
import { Category } from './categories';

export interface Product{
  id:number;
  category_id:number;
  name:string,
  price:number;
  description:string;
   image: string;
   link:string;
   category: Category;
}

// export const products = [
//   {
//     id:1,
//     category_id:1,
//     name: 'Финансист',
//     price: 1175 ,
//     description: '"Финансист" – первая книга знаменитой "Трилогии желания" Теодора Драйзера, в основу сюжета которой положена биография американского железнодорожного магната Чарлза Йеркса. Главный герой, Фрэнк Каупервуд, разбогател всего за несколько дней во многом благодаря своей удивительной интуиции. Обычный паренек из маленького провинциального городка, став коммерсантом и биржевым игроком, попадает в мир роскоши и больших денег: он оказывается в круговороте крупнейших финансовых операций, вращается в обществе лучших дельцов своего времени. Постепенно амбициозный юноша превращается в беспринципного, властного и жаждущего наживы миллионера. Подробнее: https://www.meloman.kz/world-classics/drajzer-t-finansist-1104134.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cover1__w600_136_406.jpg',
//     link:'https://www.meloman.kz/world-classics/drajzer-t-finansist-1104134.html',
//   },
//   {
//     id:2,
//     category_id:1,
//     name: 'Маленькие женщины',
//     price: '1150',
//     description: '"Маленькие женщины" Луизы Мэй Олкотт - это роман, на котором воспитывалось не одно поколение читателей по всему миру. Впервые опубликованное в 1868 году в США, это произведение было переведено более чем на 50 языков и положено в основу шести фильмов, четырех телесериалов, нескольких опер и спектаклей. История семейства Марч, в котором подрастают четыре дружные, но непохожие друг на друга сестры, заключает в себе узнаваемые перипетии юности, взросления, дружбы и любви.Российским читателям "Маленькие женщины" известны по переложению романа для среднего школьного возраста, которое, однако, не отражает всех художественных достоинств текста. В настоящем издании впервые публикуется новый перевод Ирины Бессмертной с чутким соблюдением той языковой манеры, которая была присуща самому автору книги. Нарочитая неправильность речи ряда персонажей, характерные для той эпохи жаргонизмы, а также придуманные героинями и используемые в домашнем обиходе слова придают тексту аромат XIX века. Подробнее: https://www.meloman.kz/world-classics/olkott-l-m-malenkie-jenschiny-2242974.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/migrated/article/22429/74_tn3.jpg',
//     link:'https://www.meloman.kz/world-classics/olkott-l-m-malenkie-jenschiny-2242974.html'
//   },
//   {
//     id:3,
//     category_id:1,
//     name: 'На виду у миллионов',
//     price: '2150',
//     description: 'Новинка! Впервые на русском языке! Фанфик о самой успешной K-pop группе! Элис давно хотела поработать на концертной площадке, и сразу после окончания школы она решает осуществить свою мечту. Судьба это или случайность, но за кулисами она становится невольным свидетелем ссоры между лидером ее любимой K-pop группы и их менеджером, которые бурно обсуждают шумиху вокруг личной жизни артиста. Разъяренный менеджер замечает девушку, и у него сразу же возникает идея, как успокоить фанатов и журналистов: нужно лишь разыграть любовь между Элис и айдолом миллионов. Но примет ли она это провокационное предложение, способное изменить ее жизнь? Догадаются ли все вокруг, что история невероятной любви – это виртуозная игра? Подробнее: https://www.meloman.kz/molodjojnaya-literatura-18728/k-pop-love-story-na-vidu-u-millionov.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cover1_74_950.jpg',
//     link:'https://www.meloman.kz/molodjojnaya-literatura-18728/k-pop-love-story-na-vidu-u-millionov.html'
//   },
//   {
//     id:4,
//     category_id:1,
//     name: 'Темнота между звездами',
//     price: '2750',
//     description: 'В своем втором поэтическом сборнике Atticus обращается к феномену двойственности нашего жизненного опыта - метаниями между самыми светлыми и возвышенными чувствами и неизбежным падением в бездну собственного сознания. Он пишет о неистовой энергии зарождающейся любви, о ее бурном развитии и о мучительной ностальгии от расставания и ощущении пустоты. Несмотря на все эти противоречивые эмоции, Atticus утверждает, что жизнь удивительна в своей полноте, что проживать ее нужно с целью, стремясь вперед, поскольку это лучшее наше путешествие. Его поэзия - это мир, где играет джаз, где в почете танцы на закате и смакование вина у реки; это очарование Парижа, дождливых дней и удивительная человеческая способность отдаваться боли и в то же время ощущать и созидать красоту. Это подобно непроглядной темноте и самым ярким звездам. Противоречиво, как вся наша жизнь. Подробнее: https://www.meloman.kz/poetry/atticus-temnota-mezhdu-zvezdami.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cover1__w600_142_590.jpg',
//     link:'https://www.meloman.kz/poetry/atticus-temnota-mezhdu-zvezdami.html'

//   },
//   {
//     id:5,
//     category_id:1,
//     name: 'Деревянные кони. Повести. Рассказы',
//     price: '3250',
//     description: 'Федор Абрамов — русский писатель, понимавший опасность догм, упрощенных суждений об истории, стране, народе, человеке. Художник-провидец, признававший неправедность бюрократической системы, считал невозможными никакие благотворные социальные преобразования в стране без интеллектуального и нравственного развития каждой отдельной личности. В своих произведениях писал о трагедии раскулачивания, о репрессиях, о непосильных налогах, о разрушении малых деревень — о трагедии народа и человека, которому не давали достойно жить, работать, думать. Романы, повести, рассказы, публицистика Ф. Абрамова — летопись народной жизни почти за полвека. Подробнее: https://www.meloman.kz/russkaya-klassika-18725/abramov-f-derevjannye-koni-povesti-rasskazy.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cover1_74_695.jpg',
//     link:'https://www.meloman.kz/russkaya-klassika-18725/abramov-f-derevjannye-koni-povesti-rasskazy.html'
//   },
//   {
//     id:6,
//     category_id:1,
//     name: 'Московское гостеприимство',
//     price: '1950',
//     description: 'Вниманию читателей предлагаются рассказы из сборников разных лет. Каждое из этих небольших произведений – жемчужина искрометного юмора, грандиозная и остроумная сатира на нравы и быт русского общества. Среди интересующих Аверченко тем – общественно-политическая жизнь начала прошлого века, взаимодействие искусства и повседневности, отношения полов, маленькие радости и горести детей, заботы городских обитателей. Ситуации и герои, представленные в рассказах автора, зачастую гротескны – и от этого еще более правдивы. Именно в таком причудливом изображении действительности обнаруживается мастерство Аверченко, его подлинная житейская мудрость – результат непрерывных наблюдений за окружающим миром и людьми в нем. Подробнее: https://www.meloman.kz/russkaya-klassika-18725/averchenko-a-moskovskoe-gostepriimstvo.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cover1_74_533.jpg',
//     link:'https://www.meloman.kz/russkaya-klassika-18725/averchenko-a-moskovskoe-gostepriimstvo.html'

//   },
//   {
//     id:7,
//     category_id:2,
//     name: 'Гравити Фолз. Дневник 3',
//     price: '8990',
//     description: 'Дневник 3", который на протяжении всех сезонов увлеченно читал Диппер. Да, он самый, ты не спишь! Это чистая правда! Теперь у тебя появилась уникальная возможность узнать обо всех секретах городка Гравити Фолз вместе с любимыми героями из первоисточника. В нем ты найдешь описания таинственных существ и локаций, историю приключений брата дяди Стэна, который написал этот дневник и много всего интересного. Только будь осторожен, за дневником охотятся темные силы. Береги его! Подробнее: https://www.meloman.kz/books-for-teenagers/graviti-folz-dnevnik-3-2114785.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/f/u/fullimage_18_128.jpg',
//     link:'https://www.meloman.kz/books-for-teenagers/graviti-folz-dnevnik-3-2114785.html'

//   },
//   {
//     id:8,
//     category_id:2,
//     name: 'Гарри Поттер и Философский камень',
//     price: '5150',
//     description: 'Издательская группа "Азбука-Аттикус" с гордостью сообщает о начале публикации уникальных мировых бестселлеров - семи книг Дж.К. Роулинг о Гарри Поттере. Самая знаменитая сага новейшего времени разошлась рекордным тиражом - более 400 миллионов экземпляров на 68 языках (включая эсперанто, древнегреческий и латынь). Книги Роулинг сумели оторвать детей и взрослых от экранов компьютеров и стали мощнейшим импульсом для интереса к чтению в современную эпоху. Приобретение исключительных прав на издание книг о Гарри Поттере на русском языке явилось для «Азбуки-Аттикус» началом нового значимого этапа в истории издательской группы, стало важным событием для всего российского книжного рынка и поставило «Азбуку-Аттикус» в один ряд с лидерами мировой книжной индустрии - американским издательством Scholastic и английским Bloomsbury. Все семь книг о Гарри Поттере планируются к публикации в 2014 году в переводах Марии Спивак. По мнению издательства, переводы Спивак добавляют книгам Роулинг новое качество, делают их еще более увлекательными и способствуют их востребованности. Подробнее: https://www.meloman.kz/books-for-teenagers/rouling-dj-k-garri-potter-i-filosofskiy-kamen.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/migrated/article/9199/18_tn3.jpg',
//     link:'https://www.meloman.kz/books-for-teenagers/rouling-dj-k-garri-potter-i-filosofskiy-kamen.html'

//   },
//   {
//     id:9,
//     category_id:2,
//     name: 'Я знаю все!!!',
//     price: '6890',
//     description: 'Что такое черная дыра? Как устроен глаз? Где находится Новая Гвинея? На эти и другие вопросы отвечает большая иллюстрированная энциклопедия интеллекта "Я знаю всe!". В нашей книге содержится более 1500 статей по всем отраслям знаний и областям науки, которые сообщат массу интересных фактов и сведений, расширят кругозор и послужат прекрасным информативным справочником для всей семьи. Удобная и продуманная форма изложения материала, композиционное единство статей, расположенных по алфавиту, помогут быстро найти интересующую вас статью, карту, схему. Великолепные иллюстрации и современная полиграфия сделают общение с книгой не только полезным, но и чрезвычайно приятным времяпрепровождением. Наша книга станет незаменимым другом и помощником вашим детям, приучит их к работе со справочной и научно-познавательной литературой, сделает их благодарными читателями и любителями книги. Более 1500 информационных статей на самые разные темы. Подробнее: https://www.meloman.kz/developing-literature/ya-znayu-vsjo.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/f/u/fullimage_19_92.jpg',
//     link:'https://www.meloman.kz/developing-literature/ya-znayu-vsjo.html'

//   },
//   {
//     id:10,
//     category_id:2,
//     name: 'Гравити Фолз. Графический роман. Вып. 1',
//     price: '3290',
//     description: 'Графический роман "Гравити Фолз" - настоящая находка для любого из десятков тысяч фанатов мегапопулярного анимационного сериала, который идет на телеканале Disney. Сюжеты первых серий в формате комикса порадуют и тех, кто давно и серьезно "подсел" на истории о приключениях Диппера и Мэйбл, и тех, кто только знакомится с ними. Отличный сборник комиксов по первым сериям "Гравити Фолз" отпечатан на мелованной бумаге, так что можно с удовольствием рассматривать картинки (и, кстати, заметить то, чего совершенно нельзя увидеть, когда смотришь сериал) и наслаждаться остроумными репликами двойняшек Пайнс, их дяди Стэна и других обитателей Гравити Фолз - городка, который только кажется сонным, а на самом деле... Подробнее: https://www.meloman.kz/preschool-fiction/graviti-folz-graficheskiy-roman-vyp-1-2071570.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/migrated/article/20715/70_tn3.jpg',
//     link:'https://www.meloman.kz/preschool-fiction/graviti-folz-graficheskiy-roman-vyp-1-2071570.html'

//   },
//   {
//     id:11,
//     category_id:2,
//     name: 'Қазақ халық ертегілері',
//     price: '2350',
//     description: 'Керқұла атты Кендебай, Таусоғар мен Көлтауысарды жолдас еткен Ер Төстік, алтын сақасын іздеген бала, Ай астындағы Айбарша сұлу мен Күн астындағы Күнікей қыз – халық ертегілерінің қаһармандары барша мұратына жетіп, баланың қиялына қанат бітіреді. Ертегінің кез келген кейіпкері – ақылды тасбақа мен қоян, қарға мен кірпі, тіпті кішкентай құмырсқаның өзі мейірімділікке, ізгілікке баулиды.',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/migrated/article/22426/90_tn3.jpg',
//     link:'https://www.meloman.kz/books-in-kazakhs-language/akjolova-g-aza-haly-ertegileri-2242690.html'
//   },
//   {
//     id:12,
//     category_id:4,
//     name: 'Сам себе программист. Как научиться программировать и устроиться в Ebay?',
//     price: '4450',
//     description: 'Как за год научиться программировать и устроиться разработчиком в Ebay? Кори Альтхофф, автор книги "Сам себе программист", на собственном опыте знает, что это возможно, и делится знаниями с читателями. Альтхофф создал универсальный самоучитель, не похожий ни на один другой. На примере языка Python автор показывает, как буквально с первого урока можно приступить к созданию собственной небольшой программы, а к концу книги уверенно писать код. Помимо этого, вы узнаете, как успешно проходить собеседования на должность программиста в любой IT компании и перестать сомневаться в собственных силах. Это прекрасное пособие для тех, кто хочет научиться программировать и планирует заниматься этим профессионально. Подробнее: https://www.meloman.kz/programming-languages/al-thoff-k-sam-sebe-programmist-kak-nauchit-sja-programmirovat-i-ustroit-sja-v-ebay.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/f/u/fullimage_19_231.jpg',
//     link:'https://www.meloman.kz/programming-languages/al-thoff-k-sam-sebe-programmist-kak-nauchit-sja-programmirovat-i-ustroit-sja-v-ebay.html'
//   },
//   {
//     id:13,
//     category_id:4,
//     name: 'Javascript и jQuery. Интерактивная веб-разработка',
//     price: '11950',
//     description: 'Эта книга - самый простой и интересный способ изучить JavaScript и jQuery. Независимо от стоящей перед вами задачи - спроектировать и разработать веб-сайт с нуля или получить больше контроля над уже существующим сайтом - эта книга поможет вам создать привлекательный, дружелюбный к пользователю веб-контент. Простой визуальный способ подачи информации с понятными примерами и небольшим фрагментом кода знакомит с новой темой на каждой странице. Вы найдете практические советы о том, как организовать и спроектировать страницы вашего сайта, и после прочтения книги сможете разработать свой веб-сайт профессионального вида и удобный в использовании. Подробнее: https://www.meloman.kz/web-technology/dakett-d-javascript-i-jquery-2161976.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/migrated/article/21619/76_tn3.jpg',
//     link:'https://www.meloman.kz/web-technology/dakett-d-javascript-i-jquery-2161976.html'
//   },
//   {
//     id:14,
//     category_id:4,
//     name: 'Все секреты Minecraft. Красный камень.',
//     price: '1990',
//     description: 'Minecraft - очень популярная игра, где можно строить, сражаться, добывать ресурсы и делать множество других вещей! Красный камень (он же редстоун) – один из наиболее интересных и сложных материалов в Minecraft. Если вы изобретатель с безграничной фантазией, то с его помощью вы сможете воплотить в жизнь самые невероятные мечты. Узнайте обо всех полезных свойствах красного камня, научитесь делать базовые вещи, которые должны быть в заначке каждого игрока, и переходите к действительно сложным и интересным изобретениям. Подробнее: https://www.meloman.kz/037753-igry-23823/miller-m-vse-sekrety-minecraft-krasnyy-1744333.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/migrated/article/17443/33_tn3.jpg',
//     link:'https://www.meloman.kz/037753-igry-23823/miller-m-vse-sekrety-minecraft-krasnyy-1744333.html'
//   },
//   {
//     id:15,
//     category_id:4,
//     name: 'Minecraft для новичков. Шаг за шагом',
//     price: '3690',
//     description: 'Предлагаем вашему вниманию книгу "Minecraft для новичков. Шаг за шагом. Только факты". Делаешь первые шаги в Minecraft? Тогда эта книга для тебя! Мы расскажем, куда идти в полном опасностей Верхнем мире и как остаться в живых. Научим добывать минералы, делать снаряжение, готовить пищу, строить укрытия и ковать доспехи. Снабдим важными сведениями о животных и монстрах - от коров до криперов, покажем всевозможные места - от деревень до заброшенных шахт. И ты будешь готов к любым приключениям в мире Minecraft Подробнее: https://www.meloman.kz/037753-igry-23823/minecraft-dlja-novichkov-shag-za-shagom.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/2/7/2773952_detail.jpg',
//     link:'https://www.meloman.kz/037753-igry-23823/minecraft-dlja-novichkov-shag-za-shagom.html'
//   },
//   {
//     id:16,
//     category_id:4,
//     name: 'HTML и CSS. Разработка и дизайн веб-сайтов',
//     price: '9 250 ₸',
//     description: 'Эта книга – самый простой и интересный способ изучить HTML и CSS. Независимо от стоящей перед вами задачи: спроектировать и разработать веб-сайт с нуля или получить больше контроля над уже существующим сайтом, эта книга поможет вам создать привлекательный, дружелюбный к пользователю веб-контент. Простой визуальный способ подачи информации с понятными примерами и небольшим фрагментом кода знакомит с новой темой на каждой странице. Вы найдете практические советы о том, как организовать и спроектировать страницы вашего сайта и после прочтения книги сможете разработать свой веб-сайт профессионального вида и удобный в использовании. Подробнее: https://www.meloman.kz/web-design/dakett-d-html-i-css-razrabotka-i-dizajn-veb-sajtov.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cover1__w600_135_318.jpg',
//     link:'https://www.meloman.kz/web-design/dakett-d-html-i-css-razrabotka-i-dizajn-veb-sajtov.html'
//   },
//   {
//     id:17,
//     category_id:4,
//     name: 'avaScript в примерах и задачах',
//     price: '5 450',
//     description: 'Простой и интересный самоучитель по JavaScript, наиболее популярному сегодня языку программирования во всем мире. Полный спектр сведений о языке JavaScript с примерами и разбором задач от автора учебников-бестселлеров по языкам программирования Алексея Васильева. С помощью этой книги освоить язык JavaScript сможет каждый желающий – от новичка до специалиста. Подробнее: https://www.meloman.kz/programming-languages/vasilev-a-n-javascript-v-primerah-i-2226334.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/migrated/article/22263/34_tn3.jpg',
//     link:'https://www.meloman.kz/programming-languages/vasilev-a-n-javascript-v-primerah-i-2226334.html'
//   },
//   {
//     id:18,
//     category_id:4,
//     name: 'Программирование на Java для начинающих',
//     price: '5 450',
//     description: 'Полный спектр сведений о языке Java с примерами и разбором задач от автора учебников-бестселлеров по языкам программирования Алексея Васильева. С помощью этой книги освоить язык Java сможет каждый желающий - от новичка до специалиста.',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/f/u/fullimage5_1053.jpg',
//     link:'https://www.meloman.kz/programming-languages/vasil-ev-a-n-programmirovanie-na-java-dlja-nachinajuschih.html'
//   },
//   {
//     id:19,
//     category_id:3,
//     name: 'Сунь-цзы: Искусство войны',
//     price: '950',
//     description: 'Живший за полтора века до Александра Македонского крупнейший военачальник и военный теоретик древнего Китая Сунь Цзы (VI—V вв. до н. э.) известен не только своими славными победами над врагами, но и тем, что оставил потомкам бессмертную книгу. Его знаменитый трактат о военной стратегии "Искусство войны" вот уже две с половиной тысячи лет читают все те, кто интересуется китайскими древностями, воинским искусством, политической историей, развитием человеческой мысли, а также непростыми рецептами выживания в мире бизнеса. Подробнее: https://www.meloman.kz/vostochnaya-fiolosofiya/sun-czy-iskusstvo-voyny-1577905.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/1/0/10461906_0.jpg',
//     link:'https://www.meloman.kz/vostochnaya-fiolosofiya/sun-czy-iskusstvo-voyny-1577905.html'
//   },
//   {
//     id:19,
//     category_id:3,
//     name: 'Государство',
//     price: '1 250',
//     description: 'Платон — родоначальник европейской философии. Каждый, кто собирается читать его диалоги, знает: из них вырос и загадочный неоплатонизм, и средневековая схоластика, и классическая философия. Зачастую древних авторов перестают читать, предполагая, что это потребует особой подготовки, однако диалоги Платона ошеломляют своей неожиданной простотой. В настоящую книгу входит один из самых знаменитых диалогов Платона "Государство", давно ставший классикой философской мысли. Сочинение посвящено проблемам устройства идеального государства, основанного на высшей справедливости. В нем также содержится критический анализ шести форм государства, размещенных автором последовательно — от наилучшего к худшему: монархия, аристократия, тимократия, олигархия, демократия и тирания. Подборки товар Подробнее: https://www.meloman.kz/zapadnaya-fiolosofiya/platon-gosudarstvo.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cover1__w600_27_13.jpg',
//     link:'https://www.meloman.kz/zapadnaya-fiolosofiya/platon-gosudarstvo.html'
//   },
//   {
//     id:20,
//     category_id:3,
//     name: 'Метафизика',
//     price: '890',
//     description: 'Представленная в этой книге "Метафизика" — одно из главных произведений Аристотеля. В нем великий философ впервые ввел термин "теология" — "первая философия", которая изучает "начала и причины всего сущего", подверг критике учение Платона об идеях и создал теорию общих понятий. "Метафизика" Аристотеля входит в золотой фонд мировой философской мысли, и по ней в течение многих веков учились мудрости целые поколения европейцев. Подробнее: https://www.meloman.kz/obschaya-filosofiya/aristotel-metafizika.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cover1__w600_27_225.jpg',
//     link:'https://www.meloman.kz/obschaya-filosofiya/aristotel-metafizika.html'
//   },
//   {
//     id:21,
//     category_id:3,
//     name: 'Искусство любить',
//     price: '2 250',
//     description: 'Одна из самых известных работ Эриха Фромма - "Искусство любить" - посвящена непростым психологическим аспектам возникновения и сохранения человеком такого, казалось бы, простого чувства, как любовь.Действительно ли любовь - искусство? Если да, то она требует труда и знаний. Или это только приятное ощущение?.. Для большинства проблема любви - это прежде всего проблема того, как быть любимым, а не того, как любить самому... Подробнее: https://www.meloman.kz/zapadnaya-fiolosofiya/fromm-e-iskusstvo-lyubit-2217707.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/migrated/article/22177/7_tn3.jpg',
//     link:'https://www.meloman.kz/zapadnaya-fiolosofiya/fromm-e-iskusstvo-lyubit-2217707.html'
//   },
//   {
//     id:22,
//     category_id:3,
//     name: 'Масса и власть',
//     price: '2 950',
//     description: 'Как человек становится частью толпы? Почему перестает быть независимой личностью? Каковы механизмы, при помощи которых власть управляет массами? Что объединяет религию, тиранию и войну? Почему прошедшее столетие принесло человечеству столько катастроф, связанных именно с тоталитаризацией общества? Может ли это повториться? В своем трактате "Масса и власть" Элиас Канетти, лауреат Нобелевской премии по литературе за 1981 год, обобщает опыт минувшего столетия и задает вопросы, адресованные не только прошлому, но и будущему…',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cover1__w600_135_187.jpg',
//     link:'https://www.meloman.kz/obschaya-filosofiya/kanetti-je-massa-i-vlast.html'
//   },
//   {
//     id:23,
//     category_id:3,
//     name: 'Критика чистого разума',
//     price: '1 590',
//     description: '"Критика чистого разума" - книга, которую каждая эпоха заново оценивает и по-своему переосмысливает. Книга, которая остается актуальной вот уже более двух столетий. Книга, которую изучали и пытались интерпретировать абсолютно все значительные философы, творившие после Канта, и которая по сей день занимает умы ученых и писателей, моралистов и политиков. Это opus magnum Канта, он обдумывал этот труд десять лет - а написал за несколько месяцев. Тщательно структурированное, совершенное по форме произведение, посвященное вопросам, волновавшим лучшие умы человечества с древнейших времен, - каковы источники и границы знаний и какую роль в познании мира играют чувства, рассудок и разум. Подробнее: https://www.meloman.kz/obschaya-filosofiya/kant-i-kritika-chistogo-razuma-2176199.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/1/0/10597983_0.jpg',
//     link:'https://www.meloman.kz/obschaya-filosofiya/kant-i-kritika-chistogo-razuma-2176199.html'
//   },
//   {
//     id:24,
//     category_id:3,
//     name: 'Так говорил Заратустра',
//     price: '1 250',
//     description: 'Трактат "Так говорил Заратустра" называют ницшеанской Библией. В нем сформулирована излюбленная идея Ницше - идея Сверхчеловека, который является для автора нравственным образцом, смыслом существования, тем, к чему нужно стремиться. Человек же - лишь мост между животным и Сверчеловеком. Необычная форма - поэтичная, афористичная - не совсем соответствует нашим представлениям о философском трактате. Однако, вчитываясь, мы улавливаем ход мысли автора, все глубже проникаемся его идеями и убеждениями... Подробнее: https://www.meloman.kz/obschaya-filosofiya/nicshe-f-tak-govoril-zaratustra-910875.html',
//     image:'https://simg2.marwin.kz/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/c/o/cover1_6_101.jpg',
//     link:'https://www.meloman.kz/obschaya-filosofiya/nicshe-f-tak-govoril-zaratustra-910875.html'
//   }

// ];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/