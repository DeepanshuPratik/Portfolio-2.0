import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const socialLinks = [
    {icon: <FaGithub/>, path: ""},
    {icon: <FaLinkedinIn/>, path: ""},
    {icon: <FaTwitter/>, path: ""},
    {icon: <FaYoutube/>, path: ""}
]

type SocialsProps = {
    containerStyles: string;
    iconStyles: string;
};

const Socials: React.FC<SocialsProps> = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socialLinks.map((item, index)=> {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>
  )
}

export default Socials
