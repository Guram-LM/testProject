import { useLoaderData } from "react-router-dom"

export const HomePage = () => {

    const cantryData = useLoaderData()

    console.log(cantryData)



    return(
        <div>
            {cantryData.map((cantry: any) => 
                (<div key={cantry.cca2}>
                    <h2>{cantry.name.common} </h2>
                </div>)
            )}
        </div>

        
    )
}
