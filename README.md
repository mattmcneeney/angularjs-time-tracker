# AngularJS Time Tracking Directive
Easily track how long users spend on your web pages with this simple directive.
The durations that are tracked are pre-defined.

## Requirements
* [Google Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs/)

## Usage
Include the directive in your app, and just add the `time-tracker` attribute to any element on the page.
```
<div time-tracker></div>
```

## Events
Events will be logged in Google Analytics as follows:
*Category*: `Time Tracker`
*Event Action*: `Track`
*Event Label*: `Seconds elapsed`
*Event Value*: `<number of seconds spent on page>`

