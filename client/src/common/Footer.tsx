import React from 'react';
import ShortLogoIcon from '../assets/icons/ShortLogoIcon';

interface FooterUI {}

const Footer = ({}: FooterUI) => {
    return(
        <footer className="bg-neutral-800">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-6 py-6 pl-24 lg:py-8 cursor-pointer">
                    <div className="flex flex-row">
                        <ShortLogoIcon className="mr-4 "/>
                        <div>
                            <h5 className="text-xs font-semibold text-gray-300">STACK OVERFLOW</h5>
                            <ul className="font-medium text-xs text-gray-500 ">
                                <li className="mt-3">Questions</li>
                                <li>Help</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div>
                        <h5 className="text-xs font-semibold text-gray-300">PRODUCTS</h5>
                        <ul className="font-medium text-xs text-gray-500 ">
                            <li className="mt-3">Teams</li>
                            <li>Advertising</li>
                            <li>Collectives</li>
                            <li>Talent</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-xs font-semibold text-gray-300">COMPANY</h5>
                        <ul className="font-medium text-xs text-gray-500 ">
                            <li className="mt-3">About</li>
                            <li>Press</li>
                            <li>Press</li>
                            <li>Work Here</li>
                            <li>Legal</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Contact Us</li>
                            <li>Cookies Settings</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-xs font-semibold text-gray-300">STACK EXCHANGE NETWORK</h5>
                        <ul className="font-medium text-xs text-gray-500 ">
                            <li className="mt-3">About</li>
                            <li>Technology</li>
                            <li>Culture & recreation</li>
                            <li>Lite & arts</li>
                            <li>Science</li>
                            <li>Professional</li>
                            <li>Business</li>
                        </ul>
                        <ul className="font-medium text-xs text-gray-500 mt-3">
                            <li>API</li>
                            <li>Data</li>
                        </ul>
                    </div>
                    <div className="grid grid-rows-2">
                        <div className="font-medium text-xs text-gray-500 ">
                            <ul className="flex flex-row justify-between">
                                <li className="pr-2">Blog</li>
                                <li className="pr-2">Facebook</li>
                                <li className="pr-2">Twitter</li>
                                <li className="pr-2">Linkedin</li>
                                <li className="pr-2">Instagram</li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-end font-medium text-sxs text-gray-500 ">
                            <span>Side design / logo © 2023 Stack Exchange Inc;user</span>
                            <span>contributions licensed under CC BY-SA.</span>
                            <span>rev 2023.6.13.43493</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;