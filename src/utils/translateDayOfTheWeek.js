export function translateDayOfTheWeek(day) {
    switch (day) {
        case "Su":
            return "Вс";
        case "Mo":
            return "Пн";
        case "Tu":
            return "Вт";
        case "We":
            return "Ср";
        case "Th":
            return "Чт";
        case "Fr":
            return "Пт";
        case "Sa":
            return "Сб";
        default:
            console.error("invalid data in translateDayOfTheWeek");
            break;
    }
}
