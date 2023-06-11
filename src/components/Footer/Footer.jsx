import FooterColumnHelp from "../FooterColumnHelp/FooterColumnHelp"
import FooterColumnList from "../FooterColumnList/FooterColumnList"
import FooterColumnRRSS from "../FooterColumnRRSS/FooterColumnRRSS"

const Footer = () => {
  return (
    <>
    <div className="footer__container">
     <FooterColumnHelp/>
     <FooterColumnList/>
     <FooterColumnRRSS/>
     </div>
    </>
  )
  //METER COMPONENTES FOOTER. LOS 3 CREADOS
}

export default Footer