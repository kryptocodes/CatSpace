import { useRouter } from "next/router"
import { useEffect } from "react"
import { useMeQuery } from "../../generated/graphql"

export const isUser = () => {
    const [{ data, fetching }] = useMeQuery()
    const router = useRouter()
    useEffect(() => {
        if (data?.me && router.pathname.includes('login')) {
            router.push("/dashboard")
        }
    }, [fetching,data,router])
}