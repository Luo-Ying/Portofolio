export const FrancePublicMarket = {
    links: [
        {
            name: "Github",
            link: "https://github.com/Luo-Ying/BiApplication-DataMining-FrancePublicProcurement",
        },
    ],
    title: {
        "en": "Application BI (Data Mining) - France Public Market",
        "fr": "Application BI (Data Mining) - Marché public français",
        "zh": "应用BI（数据挖掘）- 法国公共市场",
    },
    logo: "/images/chapeau-de-graduation.png",
    organization: {
        name: {
            "en": "University",
            "fr": "Académique",
            "zh": "大学项目"
        },
        link: "https://github.com/Luo-Ying/BiApplication-DataMining-FrancePublicProcurement",
    },
    imagePreview: "/images/francePublicMarket/Buy and sell data.png",
    imagesMinSize: "20%",
    images: [
        "/images/francePublicMarket/Department buy data.png",
        "/images/francePublicMarket/Department sell data.png",
        "/images/francePublicMarket/Buyers and sellers communication top.png",
        "/images/francePublicMarket/Buyers communication top.png",
        "/images/francePublicMarket/Sellers communication top.png",
        "/images/francePublicMarket/Outgoing monistream top 50 data.png",
        "/images/francePublicMarket/Ingoing monistream top 50 data.png",
    ],
    simpleInfo: {
        "en": "This project is realized in the context of Data Mining and Application BI. It aims to clean, visualize and analyze the data of the French public market using tools like Pandas, Matplotlib, Seaborn, etc.",
        "fr": "Ce project est réaliser dans le cadre de Data Mining et d'Application BI. Il a pour objectif de nettoyer, de visualiser et d'analyser les données de marché public de France à l'aide d'outils comme Pandas, Matplotlib, Seaborn, etc.",
        "zh": "该项目是在数据挖掘和应用BI框架下完成的。它的目标是使用Pandas、Matplotlib、Seaborn等工具对法国公共市场的数据进行清洗、可视化和分析。"
    },
    introduction: [
        {
            "en": "This project aims to clean, visualize and analyze data related to public procurement in order to reveal underlying information and patterns, and to answer relevant questions in this field using available data. The large-scale data used comes from the public FOPPA database, which collects tender notices and contract awards for public procurement in France between 2010 and 2020.",
            "fr": "Ce projet a pour objectif de nettoyer, de visualiser et d’analyser les données relatives aux marchés publics afin de faire émerger des informations et des modèles sous-jacents, et de répondre à des questions pertinentes dans ce domaine à partir des données disponibles. Les données volumineuses exploitées proviennent de la base publique FOPPA, qui regroupe les avis d’appel d’offres et d’attribution des marchés publics en France entre 2010 et 2020.",
            "zh": "该项目旨在清理、可视化和分析与公共采购相关的数据，以揭示潜在的信息和模式，并使用可用数据回答该领域中的相关问题。所使用的大规模数据来自公共FOPPA数据库，该项目是用了数据库收集的在2010年至2020年间法国公共采购的招标通知和合同授予信息。"
        },
        {
            "en": "The main objective is to conduct a descriptive analysis of this data to better understand the dynamics of public procurement. This analysis allows for some flexibility in the exploration axes, while globally aiming to identify characteristics, trends, and potential anomalies in French public procurement.",
            "fr": "L’objectif principal est de réaliser une analyse descriptive de ces données afin de mieux comprendre les dynamiques des marchés publics. Cette analyse permet une certaine flexibilité dans les axes d’exploration, tout en visant globalement à identifier les caractéristiques, les tendances et les anomalies potentielles dans les marchés publics français.",
            "zh": "主要目标是对这些数据进行描述性分析，以更好地理解公共采购的动态。这种分析在探索方向上提供了一定的灵活性，同时整体上旨在识别法国公共采购中的特征、趋势和潜在异常。"
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
                "en": "A sqlite database containing the French public market data between 2010 and 2020 is provided.",
                "fr": "Une base de données en sqlite qui contient les données de marché public de France entre 2010 et 2020 est fournie.",
                "zh": "一个包含2010年至2020年间法国公共市场数据的sqlite数据库被提供。"
            },
            {
                "en": "A python script to read the SQL database was integrated, using sqlite3 and pandas.",
                "fr": "Un script python pour lire la base de données SQL a été intégré, en utilisant les outils sqlite3 et pandas.",
                "zh": "一个python脚本用于读取SQL数据库，使用sqlite3和pandas。"
            },
            {
                "en": "Python scripts were developed to compare the data from the public API with those of the SQLite database, in order to identify and keep the most reliable data possible.",
                "fr": "Des scripts Python ont été développés pour comparer les données issues de l’API publique avec celles de la base de données SQLite, dans le but d’identifier et de conserver les données les plus fiables possibles.",
                "zh": "一些开发出来的Python脚本以进行比较网上获取的公共API数据和SQLite数据库中的数据，以便识别和保留最可靠的数据。"
            },
            {
                "en": "Python scripts were integrated to perform the first step of data visualization and feature extraction, applying descriptive statistics to different variables using tools such as pandas, matplotlib, numpy, and seaborn, to facilitate analysis.",
                "fr": "Des scripts Python ont été intégrés pour réaliser une première étape de visualisation et d’extraction des caractéristiques des données, en appliquant des statistiques descriptives aux différentes variables, à l’aide d’outils tels que pandas, matplotlib, numpy et seaborn, afin de faciliter l’analyse.",
                "zh": "一些开发出来的Python脚本以进行数据可视化和特征提取的第一步，使用pandas、matplotlib、numpy和seaborn等工具对不同变量应用描述性统计，以便于分析。"
            },
            {
                "en": "Python scripts were integrated to perform the data cleaning process, including the removal of anomalies and duplicates, and the correction of outliers using statistical methods adapted to the nature of the variables, using tools such as numpy.",
                "fr": "Des scripts Python ont été intégrés pour effectuer le traitement des données, notamment leur nettoyage : suppression des anomalies et des doublons, et correction des valeurs aberrantes à l’aide de méthodes statistiques adaptées à la nature des variables, en utilisant des outils tels que numpy.",
                "zh": "一些开发出来的Python脚本以进行数据清洗过程，包括删除异常和重复数据，以及使用适应变量性质的统计方法修正异常值，使用工具如numpy。"
            },
            {
                "en": "Python scripts were integrated to associate relevant data, in order to answer the analysis objectives and to allow their visualization using tools such as pandas, geopandas, matplotlib, numpy and seaborn.",
                "fr": "Des scripts Python, combinant notamment des requêtes SQL, ont été intégrés afin d’associer les données pertinentes, dans le but de répondre aux objectifs d’analyse et de permettre leur visualisation à l’aide d’outils tels que pandas, geopandas, matplotlib, numpy et seaborn.",
                "zh": "一些开发出来的Python脚本用来将相关数据关联起来，以便分析回答目标问题，并使用pandas、geopandas、matplotlib、numpy和seaborn等工具进行可视化。"
            },
        ]
    },
    technologies: [
        {
            name: "Python",
            icone: "/images/francePublicMarket/Python.svg"
        },
        {
            name: "SQLite",
            icone: "/images/francePublicMarket/SQLite.svg"
        },
        {
            name: "Pandas",
            icone: "/images/francePublicMarket/Pandas.svg"
        },
        {
            name: "Matplotlib",
            icone: "/images/francePublicMarket/Matplotlib.svg"
        },
        {
            name: "Numpy",
            icone: "/images/francePublicMarket/Numpy.svg"
        },
    ],
    challenges: {
        "en": "...",
        "fr": "...",
        "zh": "..."
    }

}