// Expose the page on the page /startup/[id]
// Also, we would not want this to be viewing live.
// Indeed, sanity allows for selecting a specific strategy for this one.
// This is known as PPR.

import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/query';
import { client } from "@/sanity/lib/client"
import React from 'react'
import { notFound } from 'next/navigation';

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id;
    const post = await client.fetch(STARTUP_BY_ID_QUERY, {id});

    if (!post) return notFound();

    return (
        <>
            <h1 className='text-3xl'>{post.title}</h1>
        </>
    )
}

export default page
