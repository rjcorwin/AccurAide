# About 


# Components

1. AgencyDbToAidDb 
  - Migration code from 
  - migrates Events, Clients, and Aid worker records from Agency's Database to a CouchDB 
2. QueueAxedaTimers  
  - Get newly migrated events we haven't seen before;
  - set timer on Axeda for an hour before `Event` with additional metadata; 
  - When timer goes off, Axeda service checks status of `Client's Device`, if status is "out", send text message to `Aid Worker's Phone Number`;
3. Device code that manages state of Client 
  - watch RFID Reader, toggles "in" or "out" status each time RFID reading is taken; 
  - On change of `Device status`, send HTTP POST updates to Axeda's JSON API 



# Installation on QueueAxedaTimer server

```
cp settings.default.json settings.json;
npm install;
./install;
```

# Installation on Device (Raspberry Pi)

The python serial connection has some dependencies.  See the following URLs for instructions.

http://bradsrpi.blogspot.com/2013/01/rfid-with-innovations-id12-rfid-reader.html
https://learn.adafruit.com/adafruit-nfc-rfid-on-raspberry-pi/freeing-uart-on-the-pi

Don't forget to `sudo apt-get install python-serial` and reboot.

# Run on Device

``
cd MaintainDeviceStatus;
./rfid_to_status.py
node status_to_axeda.js
```
