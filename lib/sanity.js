import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: 'km4d7bm7',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'ske8uO873ZyvhjV2YN6ScAtGOGPKVDBX764z8nb95SBnOoafe4KluP6eybCRVKtmvlrcbrQbjEWFuDqj8xnPKc68OTd4bvtUtvUvkCeKj4wuxApHEve62wmOJ2YZrYMaPZF1KaoObEQ3CKUZdZYqzIe51WC2dW7WZqGIllwKy6UNG1gThjQn',
    useCdn: false,
})