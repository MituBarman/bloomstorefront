import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import Copyright from "./Copyright/Copyright"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Logo from "@modules/common/components/logo"
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className=" bg-black flex-col items-center w-full">
      <LocalizedClientLink  href={"/"}>
      <Logo  size={80} />

      </LocalizedClientLink>
     <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-around items-start p-4 space-y-8 md:space-y-0 text-white">
        <address className="flex flex-col gap-2">
          <a href="https://maps.app.goo.gl/UNacwa7j832JnsTB8">
            Address: N.T. Road, Shakhina Market, <br />
            Lakhimpur, 787001, Assam
          </a>
          <a href="mailto:chumkee7005@gmail.com">Email: support@bloombyc.com</a>
          <a href="tel:+917636079741">Phone: +91 7636079741</a>
        </address>
        <nav>
          <ul className="space-y-2">
            <li><a href="/policies/privacy-policy">Privacy Policy</a></li>
            <li><a href="/policies/return-and-refunds">Returns + Exchanges</a></li>
            <li><a href="/policies/shipping-policy">Shipping</a></li>
            <li><a href="/policies/terms-and-conditions">Terms & Conditions</a></li>
          </ul>
        </nav>
        <div>
          <h2 className="text-lg font-bold">About Bloom By C</h2>
          <ul className="space-y-2">
            <li><a href="/about">Learn More About Us</a></li>
            <li><a href="https://maps.app.goo.gl/UNacwa7j832JnsTB8">Visit Our Store</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
         {/* <div className=" flex items-center justify-around w-full">
          <a
            href="https://www.facebook.com/chumkee.chakraborty.3"
            target="_blank"
          >
            <FaFacebook size={"24px"} color="black" />
          </a>
          <a href="https://www.instagram.com/bloom.by.c/" target="_new">
            <FaInstagram size={"24px"} color="black" />
          </a>
          <a href="mailto:chumkee7005@gmail.com">
            <FaEnvelope size={"24px"} color="black" />
          </a>
          <a href="tel:+917636079741">
            <FaPhone size={"24px"} color="black" />
          </a>
        </div>  */}
      </section>




       
      
<Copyright />          
        

    </footer>
  )
}
