import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
    searchParams: Promise<{ query?: string }>
}) {

    const query = (await searchParams).query;

    const posts = [
        {
            _createdAt: new Date(),
            views: 95,
            author: { _id: 1, name: "Isaac Newton" },
            _id: 1,
            description: "This is a description",
            image: "https://upload.wikimedia.org/wikipedia/en/c/ca/Steins%3BGate_anime_cover.png",
            category: "Anime",
            title: "Anime2 Studio"
        }
    ];

    // We can directly do the search here. 
    // However, given that it likely to require some client side information, it is better to separate that 
    // into a different component and only have that component to be client side rendering.
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
                        posts.map((post: StartupCardType, number) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ): (
                        <p className="no-result">No startups found</p>
                    )}
                </ul>
            </section>
        </>
    );
}
