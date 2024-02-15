import Layout from "@/components/Layout"
import { useProductsQuery } from '@/graphql/generated/schema'
import ProfileForm from "@/components/component/ProfilForm"
import TableComponent from "@/components/component/Table"


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
            <ProfileForm />
            <TableComponent />
        </Layout>
    )
}