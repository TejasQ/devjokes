import { ValidateJoke, permissions } from "@teamkeel/sdk";
import OpenAI from "openai";

export default ValidateJoke(async (ctx, inputs) => {
  permissions.allow();

  const question = inputs.question;

  // Question must contain multiple words and end with a question mark
  if (question.split(" ").length < 3 || !question.endsWith("?")) {
    return { valid: false };
  }

  // If we have an answer validate it all together
  if (inputs.answer) {
    const openai = new OpenAI({
      apiKey: ctx.secrets.OPENAI_API_KEY,
    });

    const prompt = `
	For this joke:

	Question: ${inputs.question}
	Answer: ${inputs.answer}
	
	Does it make sense as a joke?
	Response only with json in for format of 
	{ valid: true | false }
	No other message
	`;

    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    };
    const chatCompletion: OpenAI.Chat.ChatCompletion =
      await openai.chat.completions.create(params);

    const res = chatCompletion.choices[0].message.content;

    // Is something goes wrong let's give them the benefit of the doubt
    const defaultResponse = { valid: true };

    if (!res) return defaultResponse;

    let parsedRes;
    try {
      parsedRes = JSON.parse(res);
    } catch (e) {
      console.log("couldn't parse the response as json", res, e);
      return defaultResponse;
    }

    if (typeof parsedRes.valid == "boolean") {
      return { valid: parsedRes.valid };
    } else {
      console.log("response didn't contain a bool value", parsedRes);
      return defaultResponse;
    }
  }

  return { valid: true };
});
