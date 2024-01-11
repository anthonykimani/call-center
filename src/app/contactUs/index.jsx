import Navbar from "../../components/Navbar"
import FooterAbout from "../About/FooterAbout"
import InfoAbout from "../About/InfoAbout"
import GetInTouchContact from "./GetInTouchContact"

function ContactUs() {
  return (
    <div>
      <Navbar />
      <GetInTouchContact />
      <InfoAbout />
      <FooterAbout />
    </div>
  )
}

export default ContactUs
