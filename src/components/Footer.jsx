import React from "react";
import '../styles/footer.css'

function Footer() {
    return (
        <>
            <footer>
                <section id="ContactInfo">
                    <div className="footer">
                    
                        <div className="sectionHeading">
                            <h5 className="display-2 text-center">Contact Information</h5>
                        </div>
                        <div className="info container">
                            <div className="row">
                                <div className="col-md-6 text-left">
                                    <h4>📞 Phone: (+44) 077xx xxxxxx</h4>
                                    <h4>🏡Address: Rmxx, 1 Street, Birmingham B35xxx</h4>
                                    
                                </div>
                                
                                <div className="col-md-6 text-center">
                                <h4>🎂Date of birth: 1/ Jan/1999 </h4>
                                <h4>📧Email:<a href= "mailto:abc@gmailcom"> abv@gmail.com</a> </h4>

                                </div>
                               
                            </div>
                        </div>
                    </div>  
                </section>
            </footer>
        </>
);
}

export default Footer;