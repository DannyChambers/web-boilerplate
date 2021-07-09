import React from "react";
import styled, { css } from "styled-components";

const HomePage = (props) => {
	return (
		<El {...props} data-testid='123abc' className='home-page'>
			{props.children}
		</El>
	);
};

const El = styled.div``;

export default HomePage;
