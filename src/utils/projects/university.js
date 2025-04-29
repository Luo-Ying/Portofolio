export const universityProjects = [
    {
        links: [
            {
                name: "Github",
                link: "https://github.com/Luo-Ying/shazam-du-vin",
            },
        ],
        title: {
            "en": "Wine shazam",
            "fr": "Shazam du vin",
            "zh": "葡萄酒识别",
        },
        logo: "/images/chapeau-de-graduation.png",
        organization: {
            name: {
                "en": "University",
                "fr": "Académique",
                "zh": "大学项目"
            },
            link: "https://github.com/Luo-Ying/shazam-du-vin",
        },
        imagePreview: "/images/shazam du vin/all_wines.jpg",
        imagesMinSize: "10%",
        images: [
            "/images/shazam du vin/all_wines.jpg",
            "/images/shazam du vin/add_wine.jpg",
            "/images/shazam du vin/buttons.jpg",
            "/images/shazam du vin/modif_wine.jpg",
        ],
        simpleInfo: {
            "en": "An application developed in Flutter for the user interface and in Python Flask for the API, aiming to create a platform dedicated to wine and wine identification.",
            "fr": "Une application développée en Flutter pour l'interface utilisateur et en Python Flask pour l'API, visant à créer une plateforme dédiée au vin et à l'identification des vins.",
            "zh": "一个使用Flutter开发的用户界面和Python Flask开发的API的应用程序，旨在创建一个专注于葡萄酒和葡萄酒识别的平台。"
        },
        introduction: [
            {
                "en": "This project has for objective to create a platform dedicated to wine, allowing users to find wines added in the application's database by scanning the wine label using an OCR (optical character recognition) system. Users can then consult the average note and the wine information, read the comments left by other users, and add their own comments if they wish.",
                "fr": "Ce projet a pour objectif de créer une plateforme dédiée au vin, permettant aux utilisateurs de retrouver les vins ajoutés dans la base de données de l'application en scannant l'étiquette du vin à l'aide d'un système OCR (reconnaissance optique de caractères). Les utilisateurs peuvent ensuite consulter la note moyenne et les informations sur le vin, lire les commentaires laissés par d'autres utilisateurs, et ajouter leurs propres commentaires s’ils le souhaitent.",
                "zh": "这个项目的目标是创建一个专注于葡萄酒的平台，允许用户通过扫描葡萄酒标签使用OCR（光学字符识别）系统找到应用程序数据库中添加的葡萄酒。用户可以咨询葡萄酒的平均评分和信息，阅读其他用户留下的评价，同时也能添加自己对该款葡萄酒的评价（如果他们愿意的话）。"
            },
        ],
        detailsDescription: {
            sentence: {
                "en": "This project includes the following services : ",
                "fr": "Ce projet comprend les services suivants : ",
                "zh": "该项目包括以下服务："
            },
            services: [
                {
                    "en": "A mobile application interface developed in Flutter, making the application available on Android and iOS.",
                    "fr": "Une interface d'application mobile développée en Flutter, rendant l'application disponible sur Android et iOS.",
                    "zh": "一个使用Flutter开发的手机应用界面，使得应用可以在Android和iOS上使用。"
                },
                {
                    "en": "A Python Flask API developed to manage requests such as wine identification, addition, deletion or comment, as well as OCR operations.",
                    "fr": "Une API développée en Python Flask permet de gérer les requêtes telles que l'identification, l'ajout, la suppression ou le commentaire d’un vin, ainsi que les opérations d’OCR.",
                    "zh": "一个使用Python Flask开发的API，用于管理诸如葡萄酒识别、添加、删除或评论等请求，以及OCR操作。"
                },
                {
                    "en": "An OCR service is integrated into the API to allow the sending of images and the retrieval of the extracted text. The service used here is Amazon Textract.",
                    "fr": "Un service d’OCR est intégré à l’API afin de permettre l’envoi d’images et la récupération du texte extrait. Le service utilisé ici est Amazon Textract.",
                    "zh": "一个OCR服务被集成到API中，以便发送图像并检索提取的文本。这里使用的服务是Amazon Textract。"
                },
                {
                    "en": "A MongoDB database is used to store the wine information and user data.",
                    "fr": "Une base de données MongoDB est utilisée pour stocker les informations des vins et des utilisateurs.",
                    "zh": "一个MongoDB数据库被用来存储葡萄酒信息和用户数据。"
                },
                {
                    "en": "A Docker container hosting the API is deployed on AWS to make it accessible everywhere and at any time.",
                    "fr": "Un conteneur Docker hébergeant l’API est déployé sur AWS afin de la rendre accessible partout et à tout moment.",
                    "zh": "一个包含API的Docker容器被部署在AWS上，以便随时随地访问API。"
                },
            ]
        },
        technologies: [
            {
                name: "Python",
                icone: "/images/shazam du vin/Python.svg"
            },
            {
                name: "Flutter",
                icone: "/images/shazam du vin/Flutter.svg"
            },
            {
                name: "MongoDB",
                icone: "/images/shazam du vin/MongoDB.png"
            },
            {
                name: "AWS",
                icone: "/images/shazam du vin/AWS.svg"
            },
            {
                name: "Docker",
                icone: "/images/shazam du vin/Docker.svg"
            },
        ],
        challenges: {
            "en": "...",
            "fr": "...",
            "zh": "..."
        }

    }
]