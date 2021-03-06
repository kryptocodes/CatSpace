import { useRouter } from "next/router"
import { useEffect } from "react"
import { useMeQuery } from "../../generated/graphql"

export const isAuth = () => {
    const [{ data, fetching }] = useMeQuery()
    const router = useRouter()
    useEffect(() => {
        if (!fetching && !data?.me) {
            router.push("/login")
        }
    }, [fetching,data,router])
}