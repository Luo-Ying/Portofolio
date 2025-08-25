export const MedicalImageRecognition = {
    links: {
        'title': {
            "en": "Some Links : ",
            "fr": "Quelques Liens : ",
            "zh": "一些链接： ",
        },
        'links': []
    },
    title: {
        "en": "Medical Image Recognition",
        "fr": "Reconnaissance d’images médicales",
        "zh": "医用领域图像识别",
    },
    logo: "/images/personal-growth.png",
    organization: {
        name: {
            "en": "Personal project",
            "fr": "Projet personnel",
            "zh": "个人项目"
        },
        link: "https://github.com/Luo-Ying/ImageRecognition",
    },
    imagePreview: "/images/MedicalImageRecognition/imagePreview.png",
    imagesMinSize: "30%",
    images: [
        "/images/MedicalImageRecognition/imagePreview.png",
        "/images/MedicalImageRecognition/Rlts - MLP.png",
        "/images/MedicalImageRecognition/Rlts - 2D CNN.png",
        "/images/MedicalImageRecognition/Rlts - ResNet50.png",
        "/images/MedicalImageRecognition/Rlts - VGG16.png",
        "/images/MedicalImageRecognition/Rlts - ViT.png",
    ],
    simpleInfo: {
        "en": "A project of medical image recognition made by comparing different AI models.",
        "fr": "Un projet de reconnaissance d’images médicales réalisé en comparant différents modèles d’IA.",
        "zh": "一个使用不同AI模型进行医学图像识别的项目。"
    },
    introduction: [
        {
            "en": "This project was created due to my interest in AI models, particularly in the field of visual content. Its goal was to quickly gain practical understanding of different popular AI models and compare their performance.",
            "fr": "Ce projet a été créé en raison de mon intérêt pour les modèles d'IA, particulièrement dans le domaine du contenu visuel. Son objectif était d'acquérir rapidement une compréhension pratique des différents modèles d'IA populaires et de comparer leurs performances.",
            "zh": "这个项目的制作是源于我当时对AI模型的兴趣，特别是在视觉内容领域。它的目标是快速实践了解不同的流行AI模型并比较它们的性能。"
        },
        {
            "en": "The data is retrieved from the Kaggle platform and consists of a total of 1121 images taken with a phone. These images are divided into 8 classes corresponding to 8 different skin diseases.",
            "fr": "Les données sont récupérées sur la plateforme Kaggle et comprennent un total de 1121 images prises avec un téléphone. Ces images sont réparties en 8 classes correspondant à 8 maladies de peau différentes.",
            "zh": "数据是从Kaggle平台获取的，总共包含1121张手机拍摄的图像。这些图像被分为8个类别，对应8种不同的皮肤疾病。"
        },
        {
            "en": "The available image formats are : JPG, JPEG, WEBP and PNG, with RGB or RGBA color channels.",
            "fr": "Les formats d’image disponibles sont : JPG, JPEG, WEBP et PNG, avec des canaux de couleur RGB ou RGBA.",
            "zh": "包含的图像格式是：JPG、JPEG、WEBP和PNG，具有RGB或RGBA颜色通道。"
        },
        {
            "en": "The data is divided into 809 images for training the models, 80 images for validation and 232 images for testing.",
            "fr": "La répartition des données est la suivante : 809 images pour l’entraînement des modèles, 80 images pour la validation et 232 images pour le test.",
            "zh": "数据被分为809张用于训练模型的图像、80张用于验证的图像和232张用于测试的图像。"
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
                "en": "In this project, 5 different model architectures are tested: MLP, 2D CNN, ResNet50, VGG16, and ViT, using services and libraries provided by Python: the TensorFlow framework, TensorFlow's Keras framework, and the PyTorch framework, as well as the model classes corresponding to the different AI architectures provided by these frameworks.",
                "fr": "Dans ce projet, 5 architectures de modèles différentes sont testées : MLP, CNN 2D, ResNet50, VGG16 et ViT, à l’aide des services et des bibliothèques fournies par Python : le framework TensorFlow, le framework Keras de TensorFlow, et le framework PyTorch, ainsi que les classes de modèles correspondant aux différentes architectures d’IA fournies par ces frameworks.",
                "zh": "在这个项目中，一共有5种不同的模型架构被进行了测试：MLP、2D CNN、ResNet50、VGG16和ViT，使用Python提供的服务和库：TensorFlow框架、TensorFlow的Keras框架和PyTorch框架，以及这些框架提供的对应不同AI架构的模型类。"
            },
            {
                "en": "A data processing phase was carried out to convert the image files into a uniform format using the Python Pillow library: A resolution of 128 × 128 for the MLP and 2D CNN models; A resolution of 224 × 224 for the ResNet50 and VGG16 models; A resolution of 400 × 400 for the ViT model.",
                "fr": "Une phase de traitement des données a été réalisée pour convertir les fichiers image en un format uniforme à l’aide de la bibliothèque Python Pillow : Une résolution de 128 × 128 pour les modèles MLP et CNN 2D ; Une résolution de 224 × 224 pour les modèles ResNet50 et VGG16 ; Une résolution de 400 × 400 pour le modèle ViT.",
                "zh": "在数据处理阶段使用了Python Pillow库将图像文件转换为统一格式：MLP和2D-CNN模型使用128 × 128的分辨率；ResNet50和VGG16模型使用224 × 224的分辨率；ViT模型使用400 × 400的分辨率。"
            },
            {
                "en": "The models are trained based on pre-trained models on large known datasets, such as ImageNet, and then fine-tuned. Subsequently, the performances of these different models are compared.",
                "fr": "- Les modèles sont entraînés en se basant sur des modèles pré-entraînés sur de grands jeux de données connus, tels qu'ImageNet, puis font l'objet d'un fine-tuning. Ensuite, les performances de ces différents modèles sont comparées.",
                "zh": "这些模型是基于在大型已知数据集（如ImageNet）上预训练过的模型上被进行训练，然后进行微调。随后，对这些不同模型的性能进行比较。"
            },
        ]
    },
    technologies: [
        {
            name: "Python",
            icone: "/images/MedicalImageRecognition/Python.svg"
        },
        {
            name: "Tensorflow",
            icone: "/images/MedicalImageRecognition/TensorFlow.svg"
        },
        {
            name: "Pytorch",
            icone: "/images/MedicalImageRecognition/PyTorch.svg"
        },
        {
            name: "Keras",
            icone: "/images/MedicalImageRecognition/Keras.svg"
        },
    ],
    challenges: {
        "en": "...",
        "fr": "...",
        "zh": "..."
    }

}