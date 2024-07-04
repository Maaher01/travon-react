const Destination = () => {
  return (
    <div className="search-sec">
      <div className="container">
        <div className="search-box">
          <form action="mail.php" method="POST" className="tour-search">
            <div className="form-group">
              <select
                name="destination"
                id="destinationSelect"
                className="form-select nice-select"
              >
                <option
                  defaultValue=""
                  disabled="disabled"
                  selected="selected"
                  hidden=""
                >
                  Destination
                </option>
                <option value="Switzerland">Switzerland</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Amsterdam">Amsterdam</option>
                <option value="Budapest City">Budapest City</option>
              </select>
              <i className="fas fa-location-dot" />
            </div>
            <div className="form-group">
              <select
                name="destination"
                id="tourType"
                className="form-select nice-select"
              >
                <option
                  defaultValue=""
                  disabled="disabled"
                  selected="selected"
                  hidden=""
                >
                  Activities
                </option>
                <option value="Travel">Travel</option>
                <option value="Hiking">Hiking</option>
                <option value="Air Ballon">Air Ballon</option>
                <option value="Peak Climbing">Peak Climbing</option>
              </select>
              <i className="fas fa-person-hiking" />
            </div>
            <div className="form-group">
              <select
                name="destination"
                id="durationselect"
                className="form-select nice-select"
              >
                <option
                  // defaultValue=""
                  disabled="disabled"
                  selected="selected"
                  hidden=""
                >
                  Duration
                </option>
                <option value="0 - 3 Days">0 - 3 Days</option>
                <option value="0 - 7 Days">0 - 7 Days</option>
                <option value="3 - 8 Days">3 - 8 Days</option>
                <option value="7 - 12 Days">7 - 12 Days</option>
              </select>
              <i className="fas fa-calendar-days" />
            </div>
            <div className="form-group">
              <select
                name="destination"
                id="budgetSelect"
                className="form-select nice-select"
              >
                <option
                  // defaultValue=""
                  disabled="disabled"
                  selected="selected"
                  hidden=""
                >
                  Budget
                </option>
                <option value="100$ - 300$">100$ - 300$</option>
                <option value="300$ - 700$">300$ - 700$</option>
                <option value="700 - 1000$">700 - 1000$</option>
                <option value="1000$ - 1500$">1000$ - 1500$</option>
              </select>
              <i className="far fa-circle-dollar" />
            </div>
            <div className="form-btn">
              <button className="ot-btn">Search</button>
            </div>
            <p className="form-messages mb-0 mt-3" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Destination;
