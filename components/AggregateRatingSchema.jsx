const AggregateRatingSchema = ({
    author,
    datePublished,
    description,
    headline,
    image,
    name,
    publisher,
    ratingValue,
    reviewCount,
}) => {

    const json = {
        "@context": "http://schema.org/",
        "@type": "CreativeWorkSeason",
        name,
        description,
        author,
        publisher,
        datePublished,
        headline,
        image,
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue,
            reviewCount
        }
    }

    const jsonString = JSON.stringify(json)

    console.log(json, jsonString)

    return <>
        {
            ratingValue && reviewCount && <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonString }}
            />
        }
    </>
}

export default AggregateRatingSchema
