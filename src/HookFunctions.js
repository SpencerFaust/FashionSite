import React, { useState, useEffect } from "react";

export function useToggleNavigation() {
  const [navOpen, setNavOpen] = useState(false);
  const handleChange = () => {
    setNavOpen(!navOpen);
    console.log(navOpen);
  };
  return { state: navOpen, function: handleChange };
}
