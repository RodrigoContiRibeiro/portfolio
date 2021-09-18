import React, { useEffect, useState } from "react";
import "./index.css";

interface IStartTextAnimation {
  children: React.ReactNode;
}

const StartTextAnimaton = ({ children }: IStartTextAnimation) => {
  //State for showing the animation or not
  const [showStartAnimation, setShowStartAnimation] = useState<boolean>(true);

  //Filling the data rows of text
  const messages: Array<String> = [];
  for (let i = 0; i < 15; i++) {
    messages.push(
      "BemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindosBemvindos"
    );
    messages.push(
      "WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome"
    );
    messages.push(
      "BenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenuttiBenvenutti"
    );
  }

  useEffect(() => {
    //Starting the css animation through js
    const messageContent = document.querySelector(
      ".messageContent"
    ) as HTMLDivElement;
    messageContent.classList.add("animate");
  }, []);

  //Timeout for removing the animation
  setTimeout(() => setShowStartAnimation(false), 5 * 1000);

  return (
    <>
      {showStartAnimation ? (
        <div className="messageContainer">
          <div className="messageContent">
            {messages.map((msg, i) => (
              <p key={i} className="message">
                {msg}
              </p>
            ))}
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default StartTextAnimaton;
