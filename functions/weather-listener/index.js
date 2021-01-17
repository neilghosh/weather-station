  async function insertRowsAsStream(bigquery, obj) {
    // Inserts the JSON objects into my_dataset:my_table.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = 'my_dataset';
    // const tableId = 'my_table';
    let rows = [
      { 
        timestamp : new Date(obj.timestamp*1000),
        temperature : obj.temperature,
        pressure : obj.pressure,
        humidity : obj.humidity
     }
    ];
    //rows.push(message);
    //console.log(rows)
    // Insert data into a table
    await bigquery
      .dataset('weather_data')
      .table('rpi_date')
      .insert(rows);
    console.log(`Inserted ${rows.length} rows`);
  }

/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.helloPubSub = (event, context) => {
  const message = event.data
    ? Buffer.from(event.data, 'base64').toString()
    : undefined;
  
  if(message !== undefined) {
    var obj = JSON.parse(message);
    const {BigQuery} = require('@google-cloud/bigquery');
    const bigquery = new BigQuery();
    insertRowsAsStream(bigquery, obj);
  } else {
    console.log("There was no message");
  }
};
