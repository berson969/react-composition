import { faker } from "@faker-js/faker";
import { CardType } from "./CardType.ts";

export const cardItems: CardType[] = [...Array(10)].map(() => {
    const hasUrl = Math.random() < 0.6;
    return {
        id: faker.string.uuid(),
        url: hasUrl ? faker.image.url() : undefined,
        name: faker.internet.userName(),
        title: faker.lorem.words(2),
        text: faker.lorem.words(10)
    }
})