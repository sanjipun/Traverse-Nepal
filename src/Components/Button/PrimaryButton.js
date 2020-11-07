import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    padding:15px 30px;
    margin-left:50px;
    font-size: 20px;
    font-weight:bolder;
    border:${({ primary }) => (primary ? '2px solid white' : '')};
    color: ${({ primary }) => (primary ? 'white' : 'black')};
    &:hover{
        
        background-color:${({ primary }) => (primary ? 'white' : 'black')};
        color:${({ primary }) => (primary ? 'black' : 'white')};
        transition:all 0.8s ease;
    }
    @media (max-width:960px){
        margin-top:20px;
    }
`;

function PrimaryButton({ children, variant, primary }) {
	return (
		<div>
			<StyledButton variant={variant} primary={primary}>
				{children}
			</StyledButton>
		</div>
	);
}

export default PrimaryButton;
