const filteredCatSearch = (filter, catsearch) => {
  if (filter !== 'All') {
    const filtered = catsearch.filter(catsearch => catsearch.toString() === filter);
    return filtered;
  }
  return catsearch;
};

export default filteredCatSearch;
