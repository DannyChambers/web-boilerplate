import React from "react";
import styled, { css } from "styled-components";

import PageHeader from "../../03_modules/page-header/";
import PageSection from "../../01_arrangements/page-section/";
import Layout from "../../01_arrangements/layout/";
import PageFooter from "../../03_modules/page-footer/";
import Heading from "../../01_arrangements/heading/";
import SiteFooter from "../../03_modules/site-footer/";
import List from "../../01_arrangements/list/";

const HomePage = (props) => {
	return (
		<El
			{...props}
			data-testid='123abc'
			className={`home-page ${props.classes}`}
		>
			<PageHeader />
			<PageSection
				variant='full-page'
				heading='This is the Section heading'
				subheading='This is the Section subheading'
			>
				<Layout grid='33_33_33' breakdown>
					<div class='column'>
						<Heading level='3' appearance='5'>
							Area one
						</Heading>
					</div>
					<div class='column'>
						<Heading level='3' appearance='5'>
							Area two
						</Heading>
					</div>
					<div class='column'>
						<Heading level='3' appearance='5'>
							Area three
						</Heading>
					</div>
					<div class='column'>
						<Heading level='3' appearance='5'>
							Area four
						</Heading>
					</div>
					<div class='column'>
						<Heading level='3' appearance='5'>
							Area five
						</Heading>
					</div>
					<div class='column'>
						<Heading level='3' appearance='5'>
							Area six
						</Heading>
					</div>
				</Layout>
			</PageSection>
			<PageFooter />
			<SiteFooter>
				<List level='3'>
					<li>List item one</li>
					<li>List item two</li>
					<li>List item three</li>
				</List>
			</SiteFooter>
		</El>
	);
};

const El = styled.div``;

export default HomePage;
