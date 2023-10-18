import { GetRandomJoke, GetRandomJokeHooks, models } from '@teamkeel/sdk';

// To learn more about what you can do with hooks,
// visit https://docs.keel.so/functions
const hooks: GetRandomJokeHooks = {
    beforeQuery: async () => {
        const jokes = await models.joke.findMany();
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const randomJoke = jokes[randomIndex];
        return randomJoke;
    }
};

export default GetRandomJoke(hooks);
