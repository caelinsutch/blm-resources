import React from 'react';
import styled from '@emotion/styled';

const SectionTitle = styled.h1`
  font-size: 1.75rem;
`

const SubTitle = styled.div`
font-size: 1.25rem;
margin-top: .5rem;
margin-bottom: .5rem;
text-decoration: underline;
`

function ResourcesPage() {
  return (
    <div className={'nes-container with-title is-centered text'} style={{whiteSpace: "pre-wrap"}}>
      <p className="title">Resources</p>
      <SectionTitle>DONATE</SectionTitle>
      <div className={"align-left"}>
        Donating money, if you have the ability to, is a great way to show your support. Your dollars aid organizations that are well-versed in advocacy work—they’ve done the groundwork and already have staff and volunteers, networks, research, and campaigns in motion. Your contribution will amplify their important anti-racist work. A good way to expand your donation’s impact is by asking friends to match your donation, or by sharing the fact that you’ve donated within your network.

        <SubTitle>
          <a href="https://www.blackvisionsmn.org/about">
            Black Visions Collective
          </a>
        </SubTitle>
        Founded in 2017, the Minnesota-based Black Visions Collective is committed to dismantling systems of oppression and violence. The organization’s work is centered in healing and transformative justice principles, and nurturing the state’s emerging Black leadership to lead powerful campaigns.

        <SubTitle>
          <a href="https://emergencyreleasefund.com/">
            Emergency Release Fund
          </a>
        </SubTitle>
        Initially focused on keeping trans people out of NYC jail, the fund has expanded its mission during COVID-19 to include anyone in the LGBTQIA+ community.

        <SubTitle>
          <a href="https://www.lgbtqfund.org/">
            LGBTQ Freedom Fund
          </a></SubTitle>
        A national organization, the LGBTQ Freedom Fund posts bail to secure the release of tens of thousands of LGBTQ people held in jails. Additionally, the organization raises awareness of the disproportionate harm of mass incarceration on the queer community.

        <SubTitle>
          <a href="https://www.naacpldf.org/">
            NAACP and the NAACP Legal Defense Fund
          </a></SubTitle>
        The NAACP works to ensure a society in which all individuals have equal rights without discrimination based on race. This is enacted via the targeting of racial discrimination through democratic processes, the enforcement of civil rights at all levels, and communication with the public about the adverse effects of racial discrimination, among other objectives.

        You can also donate to NAACP’s Legal Defense and Educational Fund, seeking structural changes to expand democracy, eliminate disparities, and achieve racial justice.

        <SubTitle>
          <a href="https://www.playbill.com/article/bit.ly/localbailfunds">
            National Bail Fund Network
          </a></SubTitle>
        As donations poured in to help protesters post bail, many resources found themselves overwhelmed by the generosity. For a comprehensive guide to bail funds across the country, as well as those which have kindly requested you send your money elsewhere, check the NBFN, which is updated regularly.

        <SubTitle>
          <a href="https://www.nlg-npap.org/donate/">
            National Police Accountability Project
          </a></SubTitle>
        A project of the National Lawyers Guild, the NPAP has been operating as a nonprofit since 1999. The organization’s central mission is to promote the accountability of law enforcement officers and their employers for violations of the law, and to protect the human and civil rights of individuals in their encounters with law enforcement.

        <SubTitle>
          <a href="https://secure.actblue.com/donate/bail_funds_george_floyd">Split a Donation Among Bail Funds</a>
        </SubTitle>
      </div>
      {/*<SectionTitle>SUPPORT</SectionTitle>*/}
      {/*Buy From a Black Woman*/}
      {/*Buy From a Black Woman champions Black women business owners and encourages the community at large to ensure their success. Donate to support Buy From a Black Woman’s business grant program and various educational resources, and visit their online directory to access a network of over 500 businesses owned and operated by Black women around the country.*/}

      {/*Official Black Wall Street*/}
      {/*Both the website and app offer users a business directory of a spectrum of Black-owned businesses, including restaurants, shops, medical providers, and designers.*/}

      {/*The Okra Project*/}
      {/*Named in recognition of cooking traditions of the African diaspora, The Okra Project seeks to address the hunger crisis that Black trans people experience worldwide. Proceeds allow for Black trans chefs to travel to the homes of fellow Black trans folks and community spaces to provide food and company. Additional programs include the Okra Academy training program, the International Grocery Fund, and outings that bring Black trans people to theatre and other artistic spaces.*/}

      {/*<SectionTitle>LEARN</SectionTitle>*/}
      {/*This list of social media accounts to follow ranges from Black artist spotlights to educational seminars about combating racism, identifying white privilege, and resources to educate yourself on how to be an anti-racist.*/}

      {/*Teach yourself about Black theatre and the artists who create works around the county by exploring organizations like Black Table Arts. Its mission is to provide access to quality, art-based programs that center education, social justice, and artistic development to uplift black lives. Check out Black Theatre Matters for a comprehensive list of equity and non-equity theatres across America.*/}

      {/*Read up on the Communities United for Police Reform campaign, which aims to end discriminatory policing practices in New York City. Its website offers resources like a Know Your Rights fact sheet to help you stay safe during interactions with the police. In addition, CUPR has written useful articles identifying the problems within the NYPD today and various proposed bills that could affect positive change.*/}
    </div>
  )
}

export default ResourcesPage;
