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
    const [sectionConfig, setSectionConfig] = useState({
        showAbout: false,
        showTeam: false,
        showCareers: true
    });
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>

            <Section title={"About Instamart"}
                desc={"This is About section of Instamart"} 
                isVisible={sectionConfig.showAbout}
                setIsVisible={() => setSectionConfig({
                    showAbout: true,
                    showTeam: false,
                    showCareers: false
                })}
                />

            <Section title={"About Instamart"}
                desc={"This is Team section of Instamart"} 
                isVisible={sectionConfig.showTeam}
                setIsVisible={() => setSectionConfig({
                    showAbout: false,
                    showTeam: true,
                    showCareers: false
                })}/>
            
            <Section title={"Careers"}
                desc={"This is Career section of Instamart"} 
                isVisible={sectionConfig.showCareers}
                setIsVisible={() => setSectionConfig({
                    showAbout: false,
                    showTeam: false,
                    showCareers: true
                })}/>
        </div>
    )
}

export default Instamart;