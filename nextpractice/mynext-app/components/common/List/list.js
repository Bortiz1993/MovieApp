import {
  ReactiveList
} from "@appbaseio/reactivesearch";

function ListComponent() {
  return (
    <ReactiveList
      defaultQuery={() => ({ track_total_hits: true })}
      componentId="results"
      dataField={[
        { field: "original_title", weight: 1 },
        { field: "original_title.search", weight: 2 },
      ]}
      react={{
        and: [
          "mainSearch",
          "RangeSlider",
          "language-list",
          "date-filter",
          "genres-list",
          "vote-average-list",
        ],
      }}
      // different types of searches?
      pagination={true}
      className="Result_card"
      paginationAt="bottom"
      pages={5}
      size={12}
      Loader="Loading..."
      noResults="No results were found..."
      sortOptions={[
        {
          dataField: "vote_count",
          sortBy: "desc",
          label: "Sort by vote-count(High to Low) \u00A0",
        },
        {
          dataField: "popularity",
          sortBy: "desc",
          label: "Sort by Popularity(High to Low)\u00A0 \u00A0",
        },
        {
          dataField: "vote_average",
          sortBy: "desc",
          label: "Sort by Ratings(High to Low) \u00A0",
        },
        {
          dataField: "original_title.keyword",
          sortBy: "asc",
          label: "Sort by Title(A-Z) \u00A0",
        },
      ]}
      innerClass={{
        title: "result-title",
        listItem: "result-item",
        list: "list-container",
        sortOptions: "sort-options",
        resultStats: "result-stats",
        resultsInfo: "result-list-info",
        poweredBy: "powered-by",
      }}
    >
      {/* This is where the data map is  */}
      {({ data }) => (
        <ReactiveList.ResultCardsWrapper style={{ margin: "8px 0 0" }}>
          {data.map((item) => (
            <div style={{ marginRight: "15px" }} className="main-description">
              {/* this takes you to google to search for the movie */}
              <div className="ih-item square effect6 top_to_bottom">
                <a
                  target="#"
                  href={
                    "https://www.google.com/search?q=" + item.original_title
                  }
                >
                  {/* these are the movie posters */}
                  <div className="img">
                    <img
                      src={item.poster_path}
                      alt={item.original_title}
                      className="result-image"
                    />
                  </div>
                  <div className="info colored">
                    <h3 className="overlay-title">{item.original_title}</h3>

                    <div className="overlay-description">{item.overview}</div>

                    <div className="overlay-info">
                      <div className="rating-time-score-container">
        
                        <div className="sub-title Rating-data">
                          <b>
                            Ratings
                            <span className="details">
                              {" "}
                              {item.vote_average}
                            </span>
                          </b>
                        </div>

                        <div className="sub-title Score-data">
                          <b>
                            Popularity:
                            <span className="details"> {item.popularity}</span>
                          </b>
                        </div>
                     
                        <div className="vote-average-lang-container">
                          <div className="sub-title language-data">
                            <b>
                              Language:
                              <span className="details">
                                {" "}
                                {item.original_language}
                              </span>
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="time-data">
                        <b>
                          <span className="time">
                            <i className="fa fa-clock-o" />{" "}
                          </span>{" "}
                          <span className="details">{item.release_date}</span>
                        </b>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </ReactiveList.ResultCardsWrapper>
      )}
    </ReactiveList>
  );
}
export default ListComponent;
