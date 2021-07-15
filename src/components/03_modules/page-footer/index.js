import React from "react";
import styled, { css } from "styled-components";

import Layout from "../../01_arrangements/layout/";
import Heading from "../../01_arrangements/heading/";
import List from "../../01_arrangements/list/";
import Logo from "../../02_patterns/logo/";

const PageFooter = (props) => {
	return (
		<El
			{...props}
			data-testid='123abc'
			className={`page-footer ${props.classes}`}
		>
			<Layout grid='33_33_33'>
				<div class='column'>
					<Logo size='small' />
				</div>
				<div class='column'>
					<Heading level='2' appearance='5'>
						Column one
					</Heading>
					<List level='3'>
						<li graphic='magic-wand'>List item one</li>
						<li graphic='paint-roller'>List item two</li>
						<li graphic='pencil-ruler'>List item three</li>
						<li graphic='umbrella'>List item four</li>
					</List>
				</div>
				<div class='column'>
					<Heading level='2' appearance='5'>
						Column two
					</Heading>
					<List level='3'>
						<li graphic='magic-wand'>List item one</li>
						<li graphic='paint-roller'>List item two</li>
						<li graphic='pencil-ruler'>List item three</li>
						<li graphic='umbrella'>List item four</li>
					</List>
				</div>
			</Layout>
		</El>
	);
};

const El = styled.div`
	background: var(--brand-color-7);
	padding: var(--spacing-double);
	min-height: 150px;
`;

export default PageFooter;
