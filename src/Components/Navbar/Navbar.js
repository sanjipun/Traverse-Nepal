import { MenuItems } from './MenuItems';
import React, { useState } from 'react';
import Styled from 'styled-components';

const NavbarItems = Styled.nav`
background: linear-gradient(90deg, rgb(110, 94, 254)0%, rgba(110,94,264,1)100%);
height:80px;
display:flex;
justify-content:space-around;
align-items:center;
@media (max-width:960px){
    position:relative;
}
`;

const NavbarLogo = Styled.nav`
color:#fff;
justify-self:start;
margin-left:20px;
cursor:pointer;
@media(max-width:960px){
    position:absolute;
    top:0;
    left:0;
	transform:translate(25%,50%);
	font-size:30px;
}
`;

const MenuIcon = Styled.menu`
color:white;
display:none;
@media(max-width:960px){
	font-size:40px;
	display:flex;
	margin-right:-300px;
	align-items:center;
}
`;

const NavMenu = Styled.ul`
display:grid;
grid-template-columns:repeat(5,auto);
grid-gap:10px;
list-style:none;
text-align:center;
width:70vw;
justify-content:end;
margin-right:2rem;  
@media (max-width:960px){
	display:none;
}
`;

const NavMenuActive = Styled.ul`
display:none;
@media (max-width:960px){	
background-color:#6668f4;
display:flex;
flex-direction:column;
width:100%;
height:90vh;
position:absolute;
top:60px;
left:-40px;
opacity:1;
transition:all 0.5s ease;
}
`;
const NavLinks = Styled.a`
color:white;
text-decoration:none;
padding: 0.5rem 1rem;
&:hover{
    background-color:#6d76f7;
    border-radius:4px;
    transition: all 0.2s ease-out;
}
@media (max-width:960px){
	display:flex;
	align-items:center;
	justify-content:center;
    text-align:center;
	padding:2rem;
    width:100%;
	display:table;
    &:hover{
        background-color:#7577fa;
		border-radius:0;
		width:100%;	
		margin-left:-100px;
    }
}
`;

function Navbar() {
	const [ click, setClick ] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};
	return (
		<div>
			<NavbarItems>
				<NavbarLogo>
					Bag Pac Nep
					<i class='fas fa-suitcase-rolling' style={{ marginLeft: 10 }} />
				</NavbarLogo>
				<MenuIcon onClick={handleClick}>
					<i className={click === true ? 'fas fa-times' : 'fas fa-bars'} />
				</MenuIcon>
				{click === true ? (
					<NavMenuActive>
						{MenuItems.map((item, index) => {
							return (
								<li key={index} style={{ listStyle: 'none' }}>
									<NavLinks className={item.cName} href={item.url}>
										{item.title}
									</NavLinks>
								</li>
							);
						})}
					</NavMenuActive>
				) : (
					''
				)}
				<NavMenu>
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<NavLinks className={item.cName} href={item.url}>
									{item.title}
								</NavLinks>
							</li>
						);
					})}
				</NavMenu>
			</NavbarItems>
		</div>
	);
}

export default Navbar;
