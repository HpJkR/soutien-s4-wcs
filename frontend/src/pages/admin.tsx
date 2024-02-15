import Layout from "@/components/Layout"
import ProfileForm from "@/components/component/ProfilForm"
import TableComponent from "@/components/component/Table"


export default function Admin() {



    return (
        <Layout pageTitle="Admin">
            <h1>Admin Page</h1>
            <TableComponent />
            <ProfileForm />
        </Layout>
    )
}