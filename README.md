# weather-station

<img src="RaspberryPi BME280.jpg"
     alt="BME 280 Temp, Humidity, Pressure Sensor conencted to Raspberry Pi"
     style="float: left; margin-right: 10px;" />

Install dependencies 

```
pip3 install -r requirements.txt
```

create private/public key pair 
```
openssl genpkey -algorithm RSA -out rsa_private.pem -pkeyopt rsa_keygen_bits:2048 && openssl rsa -in rsa_private.pem -pubout -out rsa_public.pem
```

Setup Google Cloud 

<img src="Weather Station.png"
     alt="Google Cloud Architecture"
     style="float: left; margin-right: 10px;" />
     
* Setup IoT Core Registry 
* Add Devices
* Create cloud functions triggered by the IoT core Pub/Sub topics for event and state 
* Create BigQuery Schema with the attributes sent by the event and state messages 
* Create Data Studio Report like http://tinyurl.com/weatheriot

Start Sending BME280 data

```
python3 publisher.py \
    --registry_id=rpi-bme280 \
    --cloud_region=us-central1 \
    --project_id=demoneil \
    --device_id=rpi \
    --algorithm=RS256 \
    --private_key_file=./rsa_private.pem \
    --message_type=event
 ```
    
 Start Sending Device State
 
 ```
 python3 publisher.py \
    --registry_id=rpi-bme280 \
    --cloud_region=us-central1 \
    --project_id=demoneil \
    --device_id=rpi \
    --algorithm=RS256 \
    --private_key_file=./rsa_private.pem \
    --message_type=state
```    

<img src="Data Studio Report.png"
     alt="Data Studio Report Screenshot"
     style="float: left; margin-right: 10px;" />
     
References

* https://learn.adafruit.com/adafruit-bme280-humidity-barometric-pressure-temperature-sensor-breakout/python-circuitpython-test
* https://cloud.google.com/iot/docs/how-tos/mqtt-bridge#mqtt_server
* https://github.com/GoogleCloudPlatform/python-docs-samples/tree/master/iot/api-client/mqtt_example
* https://www.raspberrypi.org/documentation/raspbian/applications/vcgencmd.md
