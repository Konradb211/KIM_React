import "./NavMobile.modules.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons"

export const NavMobile = () => {
	return (
		<>
			<nav className='navMobile'>
				<div className='navMobile__icons'>
					<FontAwesomeIcon className='icon' icon={faGithub} />
					<FontAwesomeIcon className='icon' icon={faLinkedin} />
					<FontAwesomeIcon className='icon' icon={faSquareInstagram} />
				</div>
				<div className='navMobile__links'>
					<a href='#'>Sekcja1</a>
					<a href='#'>Sekcja2</a>
					<a href='#'>Sekcja3</a>
					<a href='#'>Sekcja4</a>
				</div>
			</nav>
		</>
	)
}
