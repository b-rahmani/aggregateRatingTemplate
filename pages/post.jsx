import Head from 'next/head'
import AggregateRatingSchema from "../components/AggregateRatingSchema"

const Post = () => {

    const post = {
        author: { value: "autorName" },
        publishedDate: "2022",
        relatedItems: {
            imageUrl: "imageAddress",
            ratings: {
                ratings: 4,
                count: 4
            }
        }

    }
    const seoParameters = {
        metaDescription: "meta description ",
        metaTitle: "meta title",
    }

    return <div>
        <Head>
            <AggregateRatingSchema
                author={post?.author?.value ?? 'admin'}
                datePublished={post?.publishedDate}
                description={seoParameters?.metaDescription}
                headline={seoParameters?.metaTitle}
                image={post?.relatedItems.imageUrl}
                name={seoParameters?.metaTitle}
                publisher={post?.author?.value ?? 'admin'}
                ratingValue={post?.relatedItems.ratings.ratings}
                reviewCount={post?.relatedItems.ratings.count}
            />
        </Head>
        fdfdffdfd
    </div>
}

export default Post
