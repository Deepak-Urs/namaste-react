import { useState } from "react"

const Section = ({title, desc, isVisible, setIsVisible}) => {
    return (
        <div className="border border-black p-2 m-2 ">
            <h3>{title}</h3>
            <button onClick={() => setIsVisible()}>{!isVisible ? 'Show' : 'Hide'}</button>
            {isVisible && <p>{desc}</p>}
        </div>
    )
}
const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("");
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>

            <Section title={"About Instamart"}
                desc={"This is About section of Instamart"} 
                isVisible={visibleSection === "about"}
                setIsVisible={() => {
                    if(visibleSection !== "about") {
                        setVisibleSection("about")
                    }
                    else {
                        //setVisibleSection("")
                        //Section.isVisible = false
                        //setVisibleSection(false)
                    }}}
                />

            <Section title={"About Instamart"}
                desc={"This is Team section of Instamart"} 
                isVisible={visibleSection === "team"}
                setIsVisible={() => {
                    if(visibleSection !== "team") {
                        setVisibleSection("team")
                    }
                    else {
                        //Section.isVisible = false
                        //setVisibleSection("")
                        //setVisibleSection(false)
                    }}}/>
            
            <Section title={"Careers"}
                desc={"This is Career section of Instamart"} 
                isVisible={visibleSection === "careers"}
                setIsVisible={() => {
                    if(visibleSection !== "careers") {
                        setVisibleSection("careers")
                    }
                    else {
                        //Section.isVisible = false
                        //setVisibleSection("")
                        //setVisibleSection(false)
                    }}}/>
        </div>
    )
}

export default Instamart;