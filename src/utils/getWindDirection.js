export function getWindDirection(data) {
    if (data > 337.5 || data <= 22.5) {
        return "С";
    } else if (data > 22.5 && data <= 67.5) {
        return "СВ";
    } else if (data > 67.5 && data <= 112.5) {
        return "В";
    } else if (data > 112.5 && data <= 157.5) {
        return "ЮВ";
    } else if (data > 157.5 && data <= 202.5) {
        return "Ю";
    } else if (data > 202.5 && data <= 247.5) {
        return "ЮЗ";
    } else if (data > 247.5 && data <= 292.5) {
        return "З";
    } else if (data > 292.5 && data <= 337.5) {
        return "СЗ";
    }
}
