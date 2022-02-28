import * as prismic from '@prismicio/client';

export const getPrismicClient = async (req?: unknown) => {
    const client = prismic.createClient('https://gabrielvalin.prismic.io/api/v2')
    return client
}
