import React, { useState } from "react";
import './App.css';
import CoinTossCounter from "./CoinTossCounter";

function App() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscribedCount, setSubscribedCount] = useState(0);
  const [alerts, setAlerts] = useState(false);

  return (
    <section>
      <p>Please click to subscribe to my updates!</p>
      <p>Subscriber Count: {subscribedCount}</p>
      <button
        onClick={() => {
          setSubscribed(!subscribed);
          setSubscribedCount((currentCount) => currentCount + 1);
          // having "currentCount" passed in allows us to call this multiple times within an asyncronous function
          // doesn't work with setSubscribedCount(subscribedCount +1) called multiple times
          setSubscribedCount((currentCount) => currentCount + 1);
          if (!alerts) setAlerts(true);
        }}
      >
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
      <button onClick={() => setAlerts(!alerts)}>
        {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
      </button>
      < CoinTossCounter />
    </section>
  );
}
export default App;
