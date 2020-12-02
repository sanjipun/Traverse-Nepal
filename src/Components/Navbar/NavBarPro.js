import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MenuItems } from './MenuItems';
import { slideInRight } from 'react-animations';
import { Waypoint } from 'react-waypoint';

const NavWrapper = styled.div`
	overflow: hidden;
	background-color: ${(props) => (props.bgColor === true ? '#424242' : 'white')};
	transition: all 2s ease;
	position: fixed;
	top: 0;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 18px;
	height: 12vh;
	z-index: 999;
	@media (max-width: 960px) {
		height: 12vh;
	}
`;

const Ul = styled.ul`
	display: grid;
	grid-template-columns: repeat(5, auto);
	grid-gap: 0px;
	list-style: none;
	cursor: pointer;
	@media (max-width: 960px) {
		display: none;
	}
`;

const MenuIcon = styled.div`
	display: none;
	color: #607d8b;
	cursor: pointer;
	@media (max-width: 960px) {
		display: block;
	}
`;

const Slide = keyframes`
${slideInRight}
`;

const BarItemsActive = styled.ul`
	display: none;
	@media (max-width: 960px) {
		margin-top: 70px;
		display: block;
		list-style: none;
		background-color: #212121;
		height: 84vh;
		text-align: center;
		animation: 0.5s ${Slide};
	}
`;

const Li = styled.li`
	padding: 30px;
	color: ${(props) => (props.bgColor === true ? 'white' : '#455a64')};
	transition: all 2s ease;
	font-size: 18px;
	&:hover {
		color: white;
		background-color: black;
		transition: all 1s ease;
	}
`;

const StyledLi = styled.li`
	color: #455a64;
	@media (max-width: 960px) {
		color: white;
		padding: 30px;
		font-size: 18px;
		text-align: center;
		cursor: pointer;
		&:hover {
			background-color: #757575;
		}
	}
`;

const StyledDiv = styled.div`
	cursor: pointer;
	font-size: 30px;
	color: ${(props) => (props.bgColor === true ? 'white' : '#455a64')};
	transition: all 2s ease;
`;

const NavBarPro = () => {
	const [ click, setClick ] = useState(false);
	const [ bgColor, setBgColor ] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};
	return (
		<div style={{ boxShadow: '0px 1px 10px 0px #888888' }}>
			<NavWrapper bgColor={bgColor}>
				<StyledDiv clasName='logo' bgColor={bgColor}>
					Traverse Nepal
					<i class='fas fa-suitcase-rolling' style={{ marginLeft: 10 }} />
				</StyledDiv>
				<div className='nav-items'>
					<Ul>
						{MenuItems.map((item, index) => {
							return (
								<Li key={index} bgColor={bgColor}>
									{item.title}
								</Li>
							);
						})}
					</Ul>
				</div>
				<MenuIcon onClick={handleClick}>
					<i className={click === true ? 'fas fa-times' : 'fas fa-bars'} />
				</MenuIcon>
			</NavWrapper>
			{click === true ? (
				<BarItemsActive>
					{MenuItems.map((item, index) => {
						return <StyledLi key={index}>{item.title}</StyledLi>;
					})}
				</BarItemsActive>
			) : (
				''
			)}
			<Waypoint onEnter={() => setBgColor(false)} onLeave={() => setBgColor(true)} />
		</div>
	);
};

export default NavBarPro;

// BUTTON CLICK HANDLER ALTERNATE WAY
//render() {
//    return (
//      <Transition>
//        <StyledNavbar className={this.state.show ? "active" : "hidden"}>
//		...
//		</StyledNavbar>
//      </Transition>
//    );
//  }

//const Transition = styled.div`
//  .active {
//    visibility: visible;
//    transition: all 200ms ease-in;
//  }
//  .hidden {
//    visibility: hidden;
//    transition: all 200ms ease-out;
//    transform: translate(0, -100%);
//  }
//`;
