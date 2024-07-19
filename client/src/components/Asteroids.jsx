// SlotMachine.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const SlotMachineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ReelsContainer = styled.div`
  display: flex;
`;

const Reel = styled(animated.div)`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  margin: 0 10px;
  font-size: 2em;
  background: #fff;
`;

const SpinButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
`;

const symbols = ['🍒', '🍋', '🍊', '🍇', '🍉', '7️⃣'];

const SlotMachine = () => {
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState([0, 1, 2]);

  const { transform } = useSpring({
    transform: spinning ? 'translateY(-1000px)' : 'translateY(0px)',
    config: { tension: 200, friction: 20 },
    onRest: () => {
      if (spinning) {
        setSpinning(false);
        setReels([
          Math.floor(Math.random() * symbols.length),
          Math.floor(Math.random() * symbols.length),
          Math.floor(Math.random() * symbols.length),
        ]);
      }
    },
  });

  const handleSpin = () => {
    setSpinning(true);
  };

  return (
    <SlotMachineContainer>
      <ReelsContainer>
        {reels.map((reel, index) => (
          <Reel key={index} style={{ transform }}>
            {symbols[reel]}
          </Reel>
        ))}
      </ReelsContainer>
      <SpinButton onClick={handleSpin}>Spin</SpinButton>
    </SlotMachineContainer>
  );
};

export default SlotMachine;