import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function LikeButton() {
  const [buttonState, setButtonState] = useState({ liked: false, processing: false });
  console.log('LikeButton');
  console.log(buttonState.liked);
  console.log(buttonState.processing);

  useEffect(() => {
    if (buttonState.processing) {
      const timer = setTimeout(() => {
        setButtonState(prev => ({ liked: !prev.liked, processing: false }));
        clearInterval(timer);
      }, 2000);

      return () => {
        clearTimeout(timer);
      }
    }
  }, [buttonState.processing]);

  const icon = buttonState.processing ? faSpinner :
    buttonState.liked ? faHeartSolid : faHeartOutline;

  const onClick = (event) => {
    console.log('click');

    console.log(event);

    setButtonState(prev => ({ ...prev, processing: true }));

    console.log(buttonState.liked);
  };

  return (
    <button className="LikeButton" onClick={onClick}>
      <FontAwesomeIcon spin={buttonState.processing} icon={icon} />
    </button>
  );
}
