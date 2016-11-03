# AngularJS Time Tracking Directive
Easily track how long users spend on your website with this simple directive.
The durations that are tracked are pre-defined.

## Requirements
* [Google Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/)

## Usage
Include the directive in your app, and simply add the time tracker element inside `index.html`:
```HTML
<time-tracker></time-tracker>
```

## Events
Events will be logged in Google Analytics as follows:
* *Category*: `Time Tracker`
* *Event Action*: `Seconds elapsed`
* *Event Label*: `<number of seconds spent on page>`
