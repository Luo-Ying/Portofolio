export const professionalProjects = [
    {
        links: [
            {
                name: "Github",
                link: "...",
            },
        ],
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
        imagesMinSize: "30%",
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
        introduction: [
            {
                "en": "Spectre is a web application developed within the ORKIS company, to which I actively contributed. This project aims to facilitate content search in dialogues of videos stored in a database. The application allows users to upload and manage their videos, while offering them an advanced text search functionality. Thanks to the integration of the SpeechBrain voice recognition service, users can perform precise searches in video transcriptions to quickly identify key moments containing information related to the entered keywords. This feature significantly improves the accessibility and exploitation of audiovisual content.",
                "fr": "Spectre est une application web développée au sein de l'entreprise ORKIS, à laquelle j'ai activement contribué. Ce projet a pour objectif de faciliter la recherche de contenu dans les dialogues des vidéos stockées dans une base de données. L'application permet aux utilisateurs de téléverser et de gérer leurs vidéos, tout en leur offrant une fonctionnalité avancée de recherche textuelle. Grâce à l'intégration du service de reconnaissance vocale SpeechBrain, les utilisateurs peuvent effectuer des recherches précises dans les transcriptions des vidéos, afin d'identifier rapidement les moments clés contenant des informations en lien avec les mots-clés saisis. Cette fonctionnalité améliore considérablement l'accessibilité et l'exploitation des contenus audiovisuels.",
                "zh": "Spectre是一个由Orkis公司开发的应用程序，我积极参与了开发。该项目旨在简化在存储在数据库中的视频对话中搜索内容的过程。该应用程序允许用户上传和管理他们的视频，同时为他们提供先进的文本搜索功能。通过集成语音转文本服务（SpeechBrain），用户可以精确搜索视频的转录内容，快速识别包含与输入关键词相关信息的视频关键时刻。这一功能显著提高了音频视频内容的可访问性和利用率。"
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
        links: [
            {
                name: "Github",
                link: "...",
            },
        ],
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
    },
    {
        links: [
            {
                name: "Github",
                link: "...",
            },
        ],
        title: {
            "en": "Object detection for visual contents",
            "fr": "Détection d'objet pour les contenus visuels",
            "zh": "用于视觉内容的对象检测",
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
        imagePreview: "/images/Object detection/Object detection.png",
        imagesMinSize: "40%",
        images: [
            "/images/Object detection/Object detection.png",
        ],
        simpleInfo: {
            "en": "A Python program integrating the YOLOv8 model has been developed and integrated into a FastAPI API.",
            "fr": "Un programme Python intégrant le modèle YOLOv8 a été développé et intégré dans une API construite avec FastAPI.",
            "zh": "一个集成了YOLOv8模型的Python程序，同时也被集成到一个用FastAPI构建的API中。"
        },
        introduction: {
            "en": "This project is a work I did within the Orkis company. The goal was to add a new service to detect objects present in visual contents (images, videos, etc.) within the Ajaris suite — a DAM (Digital Asset Management) solution, main product of Orkis. This service was designed to later integrate features such as automatic file indexing, adding labels or managing metadata, in order to optimize multimedia file management and enrich the services offered by Orkis.",
            "fr": "Ce projet est un travail que j’ai réalisé au sein de l’entreprise Orkis. L’objectif était d’ajouter un nouveau service permettant de détecter les objets présents dans les contenus visuels (images, vidéos, etc.) au sein de la suite Ajaris — une solution DAM (Digital Asset Management), produit principal d’Orkis. Ce service a été conçu dans la perspective d’intégrer ultérieurement des fonctionnalités telles que l’indexation automatique des fichiers, l’ajout d’étiquettes ou encore la gestion des métadonnées, dans le but d’optimiser la gestion des fichiers multimédias et d’enrichir les services proposés par Orkis.",
            "zh": "这个项目是我作为Orkis公司的一名员工完成的。目标是在原有的产品API中添加一个新服务，用于检测视频、图像等视觉内容中的对象。这个服务旨在后期为Orkis的DAM（数字资产管理）解决方案 -- Ajaris添加功能，例如自动索引文件、添加标签或管理元数据，以优化多媒体文件的管理并丰富Orkis提供的服务。"
        },
        detailsDescription: {
            sentence: {
                "en": "This application includes the following services : ",
                "fr": "Cette application comprend les services suivants : ",
                "zh": "该应用程序包括以下集成服务："
            },
            services: [
                {
                    "en": "A server under Linux operating system hosts the API as well as all additional services offered, such as facial recognition, image recognition, etc.",
                    "fr": "Un serveur sous système d’exploitation Linux héberge l’API ainsi que l’ensemble des services supplémentaires proposés, tels que la reconnaissance faciale, la reconnaissance d’images, etc.",
                    "zh": "一个运行在Linux操作系统上的服务器，托管了API以及所有附加服务，例如面部识别、图像识别等。"
                },
                {
                    "en": "A FTP service is installed on the server to allow the retrieval of files to be processed, depending on the requested services. This same service also allows retrieving files processed by the programs. Once the processing is finished, the API sends a signal to the client to indicate that the result is available on the FTP server. The client can then retrieve the file using the corresponding mission identifier.",
                    "fr": "Un service FTP est installé sur le serveur afin de permettre la récupération des fichiers à traiter, en fonction des services demandés. Ce même service permet également de récupérer les fichiers traités par les programmes. Une fois le traitement terminé, l’API envoie un signal au client pour indiquer que le résultat est disponible sur le serveur FTP. Le client peut alors récupérer le fichier en utilisant l’identifiant de mission correspondant.",
                    "zh": "一个FTP服务安装在服务器上，允许根据请求的服务检索要处理的文件。这个服务还允许检索被程序处理过的文件。一旦处理完成，API会向客户端发送信号，表示结果已可在FTP服务器上获取。客户端可以使用相应的任务标识符检索文件。"
                },
                {
                    "en": "A Python API developed with FastAPI manages requests related to all additional services offered by Ajaris. It also allows triggering the execution of programs installed on the server, placing them in a processing queue with a mission identifier. Once the mission is added to the queue, the API returns the mission identifier to the client. The latter can then use this identifier to retrieve the result once the processing is finished.",
                    "fr": "Une API Python développée avec FastAPI gère les requêtes liées à l’ensemble des services supplémentaires proposés par Ajaris. Elle permet également de déclencher l’exécution des programmes installés sur le serveur, en les plaçant dans une file d’attente de traitement, avec un identifiant de mission associé. Une fois la mission ajoutée à la file, l’API retourne l’identifiant de mission au client. Ce dernier pourra ensuite utiliser cet identifiant pour récupérer le résultat une fois le traitement terminé.",
                    "zh": "一个用FastAPI开发的Python API管理与Ajaris提供的所有附加服务相关的请求。它还允许触发安装在服务器上的程序的执行，将它们放置在处理队列中，并分配一个任务标识符。一旦任务被添加到队列中，API会返回任务标识符给客户端。后者可以随后使用该标识符检索结果，一旦处理完成。"
                },
                {
                    "en": "A YOLOv8 object detection model, trained on a small dataset of 80 classes (for a proof of concept – PoC), is integrated into the object detection service. This model allows processing visual contents by returning, in JSON format, the detected objects and their location within these contents.",
                    "fr": "Un modèle de détection d’objets YOLOv8 (You Only Look Once), issu de la librairie Ultralytics et entraîné sur un petit jeu de données comprenant 80 classes (dans le cadre d’une preuve de concept – PoC), est intégré dans le service de détection d’objets. Ce modèle permet de traiter les fichiers contenant des contenus visuels en retournant, au format JSON, les objets détectés ainsi que leur localisation dans ces contenus.",
                    "zh": "一个YOLOv8对象检测模型，在小型数据集上训练了80个类（用于概念验证 – PoC），并集成到对象检测服务中。该模型允许处理视觉内容，并以JSON格式返回检测到的对象及其在内容中的位置。"
                },
            ]
        },
        technologies: [
            {
                name: "Linux",
                icone: "/images/Object detection/Linux.svg"
            },
            {
                name: "Python",
                icone: "/images/Object detection/Python.svg"
            },
            {
                name: "FastAPI",
                icone: "/images/Object detection/FastAPI.svg"
            },
            {
                name: "Ultralytics YOLOv8",
                icone: "/images/Object detection/idwn_0Uo4A_logos.jpeg"
            },
            {
                name: "JSON",
                icone: "/images/Object detection/JSON.svg"
            },
        ],
        challenges: {
            "en": "...",
            "fr": "...",
            "zh": "..."
        }
    },
]