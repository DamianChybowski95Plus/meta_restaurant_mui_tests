import HeroSection from "components/sections/HeroSection"
import SpecialsSection from "components/sections/SpecialsSection"
import TestimonialsSection from "components/sections/TestimonialsSection"
import AboutSection from "components/sections/AboutSection"

export default function Home(){
    return(
        <>
            <HeroSection/>
            <SpecialsSection />
            <TestimonialsSection />
            <AboutSection />
        </>
    )
}