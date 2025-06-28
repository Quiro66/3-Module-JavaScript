const KEY = window.env.api_key_gpt;

async function getCompletion(prompt) {
    const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: prompt },
                {
                    role: "system",
                    content: "There was an error processing your request. Check the console for more details.",
                },
            ],
            max_tokens: 200,
            temperature: 0.9,
        }),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Error en la API: ${error}`);
    }

    return await response.json();
}

const prompt = document.querySelector("#prompt");
const button = document.querySelector("#generate");
const output = document.querySelector("#output");

button.addEventListener("click", async () => {
    console.log(prompt.value);

    if (!prompt.value) {
        window.alert("Please enter a prompt");
        return;
    }

    try {
        const response = await getCompletion(prompt.value);
        console.log(response);
        output.innerHTML = response.choices[0].message.content;
    } catch (error) {
        console.error(error);
        window.alert("There was an error processing your request. Check the console for more details.");
    }
});