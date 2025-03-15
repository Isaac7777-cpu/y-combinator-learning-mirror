import SearchForm from "@/components/SearchForm";

export default async function Home({ searchParams }: {
    searchParams: Promise<{ query?: string }>
}) {
    
    const query = (await searchParams).query;

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

                <SearchForm query={query}/>
            </section>
        </>
    );
}
