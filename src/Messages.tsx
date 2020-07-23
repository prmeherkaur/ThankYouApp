import React from 'react';
import { Card, ICardTokens} from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
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
  },
};
const descriptionTextStyles: ITextStyles = {
  root: {
    color: '#333333',
    fontWeight: FontWeights.semibold,
  },
};
export const Vinuth:React.FunctionComponent=()=> {
    return (
        <div>
           <Text variant="medium" styles={siteTextStyles}>
              Thank you so much for your help!
            </Text>
            <Card
          aria-label="Clickable vertical card with image bleeding at the center of the card"
          tokens={cardTokens}
        >
          <Card.Item>
            <Persona imageUrl={Prmeher}  primaryText="Prmeher Kaur"/>
          </Card.Item>
          <Card.Section>
            <Text variant="medium" styles={siteTextStyles}>
            Hey Vinuth
            </Text>
            <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
       
          </Card.Section>
        </Card>
         <Card
          aria-label="Clickable vertical card with image bleeding at the center of the card"
          tokens={cardTokens}
        >
          <Card.Item>
            <Persona imageUrl={Sumanasa} primaryText="Sumanasa Somu" />
          </Card.Item>
          <Card.Section>
          <Text variant="medium" styles={siteTextStyles}>
              Hey Vinuth
            </Text>
            <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
       
          </Card.Section>
        </Card>
       
        <Card
          aria-label="Clickable vertical card with image bleeding at the center of the card"
          tokens={cardTokens}
        >
          <Card.Item>
            <Persona imageUrl={Sahil} primaryText="Sahil Batra" />
          </Card.Item>
          <Card.Section>
            <Text variant="medium" styles={siteTextStyles}>
            Hey Vinuth
            </Text>
            <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
       
          </Card.Section>
        </Card>
        <Card
          aria-label="Clickable vertical card with image bleeding at the center of the card"
          tokens={cardTokens}
        >
          <Card.Item>
            <Persona imageUrl={Devashish} primaryText="Devashish Gupta" />
          </Card.Item>
          <Card.Section>
            <Text variant="medium" styles={siteTextStyles}>
            Hey Vinuth
            </Text>
            <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
       
          </Card.Section>
        </Card>
        </div>
    )
}

export const Shishir:React.FunctionComponent=()=> {
    return (
      <div>
      <Text variant="medium" styles={siteTextStyles}>
         Thank you so much for your help!
       </Text>
       <Card
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
       <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
  
     </Card.Section>
   </Card>
    <Card
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
       <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
  
     </Card.Section>
   </Card>
  
   <Card
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
       <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
  
     </Card.Section>
   </Card>
   <Card
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
       <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
  
     </Card.Section>
   </Card>
   </div>
    )
}
export const Srikanth:React.FunctionComponent=()=> {
    return (
      <div>
      <Text variant="medium" styles={siteTextStyles}>
         Thank you so much for your help!
       </Text>
       <Card
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
       <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
  
     </Card.Section>
   </Card>
    <Card
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
       <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
  
     </Card.Section>
   </Card>

   <Card
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
       <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
  
     </Card.Section>
   </Card>
   <Card
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
       <Text styles={descriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
  
     </Card.Section>
   </Card>
   </div>
    )
}
