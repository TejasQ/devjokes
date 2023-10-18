import { AddJoke, models } from '@teamkeel/sdk';

export default AddJoke(async (_, inputs) => {
    await models.joke.create({
        question: inputs.question,
        answer: inputs.answer,
    })
});