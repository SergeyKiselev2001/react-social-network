import { Suspense } from "react"


const SuspenseHOC = Comp => {

    return (props) => {
        return (
            <Suspense fallback={<h2>Loading...</h2>}>
                <Comp {...props}/>
            </Suspense>
        )
    }
}

export default SuspenseHOC;