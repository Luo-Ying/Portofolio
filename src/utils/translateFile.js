const dict = {
    en: {
        language: "en",
        activeTabHome: "Home",
        activeTabProjects: "Projects",
        activeTabContact: "Contact",
        profileName: "Yingqi LUO",
        profileTitle: "Full Stack Developer",
        profileLocation: "Monpellier, France",
        introSection: {
            title: "Introduction",
            content: {
                p1: "I am a passionate Full Stack engineer with a master's degree in computer science and over two years of experience in web and mobile application development.",
                p2: "Expert in front-end and back-end development, with strong experience in API and service design, I have designed and implemented modular architectures, optimized performance, and ensured code quality."
            }
        },
        exproSection: {
            title: "Professional Experience",
            experiences: [
                {
                    title: "Ingénieur Full Stack",
                    company: "ORKIS",
                    location: "Aix-en-Provence, France",
                    period: "May 2022 - Sept 2024",
                    responsibilities: [
                        { title: "Full-Stack Development with React and Node.js of a video management platform", importance: 0.3 },
                        { title: "Mobile app development with Flutter", importance: 0.7 }
                    ]
                }
            ]
        }
    },
    fr: {
        language: "fr",
        activeTabHome: "Accueil",
        activeTabProjects: "Projets",
        activeTabContact: "Contact",
        profileName: "Yingqi LUO",
        profileTitle: "Développeur Web Full Stack",
        profileLocation: "Monpellier, France",
        introSection: {
            title: "Introduction",
            content: {
                p1: "Je suis une ingénieure Full Stack passionnée, titulaire d’un master en informatique, avec plus de deux ans d’expérience dans le développement d’applications web et mobiles.",
                p2: "Expert en développement front-end et back-end, forte d'une expérience en conception d'API et de services, j'ai conçu et implémenté des architectures modulaires, optimisé les performances et assuré la qualité du code.",
            }
        },
        exproSection: {
            title: "Expérience Professionnelle",
            experiences: [
                {
                    title: "Ingénieur Full Stack",
                    company: "ORKIS",
                    location: "Aix-en-Provence, France",
                    period: "Mai 2022 - Sept 2024",
                    responsibilities: [
                        { title: "Développement Full-Stack React et Node.js d’un client métier spécialisé pour la gestion vidéo", importance: 0.3 },
                        { title: "Développement Flutter d’un client mobile", importance: 0.7 }
                    ]
                }
            ]
        }
    },
    zh: {
        language: "zh",
        activeTabHome: "首页",
        activeTabProjects: "项目",
        activeTabContact: "联系",
        profileName: "罗映琦",
        profileTitle: "全栈开发工程师",
        profileLocation: "法国, 蒙彼利埃",
        introSection: {
            title: "自我介绍",
            content: {
                p1: "我是一名全栈工程师，拥有计算机科学硕士学位，在网页和移动应用程序开发方面有超过两年的经验。",
                p2: "作为前端和后端开发者，凭借丰富的API和服务设计经验和学识，我设计并实现过一些模块化架构，并在优化性能，和确保代码质量的方面有过不少经验。"
            }
        },
        exproSection: {
            title: "工作经验",
            experiences: [
                {
                    title: "全栈开发工程师",
                    company: "ORKIS",
                    location: "法国，艾克斯",
                    period: "2020年五月 - 2022年九月",
                    responsibilities: [
                        { title: "使用React和Node.js进行全栈开发，打造一个用于视频管理的网页平台", importance: 0.3 },
                        { title: "使用Flutter开发一个移动客户端", importance: 0.7 }
                    ]
                }
            ]
        }
    }
}

export default dict;