
export async function fetchNumberFact( value: string, type: "math" | "trivia" | "date"): Promise<string> {
    const url = type === "date" 
    ? `http://numbersapi.com/${value}/date?json`
    : `http://numbersapi.com/${value}/${type}?json`;

    const res = await fetch(url);
    if (!res.ok) console.error("Ошибка обращения к API");
    const data = await res.json();
    return data.text;
}

