type Light = "red" | "yellow" | "green";

function getTrafficAction(light: Light): string {
    if (light === "red") return "Stop";
    if (light === "yellow") return "Slow Down";
    return "Go";
}