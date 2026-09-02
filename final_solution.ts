//Problem-01: Battery Level Status
function getBatteryStatus(percentage: number): string {
    if (percentage <= 20) return "Low";
    if (percentage <= 50) return "Medium";
    if (percentage <= 90) return "High";
    return "Full";
}

//Problem-02: Table Booking Confirmation
interface Booking {
    name: string;
    guests: number;
    time: string;
}

function formatBookingConfirmation(booking: Booking): string {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}

//Problem-03: Weekly Expense Tracker
function calculateWeeklyTotal(expenses: number[]): number {
    return expenses.reduce((total, expense) => total + expense, 0);
}

//Problem-04: Traffic Light Action
type Light = "red" | "yellow" | "green";

function getTrafficAction(light: Light): string {
    if (light === "red") return "Stop";
    if (light === "yellow") return "Slow Down";
    return "Go";
}

//Problem-05: Quiz Score Summary
interface QuizSummary {
    total: number;
    average: number;
}

function getQuizSummary(scores: number[]): QuizSummary {
    if (scores.length === 0) {
        return { total: 0, average: 0 };
    }

    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = total / scores.length;

    return {
        total,
        average
    };
}
