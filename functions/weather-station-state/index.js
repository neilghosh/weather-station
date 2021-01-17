  async function insertRowsAsStream(bigquery, obj) {
    // Inserts the JSON objects into my_dataset:my_table.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    const datasetId = 'iot';
    const tableId = 'device_state';

    let rows = [
      { 
        timestamp : new Date(obj.timestamp*1000),
        Temp : obj.Temp,
        DiskUsagePercent : obj.DiskUsagePercent,
        MemoryUsagePercent 	 : obj.MemoryUsagePercent,
        CpuUsagePercent: obj.CpuUsagePercent,
        device_id:obj.device_id
     }
    ];
    //rows.push(message);
    console.log(rows);
    // Insert data into a table
    await bigquery
      .dataset(datasetId)
      .table(tableId)
      .insert(rows);
    console.log(`Inserted ${rows.length} rows`);
  }
