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
  styles: { root: {width:200,margin:10 } },
};

const App: React.FunctionComponent = () => {
  const [name,setName]=useState<String>("");
  const [password,setPassword]=useState<String>("");
  const vpassword="vimadinu";
  const shpassword="shiarora";
  const srpassword="srkandu";
  const [item,setItem]=useState(
    <div></div>
  );
  const [Login,setLogin]=useState<Boolean>(true);

  const WelcomeRoute=()=>{
    if(name.length<1||password.length<1) {
      setItem(<div style={{color:"red"}}>Please enter both name and password</div>)
      return
    }
    if(password===vpassword && name.toLowerCase()==="vinuth"){
      setLogin(false);
      setItem(<Vinuth/>)
    }
    else if(password===shpassword && name.toLowerCase()==="shishir"){
      setLogin(false);
        setItem(<Shishir/>)
    }
    else if(password===srpassword && name.toLowerCase()==="srikanth"){
      setLogin(false);
      setItem(<Srikanth/>)
    }

    else{
      console.log("nope  hello");
      setItem(<div style={{color:"red"}}> Did you already forget us :(</div>)
    }
    
  }
  return (
    <div className="App" >
    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
      <Stack {...columnProps}>
        {Login &&
        <>
        <TextField label="UserName " required  onChange={(e)=>{//@ts-ignore
         setName(e.target.value)}} />
        <TextField label="Password " required type="password" onChange={(e)=>{//@ts-ignore
        setPassword(e.target.value)}} onEnter={()=>{WelcomeRoute()}}
        />
        <PrimaryButton text="Welcome!" color="#333333" onClick={()=>{WelcomeRoute()}} />
        </>}
        {item}
      </Stack>
    </Stack>
   
    </div>
  );
};
export default App;