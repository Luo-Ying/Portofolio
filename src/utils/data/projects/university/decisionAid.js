export const DecisionAid = {
    links: [
        {
            name: "Github",
            link: "https://github.com/Luo-Ying/Decision-Aid",
        },
    ],
    title: {
        "en": "Decision Aid - Which country is the best to live in?",
        "fr": "Aide à la décision - Quel pays optimal à vivre ?",
        "zh": "决策助手 - 哪个国家最适合居住？",
    },
    logo: "/images/chapeau-de-graduation.png",
    organization: {
        name: {
            "en": "University project",
            "fr": "Projet académique",
            "zh": "大学项目"
        },
        link: "https://github.com/Luo-Ying/Decision-Aid",
    },
    imagePreview: "/images/DecisionAid/profiles' criteria.png",
    imagesMinSize: "20%",
    images: [
        "/images/DecisionAid/profiles' criteria.png",
        "/images/DecisionAid/Somme pondérée.png",
        "/images/DecisionAid/Promethee ii - sans seuil.png",
        "/images/DecisionAid/Promethee ii - avec seuil.png",
        "/images/DecisionAid/Topsis.png",
    ],
    simpleInfo: {
        "en": "This project aims to analyze and calculate food-related data using different decision algorithms, to evaluate and rank countries based on their suitability to the dietary needs of different user profiles, thus identifying the country that best meets their specific criteria.",
        "fr": "Ce projet utilise des algorithmes de décision pour analyser des données alimentaires et classer les pays selon leur adéquation aux besoins alimentaires de différents profils, identifiant ainsi le pays le plus adapté à leurs critères.",
        "zh": "本项目旨在通过不同的决策算法，对提供的饮食相关数据进行分析与计算，为具有不同饮食标准的目标群体，评估并排序各国在饮食方面的适宜程度，从而找出最适合其居住的国家。"
    },
    introduction: [
        {
            "en": "This project aims to implement various multi-criteria optimization algorithms in the context of decision support. The main objective is to establish a ranking of countries based on their consumption levels of animal and vegetable fats, in order to identify the most suitable countries for living according to the preferences of different dietary profile groups.",
            "fr": "Ce projet vise à mettre en œuvre divers algorithmes d'optimisation multicritère dans le cadre de l'aide à la décision. L'objectif principal est d'établir un classement des pays en fonction de leur niveau de consommation de graisses animales et végétales, afin d'identifier les pays les plus adaptés à la vie selon les préférences des différents groupes de profils alimentaires.",
            "zh": "本项目旨在在决策支持框架下实施各种多标准优化算法。主要目标是根据各国饮食方面的动植物油脂消耗水平建立排名，以确定根据不同饮食特征群体的偏好选出其最适合居住的国家。"
        },
        {
            "en": "The methods used in this study include weighted sum, PROMETHEE I and II methods (with and without preference thresholds), TOPSIS method, as well as ELECTRE IS method, applied without veto thresholds.",
            "fr": "Les méthodes utilisées dans cette étude incluent notamment la somme pondérée, les méthodes PROMETHEE I et II (avec et sans prise en compte des seuils de préférence), la méthode TOPSIS, ainsi que la méthode ELECTRE IS, appliquée sans seuils de veto.",
            "zh": "本研究使用的方法包括加权求和法、PROMETHEE I和II方法（考虑和不考虑偏好阈值）、TOPSIS方法，以及ELECTRE IS方法（不应用否决阈值）。"
        },
        {
            "en": "All algorithms were tested on a dataset from Kaggle -- 《COVID-19 Healthy Diet Dataset》, allowing for a comparative evaluation of their effectiveness and relevance according to the studied cases.",
            "fr": "L'ensemble des algorithmes a été testé sur un jeu de données issu du site Kaggle -- 《COVID-19 Healthy Diet Dataset》, permettant une évaluation comparative de leur efficacité et de leur pertinence selon les cas étudiés.",
            "zh": "所有算法都在Kaggle网站上获取的《COVID-19 Healthy Diet Dataset》数据集上进行了测试，使我们能够根据研究案例对其有效性和相关性进行比较评估。"
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
                "en": "First, we analyzed and preprocessed the data. During this process, we removed two features with extremely low proportions, both of which had maximum, median, and mean values close to zero, which had little impact on the overall analysis. Additionally, we removed features that were less relevant to the research topic, such as Obesity, Undernourished, Confirmed, Deaths, Recovery, and Active.",
                "fr": "Tout d'abord, nous avons analysé et prétraité les données. Durant cette étape, nous avons supprimé deux caractéristiques avec des proportions extrêmement faibles, dont les valeurs maximales, médianes et moyennes étaient presque nulles, ce qui n'avait qu'un impact mineur sur l'analyse globale. De plus, nous avons supprimé des caractéristiques qui étaient moins pertinentes pour le sujet de recherche, comme Obésité, Malnutrition, Confirmer, Mort, Récupération et Actif.",
                "zh": "首先，我们对数据进行了分析与预处理。在此过程中，移除了两个占比极小的特征，这两个特征的最大值、中位数和均值均近似为零，对整体分析几乎没有影响。此外，我们还剔除了一些与本项目研究主题关联性较弱的特征，例如：Obesity、Undernourished、Confirmed、Deaths、Recovery 和 Active。"
            },
            {
                "en": "Next, we defined three representative groups based on different dietary preferences and set corresponding percentage preference standards for each group according to their preferences in different dietary characteristics.",
                "fr": "Ensuite, nous avons défini trois groupes représentatifs basés sur différents préférences alimentaires et avons fixé des normes de préférence en pourcentage correspondantes pour chaque groupe en fonction de leurs préférences dans différentes caractéristiques alimentaires.",
                "zh": "随后，我们根据不同的饮食偏好，定义了三个具有代表性的群体，并针对每个群体在不同饮食特征上的偏好，设定了相应的百分比偏好标准。"
            },
            {
                "en": "After completing the data analysis and preprocessing, and setting the preference characteristics for different target groups, we wrote and ran the corresponding calculation scripts based on multiple decision algorithms to obtain the final results.",
                "fr": "Après avoir terminé l'analyse et le prétraitement des données, et avoir défini les caractéristiques de préférence pour différents groupes cible, nous avons écrit et exécuté les scripts de calcul correspondants basés sur plusieurs algorithmes de décision pour obtenir les résultats finaux.",
                "zh": "在完成数据分析与预处理，并设定了不同目标群体的偏好特征之后，我们基于多种决策算法编写并运行相应的计算脚本，从而得出最终结论。"
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