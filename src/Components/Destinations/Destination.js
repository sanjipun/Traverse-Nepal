import React from 'react';
import styled from 'styled-components';
import Places from './Places';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';

const StyledImg = styled.img`
	height: 290px;
	width: auto;
	&:hover {
		transform: scale(1.2);
		transition: all 1s ease;
	}
`;

const StyledCard = styled(Card)`
    height:450px;
    width:600px;
    text-align:center;
    
`;

const StyledGrid = styled(Grid)`
display:flex;
justify-content:center;
align-items:center;
@media (max-width:960px){
    position: relative;
    left:0;
    top:0;
    transform:translate(3%,50%);
}
`;
const MainGrid = styled(Grid)`
margin-top:100px;
@media (max-width:960px){
    margin-top:-200px;
}
`;

const Destination = () => {
	return (
		<div style={{ textAlign: 'center', marginTop: '100px' }}>
			<h1>Destinations</h1>

			<MainGrid container>
				<Grid item xs={0} sm={1} />
				<Grid container spacing={4} xs={12} sm={10}>
					{Places.map((place) => {
						return (
							<StyledGrid
								item
								xs={12}
								sm={4}
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<StyledCard>
									<StyledImg src={place.imgSrc} alt={place.title} />
									<h1>{place.title}</h1>
									<h2>{place.TrekTime}</h2>
								</StyledCard>
							</StyledGrid>
						);
					})}
				</Grid>
				<Grid item xs={0} sm={1} />
			</MainGrid>
		</div>
	);
};

export default Destination;
