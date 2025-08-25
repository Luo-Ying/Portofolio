export const Spectre = {
    links: {
        'title': {
            "en": "Some Links : ",
            "fr": "Quelques Liens : ",
            "zh": "一些链接： ",
        },
        'links': []
    },
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
            icone: "/images/spectre/React.png"
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
}