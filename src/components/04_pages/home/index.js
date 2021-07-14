import React from "react";
import styled, { css } from "styled-components";

import PageHeader from "../../03_modules/page-header/";
import PageSection from "../../01_arrangements/page-section/";
import PageFooter from "../../03_modules/page-footer/";
import SiteFooter from "../../03_modules/site-footer/";
import List from "../../01_arrangements/list/";

const HomePage = (props) => {
	return (
		<El {...props} data-testid='123abc' className='home-page'>
			<PageHeader />
			<PageSection
				heading='This is the Section heading'
				subheading='This is the Section subheading'
			></PageSection>
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
