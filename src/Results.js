import React from "react";

/**
 * The Results Component takes any JSON object and pretty prints it.
 * the JSON object is passed to it by the props.myData field, or rather
 *
 * <Results myData={theJsonDataToPrint} />
 *
 * @param {any} props props are handled by React
 */
function Results(props) {
  return(
  <div>
    <pre>
      {JSON.stringify(props.myData,null,2)}
    </pre>
  </div>
  );
}

export default Results;