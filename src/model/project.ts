class projectModel {
    projectData: { logoType: string; cardLogo: string; projectName: string; projectDesc: string; projectDate: string; projectPosition: string; projectLink: string; }[];

    constructor() {
        this.projectData = [
            {
                logoType: "local",
                cardLogo: "project-default-logo.svg",
                projectName: "My Portfolio",
                projectDesc: "Example of my Portfolio",
                projectDate: "April 2021",
                projectPosition: "Frontend Speaker",
                projectLink: "https://github.com/codepandaid/pandafolio/tree/master"
            },
            {
                logoType: "local",
                cardLogo: "logo-circle-panda.png",
                projectName: "Codepanda",
                projectDesc: "codepanda is a platform for creator(developer) and conceptor(client). codepanda focusing towards computer science's student in Bogor Agricultural University as the developer in order to increase their hardskill and softskill. That also push the development bills to the lowest point with average product.",
                projectDate: "2018 - Present",
                projectPosition: "Codepanda Team",
                projectLink: "https://codepanda.id/"
            },
            {
                logoType: "local",
                cardLogo: "logo-circle-panda.png",
                projectName: "Komfolio - Codepanda",
                projectDesc: "Komfolio is a Platform for IPB University Student to Give a Portfolio student who already try to take and finish a reallife project",
                projectDate: "2020 - Present",
                projectPosition: "Codepanda Team",
                projectLink: "http://komfolio.codepanda.id/"
            },
            {
                logoType: "external",
                cardLogo: "https://isessah-sea.herokuapp.com/img/sponsors/1.png",
                projectName: "ISESSAH-SEA 2019",
                projectDesc: "The International Society for Economics and Social Sciences of Animal Health - South East Asia 2019 (ISESSAH-SEA 2019) is a general meeting to connect and update research projects among experts and scientists within the field of social science, animal health and production economics, epidemiologists, veterinarians, medical practitioners and government agencies in the South East Asia region.",
                projectDate: "Jan 2019 - Oct 2019",
                projectPosition: "Frontend Engineer",
                projectLink: "https://isessah-sea.herokuapp.com/"
            },
        ];
    }
}

export default projectModel;