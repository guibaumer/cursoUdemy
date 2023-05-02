import { useLocation } from "react-router-dom"

export const About = () => {
    const { state } = useLocation();

    return (
        <div>
            <h1>sobre</h1>
            <p>{state as string}</p>
        </div>
    )
}