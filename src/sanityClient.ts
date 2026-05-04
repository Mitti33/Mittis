import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'k54zbeck',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-01-01'
})