export const projects = {
    professional: [
        {
            links: [],
            github: "...",
            title: {
                "en": "Spectre - A web application for video management",
                "fr": "Spectre - Une application web pour la gestion vidéo",
                "zh": "Spectre - 一个用于视频管理的Web应用程序",
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
            imagePreview: "/images/spectre/Spectre 3.png",
            images: [
                "/images/spectre/Spectre 1.png",
                "/images/spectre/Spectre 2.png",
                "/images/spectre/Spectre 3.png"
            ],
            simpleInfo: {
                "en": "Development of a full-stack web application with ReactJS and Python Flask for video management",
                "fr": "Développement full-stack en ReactJS et Python Flask d'une application web constituant une plateforme de gestion vidéo.",
                "zh": "使用ReactJS和Python Flask开发的全栈视频管理平台网络应用"
            },
            introduction: {
                "en": "Spectre is a web application developed within the ORKIS company, to which I actively contributed. This project aims to facilitate content search in dialogues of videos stored in a database. The application allows users to upload and manage their videos, while offering them an advanced text search functionality. Thanks to the integration of the SpeechBrain voice recognition service, users can perform precise searches in video transcriptions to quickly identify key moments containing information related to the entered keywords. This feature significantly improves the accessibility and exploitation of audiovisual content.",
                "fr": "Spectre est une application web développée au sein de l'entreprise ORKIS, à laquelle j'ai activement contribué. Ce projet a pour objectif de faciliter la recherche de contenu dans les dialogues des vidéos stockées dans une base de données. L'application permet aux utilisateurs de téléverser et de gérer leurs vidéos, tout en leur offrant une fonctionnalité avancée de recherche textuelle. Grâce à l'intégration du service de reconnaissance vocale SpeechBrain, les utilisateurs peuvent effectuer des recherches précises dans les transcriptions des vidéos, afin d'identifier rapidement les moments clés contenant des informations en lien avec les mots-clés saisis. Cette fonctionnalité améliore considérablement l'accessibilité et l'exploitation des contenus audiovisuels.",
                "zh": "Spectre是一个由Orkis公司开发的应用程序，我积极参与了开发。该项目旨在简化在存储在数据库中的视频对话中搜索内容的过程。该应用程序允许用户上传和管理他们的视频，同时为他们提供先进的文本搜索功能。通过集成语音转文本服务（SpeechBrain），用户可以精确搜索视频的转录内容，快速识别包含与输入关键词相关信息的视频关键时刻。这一功能显著提高了音频视频内容的可访问性和利用率。"
            },
            detailsDescription: {
                sentence: {
                    "en": "This application includes the following services : ",
                    "fr": "Cette application comprend les services suivants : ",
                    "zh": "该应用程序包括以下集成服务："
                },
                services: [
                    {
                        "en": "A NoSQL Elasticsearch database containing user information and roles (authorization rights: reading, uploading, managing other users within the same group), to manage the user system.",
                        "fr": "Une base de données NoSQL Elasticsearch contenant les informations des utilisateurs ainsi que leurs rôles (droits d'autorisation : lecture, téléversement, gestion d'autres utilisateurs au sein du même groupe), afin de gérer le système de gestion des utilisateurs.",
                        "zh": "一个包含用户信息和角色的NoSQL Elasticsearch数据库（权限：浏览、上传、管理同一组中的其他用户），以管理用户系统。"
                    },
                    {
                        "en": "A NoSQL Elasticsearch database containing videos and associated metadata (processed by the speech-to-text service based on SpeechBrain), uploaded by users.",
                        "fr": "Une base de données NoSQL Elasticsearch contenant les vidéos et les métadonnées associées (traitées par le service de reconnaissance vocale speech-to-text basé sur SpeechBrain), téléversées par les utilisateurs.",
                        "zh": "一个包含视频和相关元数据（基于SpeechBrain的语音转文本服务处理）的NoSQL Elasticsearch数据库，由用户上传。"
                    },
                    {
                        "en": "A speech-to-text service (SpeechBrain), triggered when importing videos, allowing to process audio contents and store the results in the database.",
                        "fr": "Un service de speech-to-text (SpeechBrain), déclenché lors de l'importation des vidéos, permettant de traiter les contenus audio et de stocker les résultats dans la base de données.",
                        "zh": "一个语音转文本服务(SpeechBrain)，当导入视频时触发，允许处理音频内容并将结果存储在数据库中。"
                    },
                    {
                        "en": "A Python Flask API, allowing to manage requests and ensure communication between the front-end and the Elasticsearch databases.",
                        "fr": "Une API développée avec Python Flask, permettant de gérer les requêtes et d'assurer la communication entre le front-end et les bases de données Elasticsearch.",
                        "zh": "一个用Python Flask开发的API，允许管理请求并确保前端和Elasticsearch数据库之间的通信。"
                    },
                    {
                        "en": "A front-end developed with React, to design lightweight and interactive client pages.",
                        "fr": "Une interface front-end développée avec React, pour concevoir des pages client légères et interactives.",
                        "zh": "一个用React开发的界面，用于设计轻量级的交互式客户端页面。"
                    }
                ]
            },
            technologies: [
                {
                    name: "React",
                    icone: "/images/spectre/react.png"
                },
                {
                    name: "Python",
                    icone: "/images/spectre/python.png"
                },
                {
                    name: "Python Flask",
                    icone: "/images/spectre/Flask.svg"
                },
                {
                    name: "Elasticsearch",
                    icone: "/images/spectre/Elastic Search.svg"
                },
                {
                    name: "SpeechBrain",
                    icone: "/images/spectre/speechbrain-round-logo.svg"
                }
            ],
            challenges: {
                "en": "...",
                "fr": "...",
                "zh": "..."
            }
        },
        {
            links: [],
            github: "...",
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
            images: [
                "/images/AjarisUploaderMobile/Splash.png",
                "/images/AjarisUploaderMobile/List sites.png",
                "/images/AjarisUploaderMobile/users in site.png",
                "/images/AjarisUploaderMobile/site selection.png",
                "/images/AjarisUploaderMobile/Add site - site name.jpeg",
                "/images/AjarisUploaderMobile/Add site - site url.jpeg",
                "/images/AjarisUploaderMobile/Add site - user id.jpeg",
                "/images/AjarisUploaderMobile/Site ajouté.jpeg",
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
            introduction: {
                "en": "Ajaris Uploader Mobile is a project I developed within the Orkis company. It is an extension of the main product Ajaris, a DAM (Digital Asset Management) solution developed by Orkis. This mobile application mainly provides a service allowing Orkis clients to transfer their multimedia files from their phone to their own server. It is available on Android and iOS thanks to the Flutter technology.",
                "fr": "Ajaris Uploader Mobile est un projet que j'ai réalisé au sein de l'entreprise Orkis. Il s'agit d'une extension du produit principal Ajaris, une application de la solution DAM (Digital Asset Management) développée par Orkis. Cette application mobile offre principalement un service permettant aux clients d'Orkis de transférer leurs fichiers multimédias depuis leur téléphone vers leur propre serveur. Elle est disponible sur Android et iOS grâce à la technologie Flutter.",
                "zh": "Ajaris Uploader Mobile是我与Orkis公司合作开发的一个项目。它是主产品Ajaris的扩展，一个由Orkis开发的DAM（数字资产管理）解决方案。这个移动应用程序主要提供一个服务，允许Orkis客户将他们的多媒体文件从手机传输到他们自己的服务器。它在Android和iOS上通过Flutter技术提供支持。"
            },
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
    ],
    personal: [],
    university: [],
};

export default projects;