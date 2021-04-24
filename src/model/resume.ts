class resumeModel {
    starRatingData: { subtitle: string; starRating: number; }[];
    educationData: { sectionSubtitle: string; sectionHighlight: string; sectionDesc: string; sectionDate: string; }[];
    experienceData: { sectionSubtitle: string; sectionHighlight: string; sectionDesc: string; sectionDate: string; }[];

    constructor() {
        this.starRatingData = [
            {
                subtitle: "Dart",
                starRating: 3
            },
            {
                subtitle: "Mobile Apps Development",
                starRating: 2.5
            },
            {
                subtitle: "Java",
                starRating: 2
            },
        ];

        this.educationData = [
            {
                sectionSubtitle: "Dart",
                sectionHighlight: "",
                sectionDesc: "Computer Science Departement",
                sectionDate: "2018-present"
            },
            {
                sectionSubtitle: "SMA Negeri 2 Kota Bekasi",
                sectionHighlight: "",
                sectionDesc: "Mathematics and Natural Sciences",
                sectionDate: "2015-2018"
            },
        ];

        this.experienceData = [
            {
                sectionSubtitle: "Computer Lab Assistant",
                sectionHighlight: "IPB University",
                sectionDesc: "Laboratory assistant for Data Structure Course.",
                sectionDate: "February 2021 - present"
            },
            {
                sectionSubtitle: "Head of Public Relations",
                sectionHighlight: "IT TODAY 2020",
                sectionDesc: "Elected as head of the Public Relations Division in IT TODAY 2020. I am Responsible for managing all social media and becoming the face of IT Today 2020 in front of the participants.",
                sectionDate: "February 2020 - October 2020"
            },
            {
                sectionSubtitle: "Head of Public Relations",
                sectionHighlight: "Keluarga Mahasiswa Buddhis IPB",
                sectionDesc: "Elected as head of the Public Relations Division in KMB IPB. I am Responsible for managing all social media and becoming the face of IT Today 2020 in front of the participants.",
                sectionDate: "February 2020 - October 2020"
            },
        ]
    }
}

export default resumeModel;