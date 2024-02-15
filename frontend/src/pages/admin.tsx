import Layout from "@/components/Layout"
import { useProductsQuery } from '@/graphql/generated/schema'

export default function Admin() {

    const { data } = useProductsQuery({})

    return (
        <Layout pageTitle="Admin">
            <h1>Admin Page</h1>
            <div>{data?.products.map((product) =>
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.id}</p>
                </div>
            )}</div>
        </Layout>
    )
}