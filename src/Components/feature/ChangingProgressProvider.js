import React, { useEffect, useState } from "react";

const ChangingProgressProvider = (props) => {
  const [valuesIndex, setValuesIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValuesIndex((prevIndex) => (prevIndex + 1) % props.values.length);
    }, props.interval);

    return () => {
      clearInterval(interval);
    };
  }, [props.values.length, props.interval]);

  return props.children(props.values[valuesIndex]);
};

ChangingProgressProvider.defaultProps = {
  interval: 1000,
};

export default ChangingProgressProvider;
