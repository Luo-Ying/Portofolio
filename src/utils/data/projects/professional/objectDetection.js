export const ObjectDetection = {
    links: {
        'title': {
            "en": "Some Links : ",
            "fr": "Quelques Liens : ",
            "zh": "一些链接： ",
        },
        'links': []
    },
    title: {
        "en": "Automatic image semantic tagging",
        "fr": "Tagging automatique des images",
        "zh": "自动图像语义标签",
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
    introduction: [
        {
            "en": "This project is a work I did within the Orkis company. The goal was to add a new service to detect objects present in visual contents (images, videos, etc.) within the Ajaris suite — a DAM (Digital Asset Management) solution, main product of Orkis. This service was designed to later integrate features such as automatic file indexing, adding labels or managing metadata, in order to optimize multimedia file management and enrich the services offered by Orkis.",
            "fr": "Ce projet est un travail que j’ai réalisé au sein de l’entreprise Orkis. L’objectif était d’ajouter un nouveau service permettant de détecter les objets présents dans les contenus visuels (images, vidéos, etc.) au sein de la suite Ajaris — une solution DAM (Digital Asset Management), produit principal d’Orkis. Ce service a été conçu dans la perspective d’intégrer ultérieurement des fonctionnalités telles que l’indexation automatique des fichiers, l’ajout d’étiquettes ou encore la gestion des métadonnées, dans le but d’optimiser la gestion des fichiers multimédias et d’enrichir les services proposés par Orkis.",
            "zh": "这个项目是我作为Orkis公司的一名员工完成的。目标是在原有的产品API中添加一个新服务，用于检测视频、图像等视觉内容中的对象。这个服务旨在后期为Orkis的DAM（数字资产管理）解决方案 -- Ajaris添加功能，例如自动索引文件、添加标签或管理元数据，以优化多媒体文件的管理并丰富Orkis提供的服务。"
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
}