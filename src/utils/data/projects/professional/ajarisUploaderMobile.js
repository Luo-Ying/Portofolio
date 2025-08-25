export const AjarisUploaderMobile = {
    links: {
        'title': {
            "en": "Some Links : ",
            "fr": "Quelques Liens : ",
            "zh": "一些链接： ",
        },
        'links': [
            {
                "name": "Google Play",
                "link": "https://play.google.com/store/apps/details?id=com.Orkis.AjarisUploadeMobile&utm_source=emea_Med",
            },
            {
                "name": "App Store",
                "link": "https://apps.apple.com/fr/app/ajaris-uploader-mobile/id6748943115",
            },
        ]
    },
    title: {
        "en": "Ajaris Uploader Mobile - A mobile application for multimedia files management",
        "fr": "Ajaris Uploader Mobile - Une application mobile destinée à la gestion de fichiers multimédia.",
        "zh": "Ajaris Uploader Mobile - 一个用于多媒体文件管理的移动应用程序",
    },
    logo: "/images/company building.png",
    organization: {
        name: {
            "en": "ORKIS",
            "fr": "ORKIS",
            "zh": "ORKIS"
        },
        link: "https://www.orkis.com/",
    },
    imagePreview: "/images/AjarisUploaderMobile/imagePreview.png",
    imagesMinSize: "10%",
    images: [
        "/images/AjarisUploaderMobile/splash.png",
        "/images/AjarisUploaderMobile/List sites.jpg",
        "/images/AjarisUploaderMobile/users in site.png",
        "/images/AjarisUploaderMobile/site selected.jpg",
        "/images/AjarisUploaderMobile/Add site - site name.jpeg",
        "/images/AjarisUploaderMobile/Add site - site url.jpeg",
        "/images/AjarisUploaderMobile/Add site - user id.jpeg",
        "/images/AjarisUploaderMobile/Site added.jpeg",
        "/images/AjarisUploaderMobile/Upload - 1.jpeg",
        "/images/AjarisUploaderMobile/Upload - 2.jpeg",
        "/images/AjarisUploaderMobile/Upload - 3.jpeg",
        "/images/AjarisUploaderMobile/Upload - 4.jpeg",
        "/images/AjarisUploaderMobile/Upload - 5.jpeg",
        "/images/AjarisUploaderMobile/Upload - 6.jpeg",
        "/images/AjarisUploaderMobile/Upload - 7.jpeg",
        "/images/AjarisUploaderMobile/Upload - 8.jpeg",
        "/images/AjarisUploaderMobile/Upload - 9.jpeg",
    ],
    simpleInfo: {
        "en": "Development with Flutter of a mobile application, available on both Android and iOS.",
        "fr": "Développement d'une application mobile avec Flutter, disponible sous Android et iOS.",
        "zh": "使用Flutter开发了一个适用于Android和iOS的移动应用程序"
    },
    introduction: [
        {
            "en": "Ajaris Uploader Mobile is a project I developed within the Orkis company. It is an extension of the main product Ajaris, a DAM (Digital Asset Management) solution developed by Orkis. This mobile application mainly provides a service allowing Orkis clients to transfer their multimedia files from their phone to their own server. It is available on Android and iOS thanks to the Flutter technology.",
            "fr": "Ajaris Uploader Mobile est un projet que j'ai réalisé au sein de l'entreprise Orkis. Il s'agit d'une extension du produit principal Ajaris, une application de la solution DAM (Digital Asset Management) développée par Orkis. Cette application mobile offre principalement un service permettant aux clients d'Orkis de transférer leurs fichiers multimédias depuis leur téléphone vers leur propre serveur. Elle est disponible sur Android et iOS grâce à la technologie Flutter.",
            "zh": "Ajaris Uploader Mobile是我与Orkis公司合作开发的一个项目。它是主产品Ajaris的扩展，一个由Orkis开发的DAM（数字资产管理）解决方案。这个移动应用程序主要提供一个服务，允许Orkis客户将他们的多媒体文件从手机传输到他们自己的服务器。它在Android和iOS上通过Flutter技术提供支持。"
        }
    ],
    detailsDescription: {
        sentence: {
            "en": "This application includes the following services : ",
            "fr": "Cette application comprend les services suivants : ",
            "zh": "该应用程序包括以下集成服务："
        },
        services: [
            {
                "en": "A lightweight database management system, using SQLite on a portable system, allowing to manage transfer information, including different accounts, servers and files sent.",
                "fr": "Un système de gestion de bases de données léger, utilisant SQLite sur un système portable, permettant de gérer les informations relatives aux transferts, notamment celles des différents comptes, des serveurs ainsi que des fichiers envoyés.",
                "zh": "一个轻量级的数据库管理系统，使用SQLite在便携系统上运行，允许管理传输信息，包括不同的账户、服务器和发送的文件。"
            },
            {
                "en": "A transfer management system and file display on the screen, integrating a compression mechanism and a deferred loading (lazy load) service. This system is designed to handle specific cases, such as launching a large transfer by the user (in terms of number or size of files), in order to optimize performance based on the variable capabilities of mobile devices.",
                "fr": "Un système de gestion des transferts et de l'affichage des fichiers à l'écran, intégrant un mécanisme de compression ainsi qu'un service de chargement différé (lazy load). Ce système est conçu pour gérer des cas particuliers, tels que le lancement d'un transfert volumineux par l'utilisateur (en termes de nombre ou de taille de fichiers), afin d'optimiser les performances en fonction des capacités variables des appareils mobiles.",
                "zh": "一个传输管理系统和屏幕上的文件显示，集成了一个压缩机制和一个延迟加载（懒加载）服务。该系统设计用于处理特定情况，例如用户启动大量传输（在文件数量或大小方面），以优化性能，根据移动设备的不同能力。"
            },
            {
                "en": "A file state management system, allowing to follow and control the actions performed by the user, such as launching a transfer, pausing, canceling or resuming an interrupted transfer. This system also allows managing the states of files according to their current situation, for example: files sent successfully, waiting to be sent, or having failed during the transfer.",
                "fr": "Un système de gestion des états des fichiers, permettant de suivre et de contrôler les actions effectuées par l’utilisateur, telles que le lancement d’un transfert, la mise en pause, l’annulation ou la reprise d’un envoi interrompu. Ce système permet également de gérer les états des fichiers selon leur situation actuelle, par exemple : fichiers envoyés avec succès, en attente d’envoi, ou ayant échoué lors de l’envoi.",
                "zh": "一个文件状态管理系统，允许跟踪和控制用户执行的操作，例如启动传输、暂停、取消或恢复中断的传输。该系统还允许根据文件的当前情况管理文件状态，例如：文件发送成功、等待发送或传输失败。"
            },
            {
                "en": "An asynchronous data synchronization system, allowing to synchronize data and file states online and offline.",
                "fr": "Un système de gestion de l’asynchronisation, permettant de synchroniser les données et les états des fichiers en ligne et hors ligne.",
                "zh": "一个异步数据同步系统，允许在在线和离线状态下同步数据和文件状态。"
            },
            {
                "en": "A CI/CD system for application deployment, allowing development and testing teams to easily retrieve a new version after each update.",
                "fr": "Un système de CI/CD pour le déploiement de l'application, permettant aux équipes de développement et de test de récupérer facilement une nouvelle version après chaque mise à jour.",
                "zh": "一个CI/CD系统用于应用程序部署，允许开发和测试团队在每次更新后轻松获取新版本。"
            }
        ]
    },
    technologies: [
        {
            name: "Flutter",
            icone: "/images/AjarisUploaderMobile/Flutter.svg"
        }
    ],
    challenges: {
        "en": "...",
        "fr": "...",
        "zh": "..."
    }
}