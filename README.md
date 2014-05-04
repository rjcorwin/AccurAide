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





# Installation

```
cp settings.default.json settings.json;
npm install;
./install;
```
