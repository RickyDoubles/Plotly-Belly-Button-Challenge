// Write a function that will build the metadata for a single sample. It should do the following:
// - loop over the samples.json file with d3.json().then()
// - extract the metadata from the json
// - filter the metadata for the sample id
// - update the metadata html elements
// - clear any existing metadata in the metadata html elements
// - append hew header tags for each key-value pair in the filtered metadata



// Write a function that will build the charts for a single sample. It should do the following:
// - loop over the samples.json file with d3.json().then()
// - extract the samples from the json
// - filter the samples for the sample id
// - extract the ids, labels, and values from the filtered result
// - build a bubble chart and plot with Plotly.newPlot()
// - build a bar chart and plot with Plotly.newPlot()



// Write a function called init() that will populate the charts/metadata and elements on the page. It should do the following:
// - select the dropdown element in the page
// - loop over the samples.json data to append the .name attribute into the value of an option HTML tag (lookup HTML documentation on dropdown menus)
// - extract the first sample from the data
// - call your two functions to build the metadata and build the charts on the first sample, so that new visitors see some data/charts before they select something from the dropdown



// Write a function called optionChanged() that takes a new sample as an argument. It should do the following:
// - call your two functions to build the metadata and build the charts on the new sample
// Look at line 30 of index.html: that is the event listener that will call this function when someone selects something on the dropdown



// Initialize the dashboard by calling your init() function

