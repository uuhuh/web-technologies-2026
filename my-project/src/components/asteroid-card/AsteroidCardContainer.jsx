import { useContext, useCallback, memo } from "react"
import { AsteroidsContext } from "../../contexts/AsteroidContext"
import { AsteroidsCard } from "./AsteroidCard"

export const AsteroidCardContainer = (props)=>{

    const { appState, dispatch } = useContext(AsteroidsContext)

    const isAdded = appState.destroyment.find((it) => it.id === props.id)

    const onDestroymentClick = useCallback((asteroid) => {
        dispatch({ type: "ADD_DESTROYMENT", payload:asteroid })
    }, [])

    return (
        <AsteroidCard 
            {...props} 
            isAdded={isAdded} 
            onDestroymentClick={onDestroymentClick}
        />
    ) 
}