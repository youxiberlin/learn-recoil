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
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const onChange = e => {
    // console.log('target value: ', e.target.value);
    setText(e.target.value)
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
        Echo: {text}
    </div>
  );
};

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
}

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
