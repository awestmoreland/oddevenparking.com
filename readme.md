# Odd/Even Parking at a glance
Here in Grand Rapids, MI (as in many other cities), [Seasonal Parking Restrictions](https://www.grandrapidsmi.gov/Government/Departments/Public-Works-Department/Seasonal-Parking-Restrictions) are in place during the winter months. The side of the street is determined by the date and time. This is a quick way to check which side of the street is currently available for parking.



## How to use
1. Go to [oddevenparking.com](https://oddevenparking.com/)
2. Pick whether your destination is on the odd or even side of the street
3. Park on the side of the street indicated

**Alternatively, you can:**
* Append the street number to the URL, e.g. [oddevenparking.com/123](https://oddevenparking.com/123)
* Append `odd` or `even` to the URL, e.g. [oddevenparking.com/even](https://evenevenparking.com/odd)

**Bookmark the page for quick reference**


## How it works
The date is pulled from the user's device and most of the magic is done using JS on the front end. The deployed version uses minimal server-side code currently but the logic should be moved where possible (WiP).

Some alternate messaging is hard-coded into the markup and displayed/hidden as required by adding classnames. It's not pretty. It's not clever. It works. I never promised you a rose garden.



## FAQ
## If I'm looking at my phone anyway, can't I just look at the date and know which side of the street to park on?
Yes, but nobody likes a show-off
## Why is the code so ugly?
I hadn't originally planned to open source it
## What would improve this?
* If it was a native app
* If it could announce the correct side when your home Wi-Fi is detected (this is probably an easy win using IFTTT or similar)
* If it could detect your location and verbally announce the current parking side on arrival
* If it could change the color of a smart bulb in your porch light to indicate the current parking side
* If it had a "Remind me" feature to send you a push notification when the parking side changes
