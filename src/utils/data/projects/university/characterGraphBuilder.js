export const CharacterGraphBuilder = {
    links: [
        {
            name: "Github",
            link: "https://github.com/Luo-Ying/CharacterGraphBuilder",
        },
    ],
    title: {
        "en": "Automatic Character Network Extraction - Asimov's Foundation",
        "fr": "Extraction automatique de réseau de personnages - Fondation d'Asimov",
        "zh": "自动角色网络提取 - 阿西莫夫基地系列",
    },
    logo: "/images/chapeau-de-graduation.png",
    organization: {
        name: {
            "en": "University project",
            "fr": "Projet académique",
            "zh": "大学项目"
        },
        link: "https://github.com/Luo-Ying/CharacterGraphBuilder",
    },
    imagePreview: "/images/CharacterGraphBuilder/character newwork for chapter 15.png",
    imagesMinSize: "20%",
    images: [
        "/images/CharacterGraphBuilder/character newwork for chapter 15.png",
        "/images/CharacterGraphBuilder/Distribution of entity name in the books.png",
        "/images/CharacterGraphBuilder/statistics table of books.png",
        "/images/CharacterGraphBuilder/Entity name in les_cavernes_d_acier.png",
        "/images/CharacterGraphBuilder/Entity name in prelude_a_fondation.png",
    ],
    simpleInfo: {
        "en": "The objective of this project is to use language processing systems and named entity recognition models to try to automatically build relationship networks between characters in science fiction novels, without the support of human annotations.",
        "fr": "Ce projet vise à construire automatiquement des réseaux relationnels entre personnages de romans SF via le traitement linguistique et la reconnaissance d'entités, sans annotations manuelles.",
        "zh": "本项目的目标是使用语言处理系统和命名实体识别模型，尝试自动构建科幻小说中人物之间的关系网络，而不需要人工标注。"
    },
    introduction: [
        {
            "en": "This project constitutes the first step of research aimed at automatically generating networks of relationships between characters in science fiction novels. The objective is to design and develop a system capable of automatically producing relationship graphs between characters in the field of natural language processing, specifically for science fiction novel series. This system aims to simplify and deepen the understanding and study of literary works. The data used in this project comes from the novels 'The Caves of Steel' and 'Prelude to Foundation' by Isaac Asimov, an American writer of Russian origin and Jewish faith. The analysis is conducted primarily in French.",
            "fr": "Ce projet constitue la première étape d'une recherche visant à générer automatiquement des réseaux de relations entre personnages de romans de science-fiction. L'objectif est de concevoir et développer un système capable de produire automatiquement des graphes de relations entre personnages dans le domaine du traitement automatique du langage naturel, spécifiquement pour les séries de romans de science-fiction. Ce système vise à simplifier et approfondir la compréhension et l'étude des œuvres littéraires. Les données utilisées dans ce projet proviennent des romans 'Les Cavernes d'acier' et 'Prélude à Fondation' d'Isaac Asimov, écrivain américain d'origine russe et de confession juive. L'analyse est réalisée principalement en français.",
            "zh": "该项目是自动生成科幻小说人物关系网络研究的第一步。目标是在自然语言处理领域内，专门为科幻小说系列设计并开发一个能够自动生成人物关系图的系统。此系统旨在简化并深化对文学作品的理解和研究。本项目使用的数据来自美国作家艾萨克·阿西莫夫（俄罗斯裔犹太人）的小说《钢穴》和《基地前奏》。分析主要以法语进行。"
        },
        {
            "en": "The project combines two renowned natural language processing (NLP) libraries, spaCy and FreeLing, to directly identify named entities corresponding to character names in the raw texts. We have also created, based on the specificities of the French language, a corpus of stop words including terms such as 'Space(Space)', 'Merci(Thank you)', 'Excusez-moi(Excuse me)', etc., whose impact on the meaning of the text is negligible. After testing different models and approaches, and analyzing the raw data as well as the statistics of results obtained, we determined an optimal method for preprocessing the data, consisting of segmenting the text into blocks of 25 tokens (words) each.",
            "fr": "Le projet combine deux bibliothèques populaire de traitement du langage naturel (NLP), spaCy et FreeLing, pour identifier directement dans les textes bruts les entités nommées correspondant aux noms de personnages. Nous avons également créé, en nous appuyant sur les spécificités de la langue française, un corpus de mots vides (stop words) comprenant des termes comme 'Space', 'Merci', 'Excusez-moi', etc., dont l'impact sur le sens du texte est négligeable. Après avoir testé différents modèles et approches, et analysé les données brutes ainsi que les statistiques des résultats obtenues, nous avons déterminé une méthode optimale de prétraitement des données, consistant à segmenter le texte en blocs de 25 tokens (mots) chacun.",
            "zh": "项目结合了两个知名的自然语言处理（NLP）库——spaCy和FreeLing，直接从原始文本中识别对应于人物名称的命名实体。我们还基于法语的特性创建了一个停用词语料库，包括\"Sapce（空间）\"、\"Merci（谢谢）\"、\"Excusez-moi（打扰一下）\"等对文本意义影响微乎其微的词汇。在测试了不同的模型和方法，对原始数据和各方案下的结果进行统计后和分析后，我们确定了一种最佳的数据预处理方法，即将文本分割成每段25个词元（单词）的块。"
        },
        {
            "en": "Finally, we obtained all characters appearing in the text by extracting character names from identified named entities, and by lemmatizing the raw text (mainly removing punctuation and filtering using our pre-established stopwords corpus to refine the text). We then created windows of 25 tokens each, establishing relationships between characters appearing in the same window. This allowed us to visually represent the proximity of relationships between different characters in the network through graphs. The results containing all character relationship network information were saved in a file named my_submission.csv and submitted to our pre-established Kaggle group project. By comparing with manually obtained and edited standard answers, we were able to determine the accuracy of our constructed system. Based on the different results obtained, we could modify and adjust our approaches and models, thus optimizing the system and attempting to achieve greater accuracy.",
            "fr": "Finalement, nous avons obtenu tous les personnages présents dans le texte en extrayant les noms de personnages à partir des entités nommées identifiées, et en procédant à la lemmatisation du texte brut (principalement en enlevant la ponctuation et en filtrant avec notre corpus de mots vides préétabli pour raffiner le texte). Nous avons ensuite créé des fenêtres de 25 tokens chacune, établissant des relations entre personnages apparaissant dans la même fenêtre. Cela nous a permis de visualiser graphiquement la proximité des relations entre les différents personnages du réseau. Les résultats contenant toutes les informations des graphes de relations ont été sauvegardés dans un fichier nommé my_submission.csv et soumis à notre projet de groupe Kaggle préétabli. En comparant avec des réponses standard obtenues et éditées manuellement, nous avons pu déterminer la précision de notre système. Sur la base des différents résultats obtenus, nous avons pu modifier et ajuster nos approches et modèles, optimisant ainsi le système pour tenter d'atteindre une plus grande précision.",
            "zh": "最终，我们通过从已识别的命名实体中提取人物名称获取文本内的所有出场人物，并对原生文本进行词型还原（主要指去除标点符号和使用预先建立的停用词语料库进行过滤以对文本进行精简提炼），然后创建每25个词元的窗口，通过窗口出现的人物建立人物之间的对应关系。这使得我们能够以图形方式直观地展示人物关系网络中各角色之间的亲疏关系。包含所有人物关系网络图信息的结果被保存在名为my_submission.csv的文件中，并提交到预先创建的Kaggle小组项目上。通过与人工获取并编辑的标准答案进行对比，我们可以获得构建的系统的正确率。基于每次获得的不同结果，我们可以对方案和模型进行更换与调整，从而优化系统并尝试达到更高的准确率。"
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
                "en": "Python scripts for executing spaCy and FreeLing to extract named entities from the text",
                "fr": "Des scripts Python pour exécuter spaCy et FreeLing afin d'extraire les entités nommées dans le texte",
                "zh": "用于执行spaCy和FreeLing以提取文本中命名实体的Python脚本"
            },
            {
                "en": "A Python script for performing lemmatization, which mainly involves removing punctuation and stopwords",
                "fr": "Un script Python pour réaliser la lemmatisation, qui consiste principalement à supprimer la ponctuation et les mots vides (stopwords)",
                "zh": "用于执行词形还原的Python脚本，主要包括去除标点符号和停用词"
            },
            {
                "en": "A Python script for building fixed-size contextual windows (25 tokens each)",
                "fr": "Un script Python pour construire des fenêtres contextuelles de taille fixe (25 tokens)",
                "zh": "用于构建固定大小（即25个标记）的上下文窗口的Python脚本"
            },
            {
                "en": "A Python script for generating a CSV file containing all character named entity information and the relational distances between them, producing a final file for submission to Kaggle",
                "fr": "Un script Python pour générer un fichier CSV contenant toutes les informations sur les entités nommées des personnages et les distances relationnelles entre eux, produisant un fichier final à soumettre sur Kaggle",
                "zh": "用于生成包含所有人物命名实体信息及其关系距离的CSV文件的Python脚本，最终生成可提交到Kaggle的文件"
            },
            {
                "en": "Finally, a Python script that converts the CSV file containing character relationship networks into a GraphML document, which can be read by specific software to visualize the character relationship network for each chapter",
                "fr": "Enfin, un script Python qui convertit le fichier CSV des réseaux de relations entre personnages en document GraphML, permettant la visualisation des graphes de relations pour chaque chapitre via des logiciels spécifiques",
                "zh": "最后，一个Python脚本用于将包含人物关系网络的CSV文件转换为GraphML文档，该文档可通过特定软件读取并将每个章节的人物关系网络可视化"
            },
        ]
    },
    technologies: [
        {
            name: "Python",
            icone: "/images/DecisionAid/Python.svg"
        },
        {
            name: "Kaggle",
            icone: "/images/DecisionAid/Kaggle.svg"
        },
    ],
    challenges: {
        "en": "...",
        "fr": "...",
        "zh": "..."
    }

}