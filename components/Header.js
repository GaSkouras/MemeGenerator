import React from "react"

function Header() {
	const firstname = "Ra"
	const lastname = "Skou"

	return (
			<header className="navbar"> { firstname + " "  + lastname }</header>
	)
}	


export default Header