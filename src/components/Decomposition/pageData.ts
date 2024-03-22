import { faker } from "@faker-js/faker";
import PageProps from "./PageProps.ts";

const  pageData: PageProps = {

    banner: {
        src: faker.image.urlPicsumPhotos({ width: 728 , height: 89}),
        name: faker.commerce.productName(),
        href: "#"
    },
};

export default pageData;
