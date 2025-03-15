import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/query";

export default async function Home({ searchParams }: {
    searchParams: Promise<{ query?: string }>
}) {

    const query = (await searchParams).query;
    const params = {search: query || null };
    const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

    // We can directly do the search here. 
    // However, given that it likely to require some client side information, it is better to separate that 
    // into a different component and only have that component to be client side rendering.
    //
    // It is also important note that any GROQ query or schema can use the sanity type generation 
    // to generate the types automatically. This is why we have left the type undefined for so long.
    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch Your Startup, <br /> Connect With Entrepreneurs
                </h1>
                <p className="sub-heading max-w-3xl!">
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
                </p>

                <SearchForm query={query} />
            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for "${query}"` : 'All Startups'}
                </p>

                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ? (
                        posts.map((post: StartupTypeCard) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ) : (
                        <p className="no-result">No startups found</p>
                    )}
                </ul>
            </section>

            <SanityLive />
        </>
    );
}
