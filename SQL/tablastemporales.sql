--austin_bikesharey 2015::trip dataset public on google databases
WITH 
  longest_used_bike AS(
    SELECT
    bike_id,SUM(duration_minutes) AS trip_duration
    FROM `bigquery-public-data.austin_bikeshare.bikeshare_trips` trips
    GROUP BY
    bike_id
    ORDER BY
    trip_duration DESC
    LIMIT 1
  )
## Esta tabla temporal se realizo para encontrar el ID de la bicicleta con mayor recorrido
## ahora se hara la consulta para saber de que estacion se saco la bicibleta
SELECT 
  trips.start_station_id,
  ##stations.name, de esta forma se mostrara el resultado del nombre de la estacion en vez del id de la estacion
  COUNT(*) AS trip_count
FROM 
  longest_used_bike AS longest
INNER JOIN
  `bigquery-public-data.austin_bikeshare.bikeshare_trips` AS trips
  ON 
    longest.bike_id = trips.bike_id
  INNER JOIN
   `bigquery-public-data.austin_bikeshare.bikeshare_stations` AS stations
   ON trips.start_station_id = stations.station_id
  GROUP BY
  trips.start_station_id
    ##stations.name
  ORDER BY
    trip_count DESC
  LIMIT 1
