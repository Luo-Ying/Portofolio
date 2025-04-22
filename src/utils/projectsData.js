export const projects = {
    professional: [
        {
            url: "/projects/spectre",
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
            imagePreview: "/images/spectre/imagePreview.jpeg",
            simpleInfo: {
                "en": "Development of a full-stack web application with ReactJS and Python Flask for video management",
                "fr": "Développement full-stack en ReactJS et Python Flask d'une application web constituant une plateforme de gestion vidéo.",
                "zh": "使用ReactJS和Python Flask开发的全栈视频管理平台网络应用"
            },
            images: [],
            introduction: {
                "en": "Spectre is a video management web application, whose objective is to enable searching within the speech of videos present in the database. This application allows users to upload videos to their database and manage them. Users can then search within videos thanks to a speech-to-text service (SpeechBrain) integrated into the application. The goal is to find key moments in videos containing information corresponding to the keyword entered by the user.",
                "fr": "Spectre est une application web de gestion vidéo, dont l'objectif est de permettre la recherche dans les paroles des vidéos présentes dans la base de données. Cette application permet aux utilisateurs de uploader des vidéos dans leur base de données et de les gérer. Ensuite, les utilisateurs peuvent effectuer des recherches dans les vidéos grâce à un service de speech-to-text (SpeechBrain) intégré à l'application. L'objectif est de retrouver les moments clés des vidéos contenant les informations correspondant au mot-clé saisi par l'utilisateur.",
                "zh": "Spectre是一个视频管理网络应用程序，其目标是能够在数据库中的视频语音内容中进行搜索。该应用程序允许用户将视频上传到他们的数据库并进行管理。然后，用户可以通过集成到应用程序中的语音转文本服务(SpeechBrain)在视频中进行搜索。目的是找到包含与用户输入的关键词相对应信息的视频关键时刻。"
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
                        "fr": "Une base de données NoSQL Elasticsearch contenant les informations des utilisateurs ainsi que leurs rôles (droits d’autorisation : lecture, téléversement, gestion d'autres utilisateurs au sein du même groupe), afin de gérer le système de gestion des utilisateurs.",
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
                    icone: "../assets/react.png"
                },
                {
                    name: "Python",
                    icone: "../assets/python.png"
                },
                {
                    name: "Python Flask",
                    icone: "../assets/Flask.svg"
                },
                {
                    name: "Elasticsearch",
                    icone: "../assets/Elastic Search.svg"
                },
                {
                    name: "SpeechBrain",
                    icone: "../assets/speechbrain-round-logo.png"
                }
            ],
            challenges: {
                "en": "...",
                "fr": "...",
                "zh": "..."
            }
        }
    ],
    university: [],
    personal: []
};

export default projects;