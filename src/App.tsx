import React from 'react';
import './App.css';
import "nes.css/css/nes.min.css";
import {Snackbar} from './components/snackbar';

interface AppState {
  name: string;
  city: string;
  extraMessage: string;
  repEmail: string,
  submitted: boolean;
}

class App extends React.Component<any, Partial<AppState>> {

  constructor(props: any) {
    super(props);
    this.state = {
      name: 'Your Name',
      city: 'Your City',
      extraMessage: '',
      repEmail: 'gavin.newsom@gov.ca.gov ',
      submitted: false
    }
  }

  snackbarRef = React.createRef<Snackbar>();

  _showSnackbarHandler = () => {
    if (this.snackbarRef.current instanceof Snackbar) {
      this.snackbarRef.current.openSnackBar('Text copied!');
    }
  }

  render() {
    return (
      <div className="content">
        <div className={"nes-container with-title is-centered"}>
          <p className="title">Help the Cause By Emailing Your CA Representatives!</p>
          <div>
            <label>Your Name: <input type="text" name="name" className={"nes-input"} onChange={(input) => this.setState({name: input.target.value})} /></label>
          </div>
          <div>
            <label>Your city: <input type="text" name="city" className={"nes-input"} onChange={(input) => this.setState({ city: input.target.value})}/></label>
          </div>
          <div className={"nes-balloon from-left nes-pointer"}>
            <a href="`https://www.losangelesforward.org/who-represents-me">Click here to find the email information of the representative you'd like to contact</a>
          </div>
          <div>
            <label>Email to send to: <input type="text" name="email" className={"nes-input"} onChange={(input) => this.setState({ repEmail: input.target.value})}/></label>
          </div>
          <p>
            <button type="submit" className={"nes-btn is-primary"} onClick={this.onSubmit}>Copy Text</button>
          </p>
          <p>
            <a href={`mailto:${this.state.repEmail}?subject=Justice`}>
              <button type="submit" className={"nes-btn is-primary"} onClick={this.sendEmail}>Send Email</button>
            </a>
          </p>
          <div className="nes-container is-rounded text is-centered with-title">
            <p className="title">Finished Letter</p>
            <p className={"align-left"}>
              {
                this.createMessage(this.state.name ?? '', this.state.city ?? '', this.state.extraMessage ?? '')
              }
            </p>
          </div>
          <p>
            <a href="https://github.com/caelinsutch/blm-resources/issues">Report issues with this project</a>
          </p>
          <p>
            <a href="https://github.conm/caelinsutch">
              <i className="nes-icon github is-large"/>
            </a>
          </p>
        </div>
        <Snackbar ref = {this.snackbarRef} />\
      </div>
    );
  }


  onSubmit = () => {
    navigator.clipboard.writeText(this.createMessage(this.state.name ?? '', this.state.city ?? '', this.state.extraMessage ?? ''));
    this._showSnackbarHandler();
  }

  sendEmail = () => {

  }

  createMessage(name: string, city: string, extraMessage: string) {
    return `To Whom It May Concern,

My name is ${name}, and I am a resident of ${city}. I am writing to demand the following legislative changes you can make to eradicate the decimation of Black people at the hands of police officers.

The following is a compilation of background information and implementation strategies for necessary legislative actions derived from collecting the pleas of Black organizers, activists, and journalists:

1. Redirect Police Funding

Phillip McHarris (doctoral candidate focusing on race) and Thenjiwe McHarris (strategist with the Movement for Black Lives) explain the problem with current police reform efforts:

“More training or diversity among police officers won’t end police brutality, nor will firing and charging individual officers. Look at the Minneapolis Police Department, which is held up as a model of progressive police reform. The department offers procedural justice as well as trainings for implicit bias, mindfulness and de-escalation. It embraces community policing and officer diversity, bans ‘warrior style’ policing, uses body cameras, implemented an early intervention system to identify problematic officers, receives training around mental health crisis intervention, and practices ‘reconciliation’ efforts in communities of color.”

Evidently, that was not enough. Instead of heightening the resources that officers have, they advocate redirecting funds to alternative emergency response programs, which can also be fueled by state-level and local-level grants. The McHarris’ argument is that we should work towards a reality in which healthcare workers and emergency response teams should handle substance abuse, domestic violence, homelessness, or mental health cases, while rapid response social workers provide individuals with the care they need. Community organizers would be responsible for spearheading responses to the pandemic. “The average police recruit spends 58 hours learning how to shoot and only 8 hours learning how to de-escalate.” Police officers are not trained nor necessary in reacting to such crises—specialized responders are.

Most police funding is budgeted and taxed at the local level, with city-level and county-level votes periodically increasing budgets. In 2017, Oakland allocated the highest share of its general fund to policing nationwide, at 41 percent and $242.5 million. It is crucial to establish state-level and local-level bans on heightening police funds, while simultaneously redirecting budgets to the aforementioned alternatives.

For-profit policing is a large culprit. Even though Governor Brown’s 2016 bill helped protect Californians from civil asset forfeitures, this is far from sufficient. As of 2020, 66.25% of forfeiture profits go to police—a C+ rating.

The Black Lives Matter Movement demands “acknowledgment and accountability for the devaluation and dehumanization of Black life at the hands of the police… We call for a national defunding of police. We demand investment in our communities and the resources to ensure Black people not only survive, but thrive.”

The McHarris’ conclusion states, “We need to reimagine public safety in ways that shrink and eventually abolish police and prisons while prioritizing education, housing, economic security, mental health and alternatives to conflict and violence.”

A persistent, genuine, and well-thought-out legislative effort to redirect police funds and end for-profit policing is imperative.

2. Abolish Legislative Police Protections

Murderers who wear a badge have consistently been given a free pass to decimate Black life. BLM “demand[s] accountability [for] those who are victims of police violence.”

It is vital to ensure that police officers are met with precisely the same consequences as their badgeless counterparts. Accountability has been denied to Black people for centuries, and it is crucial to impose legislative confirmation that accountability is ensured.

Campaign Zero is an organization dedicated to “limiting police interventions, improving community interactions, and ensuring accountability.”

They propose a solution of independent investigations. Because only 1% of all killings by police lead to an officer being charged with a crime, “independent investigations and prosecutions of police officers” must be mandated to eliminate biases. A broken system should not be evaluating itself.

3. Demilitarize the Police

Campaign Zero emphasizes that studies show how “more militarized police departments are significantly more likely to kill civilians.” Unfortunately, “the federal 1033 program transfers military weapons to police departments.”

Campaign Zero continues that to demilitarize, we must “prohibit cities and counties from using federal funds to purchase military equipment.”

California is not void of this indictment. In total, 41 MRAPs are in the possession of law enforcement agencies in California. All in all, California’s quantity of purchasing such outlandish and high-level military technology is unmatched: “In terms of cash value, California gets more 1033 gear than other states.”

Even though the LAPD has refused to take on more military equipment, they stated that “the department will replenish and replace” existing equipment. Such measures must be barred in an effort to eventually demilitarize the police force entirely in the long run.

Police departments should be restricted from using federal grant money to purchase military equipment, using the SWAT team, or conducting no-knock raids. Over-weaponized departments must reduce their use of weapon stockpiles, as “agencies should seek to return to the federal government the military equipment that has already been received” as places like San Jose already have.

The warranting is simple: “Military equipment naturally increases military-style training for said equipment. That training can increase the other dimensions of militarization,” contributing to the war-like mentality implicitly enforced by the police, who have no place fighting wars against the most disenfranchised members of their communities.

${extraMessage}

I hope that our legislators can take tangible, policy-level initiatives to defend Black lives, something they have failed to do so up until this point. Please listen to the pleas of the Black entities listed above and countless others, and help give rise to a future where Black folks do not have to fear for their lives on a daily basis.

Sincerely but not silently,

${name}
`}
}


export default App;
