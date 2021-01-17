# weather-station

Start Sending BME280 data

Install dependencies 

```
pip3 install -r requirements.txt
```

create private/public key pair 
```
openssl genpkey -algorithm RSA -out rsa_private.pem -pkeyopt rsa_keygen_bits:2048 && openssl rsa -in rsa_private.pem -pubout -out rsa_public.pem
```

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
