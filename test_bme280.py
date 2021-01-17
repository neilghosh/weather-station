import board
import busio
import adafruit_bme280

i2c = busio.I2C(board.SCL, board.SDA)
bme280 = adafruit_bme280.Adafruit_BME280_I2C(i2c,address=0x76) # address can be known from sudo i2cdetect -y 1

print("\nTemperature: %0.1f C" % bme280.temperature)
print("Humidity: %0.1f %%" % bme280.humidity)
print("Pressure: %0.1f hPa" % bme280.pressure)

bme280.sea_level_pressure = 1013.25
print("Altitude = %0.2f meters" % bme280.altitude)
