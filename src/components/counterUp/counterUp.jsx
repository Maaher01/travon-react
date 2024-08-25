import axios from "axios";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { baseUrl } from "../../api/api";

const CounterUp = ({ color }) => {
  const [counters, setCounters] = useState([]);
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    const fetchCounters = async () => {
      try {
        const response = await axios.get(`${baseUrl}/counter`);
        const data = await response.data;
        const activeCounters = data.filter((counter) => counter.status === 1);
        setCounters(activeCounters);
      } catch {
        console.error("Error fetching feature data:", error);
      }
    };

    fetchCounters();
  }, []);

  return (
    <>
      <div className="space-bottom">
        <div className="container">
          <div className="row gx-0 justify-content-between">
            {counters?.map((counter, index) => (
              <div className="col-6 col-lg-3 counter-card-wrap">
                <div className="counter-card">
                  <div className="counter-card_icon">
                    <img src={counter.url} alt="icon" />
                  </div>
                  <div className="media-body">
                    <h2 className="counter-card_number">
                      <ScrollTrigger
                        onEnter={() => setCounterOn(true)}
                        onExit={() => setCounterOn(false)}
                        className={color}
                      >
                        <span className="counter-number">
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={counter.amount}
                              duration={2}
                              delay={0}
                            />
                          )}
                        </span>
                        +
                      </ScrollTrigger>
                    </h2>
                    <p className={`counter-card_text ${color}`}>
                      {counter.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterUp;
