class InformationModel {
    starRatingData: { subtitle: string; starRating: number; }[];
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
    }
}

export default InformationModel;