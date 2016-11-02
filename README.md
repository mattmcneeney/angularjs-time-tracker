# AngularJS Time Tracking Directive
Easily track how long users spend on your web pages with this simple directive.
The durations that are tracked are pre-defined.

## Requirements
* [Google Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/)

## Usage
Include the directive in your app, and simply add the time tracker element to the HTML of any page you want to track:
```
<time-tracker></time-tracker>
```

## Events
Events will be logged in Google Analytics as follows:
* *Category*: `Time Tracker`
* *Event Action*: `Track`
* *Event Label*: `Seconds elapsed`
* *Event Value*: `<number of seconds spent on page>`
