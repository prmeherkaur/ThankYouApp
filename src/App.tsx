import React,{useState,useEffect} from 'react';
import {  PrimaryButton } from 'office-ui-fabric-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import {Vinuth,Shishir,Srikanth} from './Messages'
import './App.css'
const stackTokens = { childrenGap: 50 };

const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 200,margin:2 } },
};

const App: React.FunctionComponent = () => {
  const [name,setName]=useState<String>("");
  const [password,setPassword]=useState<String>("");
  const passwordcheck="hello";
  const [item,setItem]=useState(
    <div></div>
  );
  const [Login,setLogin]=useState<Boolean>(true);

  const WelcomeRoute=()=>{
    if(password===passwordcheck){
      console.log("here  hello");
      setLogin(false);
      if(name==="Vinuth"){
        setItem(<Vinuth/>)
      }
      else if(name==="Shishir"){
        setItem(<Shishir/>)
      }
      else if(name==="Srikanth"){
        setItem(<Srikanth/>)
      }
    }
    else{
      console.log("nope  hello");
      setItem(<div style={{color:"red"}}> Did you already forget us :(</div>)
    }
    
  }
  return (
    <div className="App">
    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
      <Stack {...columnProps}>
        {Login &&
        <>
        <TextField label="UserName " required  onChange={(e)=>{//@ts-ignore
         setName(e.target.value)}} />
        <TextField label="Password " required type="password" onChange={(e)=>{//@ts-ignore
        setPassword(e.target.value)}}
        />
        <PrimaryButton text="Welcome!"  onClick={()=>{WelcomeRoute()}}/>
        </>}
        {item}
      </Stack>
    </Stack>
   
    </div>
  );
};
export default App;