import { useState } from "react"

const Section = ({title, desc}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="border border-black p-2 m-2 ">
            <h3>{title}</h3>
            <button onClick={() => setIsVisible(!isVisible)}>{!isVisible ? 'Show' : 'Hide'}</button>
            {isVisible && <p>{desc}</p>}
        </div>
    )
}
const Instamart = () => {
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>

            <Section title={"About Instamart"}
                desc={"This is About section of Instamart"} />

            <Section title={"About Instamart"}
                desc={"This is Team section of Instamart"} />
            
            <Section title={"Careers"}
                desc={"This is Career section of Instamart"} />
        </div>
    )
}

export default Instamart;