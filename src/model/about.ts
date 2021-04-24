class AboutModel {
    descriptionData: { subtitle: string; information: string; }[];
    contactData: { subtitle: string; information: string; }[];
    overviewData: { cardLogo: string; cardTitle: string; cardValue: string; }[];

    constructor() {
        this.descriptionData = [
            {
                subtitle: "Bio",
                information: "Computer Science Student’s who loves tempe orek"
            },
            {
                subtitle: "Age",
                information: "20 years old"
            },
            {
                subtitle: "Address",
                information: "Veteran Street, South Bekasi"
            },
        ];

        this.contactData = [
            {
                subtitle: "Email",
                information: "P.Panda@codepanda.id"
            },
            {
                subtitle: "Phone/WA",
                information: "+62-123-456-789"
            },
            {
                subtitle: "Line",
                information: "Panda_Kora"
            },
        ]

        this.overviewData = [
            {
                cardLogo: "icon/overview-1.svg",
                cardTitle: "Projects Done",
                cardValue: "7 Projects"
            },
            {
                cardLogo: "icon/overview-2.svg",
                cardTitle: "Points Earned",
                cardValue: "150 points"
            },
            {
                cardLogo: "icon/overview-3.svg",
                cardTitle: "Skills",
                cardValue: "6 skills"
            },
            {
                cardLogo: "icon/overview-4.svg",
                cardTitle: "Experiences",
                cardValue: "3 experiences"
            },
        ]
    }
}

export default AboutModel;
