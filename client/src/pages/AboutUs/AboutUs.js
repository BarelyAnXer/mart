import FAQ from "../../Components/FAQ";
import Team from "../../Components/Team";
import Contact from "../../Components/Contact";
import Maps from "../../Maps/Maps";
import CustomModal from "../../Components/CustomModal";

export default function AboutUs() {
    return (
        <>
            <CustomModal name="testname" heading="test" body="lorem ipsum dolor message"/>

            <Team/>

            <FAQ/>

            <Contact/>

            <Maps/>

        </>
    )
}