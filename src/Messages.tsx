import React from 'react';
import { Card, ICardTokens} from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import {
  ICardStyles,
} from '@uifabric/react-cards';
import {
  Persona,
  Text,
  ITextStyles,
} from 'office-ui-fabric-react';
import Sumanasa from "./assets/Sumanasa.jpg"
import Sahil from "./assets/Sahil.png"
import Prmeher from "./assets/Prmeher.jpg"
import Devashish from "./assets/Devashish.png"
const cardTokens: ICardTokens = { childrenMargin: 12 };
const siteTextStyles: ITextStyles = {
  root: {
    color: '#025F52',
    fontWeight: FontWeights.semibold,
    margin: '5px 0px'
  },
};
const descriptionTextStyles: ITextStyles = {
  root: {
    color: '#333333',
    fontWeight: FontWeights.semibold,
  },
};
const cardStyles: ICardStyles = {
  root: {
    backgroundColor: 'white',
    margin: '5px 0px',
    borderRadius: '10px' 
  },
};
export const Vinuth:React.FunctionComponent=()=> {
    return (
        <div>
           <Text variant="medium" styles={siteTextStyles}>
              Thank you so much for your support!
            </Text>
          
            <Card
          styles={cardStyles}
          aria-label="Clickable vertical card with image bleeding at the center of the card"
          tokens={cardTokens}
        >
          <Card.Item>
            <Persona imageUrl={Prmeher}  primaryText="Prmeher Kaur"/>
          </Card.Item>
          <Card.Section>
            <Text variant="medium" styles={siteTextStyles}>
            Hey Vinuth,
            </Text>
            <Text styles={descriptionTextStyles}>You've been a true mentor to all of us. Everytime we  got stuck, you were there to guide us and to lead us along. You always supported us in all of our demos and you never scolded us despite our blunders. I would've never expected such generosity from you. Even when everything was seemingly impossible to complete, you were there to take our hand and guide us through it. Many times, we would work harder just because we knew you had supported us even in oddest of times, and that we couldn't let you down after all that you had done for us. You've taught me a lot more about leadership in this internship than I ever expected to learn. Thanks a ton!</Text>
       
          </Card.Section>
        </Card>
         <Card
          styles={cardStyles}
          aria-label="Clickable vertical card with image bleeding at the center of the card"
          tokens={cardTokens}
        >
          <Card.Item>
            <Persona imageUrl={Sumanasa} primaryText="Sumanasa Somu" />
          </Card.Item>
          <Card.Section>
          <Text variant="medium" styles={siteTextStyles}>
          Hey Vinuth,
            </Text>
            <Text styles={descriptionTextStyles}>If there is someone who turned out to be completely opposite to what I expected to be, that is you . I never imagined that I'd have such an amazing manager. Just a call/text away. It might be a small thing but each and every message you leave for us after any demo/event we had with the garage helped us a lot. Before we turn up for our presentation, we used to tell ourselves that you would come to our rescue. Thank you so much for always supporting us and making it such a smooth journey!</Text>
       
          </Card.Section>
        </Card>
       
        <Card
          styles={cardStyles}
          aria-label="Clickable vertical card with image bleeding at the center of the card"
          tokens={cardTokens}
        >
          <Card.Item>
            <Persona imageUrl={Sahil} primaryText="Sahil Batra" />
          </Card.Item>
          <Card.Section>
            <Text variant="medium" styles={siteTextStyles}>
            Hey Vinuth,
            </Text>
            <Text styles={descriptionTextStyles}>Thanks Vinuth it was great to have a manger like you. Learnt so many things from you and  you were always there in all our presentations and supported us!</Text>
       
          </Card.Section>
        </Card>
        <Card
          styles={cardStyles}
          aria-label="Clickable vertical card with image bleeding at the center of the card"
          tokens={cardTokens}
        >
          <Card.Item>
            <Persona imageUrl={Devashish} primaryText="Devashish Gupta" />
          </Card.Item>
          <Card.Section>
            <Text variant="medium" styles={siteTextStyles}>
            Hey Vinuth,
            </Text>
            <Text styles={descriptionTextStyles}>I feel very grateful to have had an opportunity to intern at Microsoft and have you as my manager. Thank you so much. Assigning work tasks to me that were sometimes quite difficult allowed me to have the chance to expand my knowledge and build confidence in my abilities. The valuable skills I’ve learned from you have enhanced my experience both in technical and non-technical fields over the past months.
I appreciate everything and will remember my time here, fondly.</Text>
       
          </Card.Section>
        </Card>
        </div>
    )
}

export const Shishir:React.FunctionComponent=()=> {
    return (
      <div>
      <Text variant="medium" styles={siteTextStyles}>
         Thank you so much for your guidance!
       </Text>
       <Card
     styles={cardStyles}
     aria-label="Clickable vertical card with image bleeding at the center of the card"
     tokens={cardTokens}
   >
     <Card.Item>
       <Persona imageUrl={Prmeher}  primaryText="Prmeher Kaur"/>
     </Card.Item>
     <Card.Section>
       <Text variant="medium" styles={siteTextStyles}>
       Hey Shishir
       </Text>
       <Text styles={descriptionTextStyles}>The plethora of knowledge you have on  all subjects is beyond inspirational. I have always admired your critical thinking and problem solving skills.Thank you for staying up late at night just to test our code and for guiding us out of the most difficult situations. Would've loved to learn more from you :) </Text>
  
     </Card.Section>
   </Card>
    <Card
     styles={cardStyles}
     aria-label="Clickable vertical card with image bleeding at the center of the card"
     tokens={cardTokens}
   >
     <Card.Item>
       <Persona imageUrl={Sumanasa} primaryText="Sumanasa Somu" />
     </Card.Item>
     <Card.Section>
     <Text variant="medium" styles={siteTextStyles}>
     Hey Shishir
       </Text>
       <Text styles={descriptionTextStyles}>I have always admired your coding skills and the knowledge you have. Would love to take you as an inspiration and achieve more and more! Thanks for all your efforts and the support you gave despite the odd timings. </Text>
  
     </Card.Section>
   </Card>
  
   <Card
     styles={cardStyles}
     aria-label="Clickable vertical card with image bleeding at the center of the card"
     tokens={cardTokens}
   >
     <Card.Item>
       <Persona imageUrl={Sahil} primaryText="Sahil Batra" />
     </Card.Item>
     <Card.Section>
       <Text variant="medium" styles={siteTextStyles}>
       Hey Shishir
       </Text>
       <Text styles={descriptionTextStyles}> Thanks a lot I always admired your coding skills and learnt a lot from you. Want to be a great coder like all of you in future.</Text>
  
     </Card.Section>
   </Card>
   <Card
     styles={cardStyles}
     aria-label="Clickable vertical card with image bleeding at the center of the card"
     tokens={cardTokens}
   >
     <Card.Item>
       <Persona imageUrl={Devashish} primaryText="Devashish Gupta" />
     </Card.Item>
     <Card.Section>
       <Text variant="medium" styles={siteTextStyles}>
       Hey Shishir
       </Text>
       <Text styles={descriptionTextStyles}>Your experience in programming is great, and working under your mentorship helped me learn and enhance my coding skills. Thanks for resolving our blockers and testing our code on the device even during off-hours, it meant a lot. Thank you for all your support.</Text>
  
     </Card.Section>
   </Card>
   </div>
    )
}
export const Srikanth:React.FunctionComponent=()=> {
    return (
      <div>
      <Text variant="medium" styles={siteTextStyles}>
         Thank you so much for always being there for us!
       </Text>
       <Card
     styles={cardStyles}
     aria-label="Clickable vertical card with image bleeding at the center of the card"
     tokens={cardTokens}
   >
     <Card.Item>
       <Persona imageUrl={Prmeher}  primaryText="Prmeher Kaur"/>
     </Card.Item>
     <Card.Section>
       <Text variant="medium" styles={siteTextStyles}>
       Hey Srikanth
       </Text>
       <Text styles={descriptionTextStyles}>Thank you for being the one person we knew we could fallback upon. You were always the first person we approached even with our stupidest doubts because we knew you would never judge us and that you'd always find time to help us out. Thank you for spending hours on call just to solve one small bug and for staying up till late nights with us. You always presented us with an honest view of our work, and it  helped us grow as developers. Thank you for being the perfect mentor! </Text>
  
     </Card.Section>
   </Card>
    <Card
     styles={cardStyles}
     aria-label="Clickable vertical card with image bleeding at the center of the card"
     tokens={cardTokens}
   >
     <Card.Item>
       <Persona imageUrl={Sumanasa} primaryText="Sumanasa Somu" />
     </Card.Item>
     <Card.Section>
     <Text variant="medium" styles={siteTextStyles}>
     Hey Srikanth
       </Text>
       <Text styles={descriptionTextStyles}>
       You were one of the first persons whom we felt we could approach for any kind of help. The way you put yourself in our shoes and understand what we might be going through is commendable. Thank you so much for staying up late and helping us fix all our bugs. Thanks for being an affable mentor!
       </Text>
  
     </Card.Section>
   </Card>

   <Card
     styles={cardStyles}
     aria-label="Clickable vertical card with image bleeding at the center of the card"
     tokens={cardTokens}
   >
     <Card.Item>
       <Persona imageUrl={Sahil} primaryText="Sahil Batra" />
     </Card.Item>
     <Card.Section>
       <Text variant="medium" styles={siteTextStyles}>
       Hey Srikanth
       </Text>
       <Text styles={descriptionTextStyles}> Thanks a lot for clearing all my doubts and bugs as well. I learnt a lot of things from you and your problem solving skills.</Text>
  
     </Card.Section>
   </Card>
   <Card
     styles={cardStyles}
     aria-label="Clickable vertical card with image bleeding at the center of the card"
     tokens={cardTokens}
   >
     <Card.Item>
       <Persona imageUrl={Devashish} primaryText="Devashish Gupta" />
     </Card.Item>
     <Card.Section>
       <Text variant="medium" styles={siteTextStyles}>
       Hey Srikanth
       </Text>
       <Text styles={descriptionTextStyles}>It was great to work under your mentorship, and it enhanced my knowledge multiple folds. I still remember my initial days when I was a bit underconfident and you guided me towards the right path. Thanks for helping me and the whole team, it mattered.</Text>
  
     </Card.Section>
   </Card>
   </div>
    )
}
