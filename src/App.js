import React from 'react';
// import CharacterCounter from './CharacterCounter';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const textState = atom({
  key: 'textState', // uniqueID
  default: '', // defaul value aka initial value
});

const CharacterCounter = () => {
  return <div>character counter: <TextInput /></div>	
};

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = e => setText(e.target.value);

  return (
    <div>
      text input
    </div>
  );
};

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
