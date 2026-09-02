function getBatteryStatus(percentage: number): string {
    if (percentage <= 20) return "Low";
    if (percentage <= 50) return "Medium";
    if (percentage <= 90) return "High";
    return "Full";
}