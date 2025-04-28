const data = {
    links: [],
    github: "...",
    title: {
        "en": "CloneSportify",
        "fr": "CloneSportify",
        "zh": "CloneSportify",
    },
    logo: "/images/company building.png",
    organization: {
        name: {
            "en": "Personal",
            "fr": "Personal",
            "zh": "Personal"
        },
        link: "https://www.linkedin.com/in/yingqi-luo/",
    },
    imagePreview: "",
    imagesMinSize: "30%",
    images: [
    ],
    simpleInfo: {
        "en": "A clone of Spotify, with a simple interface coding with Java for Android and a Python API.",
        "fr": "Une application mobile simple, codée en Java pour Android, avec une API développée en Python utilisant le middleware ZerocICE.",
        "zh": "一个简单的Spotify克隆app，使用Java编写Android应用程序，并使用Python和中间件ZerocICE开发API。"
    },
    introduction: {
        "en": "",
        "fr": "",
        "zh": ""
    },
    detailsDescription: {
        sentence: {
            "en": "This application includes the following services : ",
            "fr": "Cette application comprend les services suivants : ",
            "zh": "该应用程序包括以下集成服务："
        },
        services: [
            {
                "en": "A FastAPI API, allowing to manage requests and ensure communication between the front-end and the Elasticsearch databases.",
                "fr": "Une API développée avec FastAPI, permettant de gérer les requêtes et d'assurer la communication entre le front-end et les bases de données Elasticsearch.",
                "zh": "一个用FastAPI开发的API，允许管理请求并确保前端和Elasticsearch数据库之间的通信。"
            },
            {
                "en": "- A FTP service is installed on the server to allow the retrieval of files to be processed, depending on the requested services. This same service also allows retrieving files processed by the programs. Once the processing is finished, the API sends a signal to the client to indicate that the result is available on the FTP server. The client can then retrieve the file using the corresponding mission identifier.",
                "fr": "- Un service FTP est installé sur le serveur afin de permettre la récupération des fichiers à traiter, en fonction des services demandés. Ce même service permet également de récupérer les fichiers traités par les programmes. Une fois le traitement terminé, l’API envoie un signal au client pour indiquer que le résultat est disponible sur le serveur FTP. Le client peut alors récupérer le fichier en utilisant l’identifiant de mission correspondant.",
                "zh": "- 一个FTP服务安装在服务器上，允许根据请求的服务检索要处理的文件。这个服务还允许检索被程序处理过的文件。一旦处理完成，API会向客户端发送信号，表示结果已可在FTP服务器上获取。客户端可以使用相应的任务标识符检索文件。"
            },
            {
                "en": "- A Python API developed with FastAPI manages requests related to all additional services offered by Ajaris. It also allows triggering the execution of programs installed on the server, placing them in a processing queue with a mission identifier. Once the mission is added to the queue, the API returns the mission identifier to the client. The latter can then use this identifier to retrieve the result once the processing is finished.",
                "fr": "- Une API Python développée avec FastAPI gère les requêtes liées à l’ensemble des services supplémentaires proposés par Ajaris. Elle permet également de déclencher l’exécution des programmes installés sur le serveur, en les plaçant dans une file d’attente de traitement, avec un identifiant de mission associé. Une fois la mission ajoutée à la file, l’API retourne l’identifiant de mission au client. Ce dernier pourra ensuite utiliser cet identifiant pour récupérer le résultat une fois le traitement terminé.",
                "zh": "- 一个用FastAPI开发的Python API管理与Ajaris提供的所有附加服务相关的请求。它还允许触发安装在服务器上的程序的执行，将它们放置在处理队列中，并分配一个任务标识符。一旦任务被添加到队列中，API会返回任务标识符给客户端。后者可以随后使用该标识符检索结果，一旦处理完成。"
            },
            {
                "en": "- A YOLOv8 object detection model, trained on a small dataset of 80 classes (for a proof of concept – PoC), is integrated into the object detection service. This model allows processing visual contents by returning, in JSON format, the detected objects and their location within these contents.",
                "fr": "- Un modèle de détection d’objets YOLOv8 (You Only Look Once), issu de la librairie Ultralytics et entraîné sur un petit jeu de données comprenant 80 classes (dans le cadre d’une preuve de concept – PoC), est intégré dans le service de détection d’objets. Ce modèle permet de traiter les fichiers contenant des contenus visuels en retournant, au format JSON, les objets détectés ainsi que leur localisation dans ces contenus.",
                "zh": "- 一个YOLOv8对象检测模型，在小型数据集上训练了80个类（用于概念验证 – PoC），并集成到对象检测服务中。该模型允许处理视觉内容，并以JSON格式返回检测到的对象及其在内容中的位置。"
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
            name: "",
            icone: "/images/Object detection/cropped-YOLOv8-removebg-preview-1-300x93.png"
        },
        {
            name: "Ultralytics",
            icone: "/images/Object detection/Ultralytics.svg"
        },
    ],
    challenges: {
        "en": "...",
        "fr": "...",
        "zh": "..."
    }

}