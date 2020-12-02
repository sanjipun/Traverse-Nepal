import React from 'react';
import styled from 'styled-components';
import img from '../../Assets/bgbysimon.jpg';
import PrimaryButton from '../Button/PrimaryButton';

const StyledDiv = styled.div`
	& h1 {
		color: white;
		font-size: 100px;
	}
	background-image: url(${img});
	width: 100%;
	height: 650px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 960px) {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		& h1 {
			font-size: 70px;
		}
	}
`;
const ButtonDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 960px) {
		display: block;
	}
`;
const H1 = styled.h1`@media (max-width: 960px) {margin-top: 150px;}`;
const Landing = () => {
	return (
		<StyledDiv>
			<div style={{ display: 'block', textAlign: 'center' }}>
				<H1>Visit Nepal 2024</H1>
				<ButtonDiv>
					<PrimaryButton variant='outlined' primary>
						CHECK HOTELS
					</PrimaryButton>
					<PrimaryButton variant='contained'>SEE MORE PICS</PrimaryButton>
				</ButtonDiv>
			</div>
		</StyledDiv>
	);
};

export default Landing;
