function applyFilters(data, filters) {
    if (!filters || !filters.filterBy || !filters.filterValue) return data;
  
    const validFields = ['name', 'language', 'id', 'bio', 'version'];
    if (!validFields.includes(filters.filterBy)) {
      throw new Error(`Invalid filter field: ${filters.filterBy}`);
    }
  
    return data.filter(item =>
      item[filters.filterBy].toString().toLowerCase().includes(filters.filterValue.toLowerCase())
    );
}
  
function applySorting(data, sortBy) {
    if (!sortBy) return data;
  
    const validFields = ['name', 'language', 'id', 'bio', 'version'];
    if (!validFields.includes(sortBy)) {
      throw new Error(`Invalid sort field: ${sortBy}`);
    }
  
    return data.sort((a, b) => {
      if (typeof a[sortBy] === 'string' && typeof b[sortBy] === 'string') {
        return a[sortBy].localeCompare(b[sortBy]);
      }
      return a[sortBy] - b[sortBy];
    });
}
  
function processData(req, res) {
    const { filterBy, filterValue, sortBy } = req.query;
  
    const filters = { filterBy, filterValue };
  
    try {
      let data = req.data;
  
      if (filterBy || filterValue) {
        data = applyFilters(data, filters);
      }
      data = applySorting(data, sortBy);
  
      if (data.length === 0) {
        return res.status(404).json({ message: 'No data available' });
      }
  
      res.json(data);
    } catch (error) {
      console.error('Data processing error:', error);
      res.status(400).json({ message: error.message });
    }
}
  
module.exports = { processData };
