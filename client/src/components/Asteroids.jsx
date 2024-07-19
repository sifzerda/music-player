// SlotMachine.js
// SlotMachine.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const SlotMachineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const ReelsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ReelWrapper = styled.div`
  overflow: hidden;
  width: 100px;
  height: 100px;
  margin: 0 10px;
  border: 3px solid #000;
  border-radius: 10px;
  background: #fff;
  position: relative;
`;

const Reel = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 2em;
`;

const SpinButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const symbols = ['🍒', '🍋', '🍊', '🍇', '🍉', '7️⃣', '🔔', '⭐'];

const getRandomSymbol = () => Math.floor(Math.random() * symbols.length);

const SlotMachine = () => {
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState([0, 1, 2, 3, 4]);

  const spins = reels.map((reel, index) => {
    const { transform } = useSpring({
      transform: spinning ? `translateY(-1000px)` : 'translateY(0px)',
      config: { tension: 200, friction: 20 },
      onRest: () => {
        if (spinning) {
          setSpinning(false);
          setReels(reels.map(() => getRandomSymbol()));
        }
      },
      delay: index * 100,
    });
    return transform;
  });

  const handleSpin = () => {
    setSpinning(true);
  };

  return (
    <SlotMachineContainer>
      <ReelsContainer>
        {reels.map((reel, index) => (
          <ReelWrapper key={index}>
            <Reel style={{ transform: spins[index] }}>
              {symbols[reel]}
            </Reel>
          </ReelWrapper>
        ))}
      </ReelsContainer>
      <SpinButton onClick={handleSpin}>Spin</SpinButton>
    </SlotMachineContainer>
  );
};

export default SlotMachine;